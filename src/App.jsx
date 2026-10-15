
import { useState } from "react";

import Onboarding from "./pages/Onboarding";
import AccountInformation from "./pages/AccountInformation";
import BusinessInformation from "./pages/BusinessInformation";
import ChoosePlan from "./pages/ChoosePlan";

function App() {
  const [step, setStep] = useState(0);

  return (
    <>
      {step === 0 && (
        <Onboarding
          onGetStarted={() => setStep(1)}
        />
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
          onNext={() => alert("Documents page coming next!")}
        />
      )}
    </>
  );
}

export default App;
