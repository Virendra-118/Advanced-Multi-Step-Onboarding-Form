
import {
  createContext,
  useContext,
  useReducer,
} from "react";

const OnboardingContext = createContext();

const STORAGE_KEY = "devflow-onboarding";

const initialState = {
  step: 0,
  accountData: {
    fullName: "",
    email: "",
    password: "",
  },
  businessData: {
    accountType: "Business",
    businessName: "",
    companySize: "",
    industry: "",
  },
  selectedPlan: "Pro",
  files: [],
};

// Manage the current person's form data
function onboardingReducer(state, action) {
  switch (action.type) {
    case "SET_STEP":
      return {
        ...state,
        step: action.payload,
      };

    case "UPDATE_ACCOUNT":
      return {
        ...state,
        accountData: {
          ...state.accountData,
          ...action.payload,
        },
      };

    case "UPDATE_BUSINESS":
      return {
        ...state,
        businessData: {
          ...state.businessData,
          ...action.payload,
        },
      };

    case "SET_PLAN":
      return {
        ...state,
        selectedPlan: action.payload,
      };

    case "SET_FILES":
      return {
        ...state,
        files: action.payload,
      };

    case "RESET":
      return {
        ...initialState,
        accountData: { ...initialState.accountData },
        businessData: { ...initialState.businessData },
        files: [],
      };

    default:
      return state;
  }
}

// Share form state and submission function with all pages
export function OnboardingProvider({ children }) {
  const [state, dispatch] = useReducer(
    onboardingReducer,
    initialState
  );

  // Save every completed submission without replacing older records
  function saveSubmission() {
    try {
      const savedData = localStorage.getItem(STORAGE_KEY);

      // Support both the new array format and your old object format
      let previousSubmissions = [];

      if (savedData) {
        const parsedData = JSON.parse(savedData);

        if (Array.isArray(parsedData)) {
          previousSubmissions = parsedData;
        } else {
          // Preserve the old single record if it contains user data
          if (parsedData.accountData || parsedData.businessData) {
            previousSubmissions = [parsedData];
          }
        }
      }

      const newSubmission = {
        id: crypto.randomUUID(),
        accountData: {
          fullName: state.accountData.fullName,
          email: state.accountData.email,
        },
        businessData: { ...state.businessData },
        selectedPlan: state.selectedPlan,
        submittedAt: new Date().toISOString(),
      };

      const updatedSubmissions = [
        ...previousSubmissions,
        newSubmission,
      ];

      localStorage.setItem(
        STORAGE_KEY,
        JSON.stringify(updatedSubmissions)
      );

      return true;
    } catch (error) {
      console.error("Error saving submission:", error);
      return false;
    }
  }

  return (
    <OnboardingContext.Provider
      value={{ state, dispatch, saveSubmission }}
    >
      {children}
    </OnboardingContext.Provider>
  );
}

// Custom hook
export function useOnboarding() {
  const context = useContext(OnboardingContext);

  if (!context) {
    throw new Error(
      "useOnboarding must be used inside OnboardingProvider"
    );
  }

  return context;
}
