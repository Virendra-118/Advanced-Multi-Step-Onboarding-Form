import { useState } from "react";
import Onboarding from "./pages/Onboarding";
import AccountInformation from "./pages/AccountInformation";
import BusinessInformation from "./pages/BusinessInformation";
import ChoosePlan from "./pages/ChoosePlan";
import UploadDocuments from "./pages/UploadDocuments";

function App() {
  const [step, setStep] = useState(0);

  return (
    <>
      {step === 0 && (
        <Onboarding onGetStarted={() => setStep(1)} />
      )}

      {step === 1 && (
        <AccountInformation
          onBack={() => setStep(0)}
          onNext={() => setStep(2)}
        />
      )}

      {step === 2 && (
        <BusinessInformation
          onBack={() => setStep(1)}
          onNext={() => setStep(3)}
        />
      )}

      {step === 3 && (
        <ChoosePlan
          onBack={() => setStep(2)}
          onNext={() => setStep(4)}
        />
      )}

      {step === 4 && (
        <UploadDocuments
          onBack={() => setStep(3)}
          onNext={() => alert("Review page coming next!")}
        />
      )}
    </>
  );
}

export default App;
