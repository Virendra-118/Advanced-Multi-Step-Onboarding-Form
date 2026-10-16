
import Onboarding from "./pages/Onboarding";
import AccountInformation from "./pages/AccountInformation";
import BusinessInformation from "./pages/BusinessInformation";
import ChoosePlan from "./pages/ChoosePlan";
import UploadDocuments from "./pages/UploadDocuments";
import Review from "./pages/Review";
import Success from "./pages/Success";
import { useOnboarding } from "./context/OnboardingContext";

function App() {
  const { state, dispatch, saveSubmission } = useOnboarding();

  const step = state.step;

  function goToStep(nextStep) {
    dispatch({
      type: "SET_STEP",
      payload: nextStep,
    });
  }

  function handleSubmit() {
    const saved = saveSubmission();

    if (!saved) {
      alert("Unable to save your data. Please try again.");
      return;
    }

    alert("Onboarding submitted successfully!");
    goToStep(6);
  }

  return (
    <>
      {/* Welcome Page */}
      {step === 0 && (
        <Onboarding onGetStarted={() => goToStep(1)} />
      )}

      {/* Account Information */}
      {step === 1 && (
        <AccountInformation
          onBack={() => goToStep(0)}
          onNext={() => goToStep(2)}
        />
      )}

      {/* Business Information */}
      {step === 2 && (
        <BusinessInformation
          onBack={() => goToStep(1)}
          onNext={() => goToStep(3)}
        />
      )}

      {/* Choose Plan */}
      {step === 3 && (
        <ChoosePlan
          onBack={() => goToStep(2)}
          onNext={() => goToStep(4)}
        />
      )}

      {/* Upload Documents */}
      {step === 4 && (
        <UploadDocuments
          onBack={() => goToStep(3)}
          onNext={() => goToStep(5)}
        />
      )}

      {/* Review & Submit */}
      {step === 5 && (
        <Review
          onBack={() => goToStep(4)}
          onSubmit={handleSubmit}
          onEditAccount={() => goToStep(1)}
          onEditBusiness={() => goToStep(2)}
          onEditPlan={() => goToStep(3)}
          onEditDocuments={() => goToStep(4)}
        />
      )}

      {/* Success Page */}
      {step === 6 && (
  <Success onGoToDashboard={() => goToStep(0)} />
)}
    </>
  );
}

export default App;
