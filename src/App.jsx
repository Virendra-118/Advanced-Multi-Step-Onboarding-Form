import { useState } from "react";
import Onboarding from "./pages/Onboarding";
import AccountInformation from "./pages/AccountInformation";

function App() {
  const [step, setStep] = useState(0);

  return (
    <div>
      {step === 0 ? (
        <Onboarding onGetStarted={() => setStep(1)} />
      ) : (
        <AccountInformation
          onBack={() => setStep(0)}
          onNext={() => alert("Next step coming soon!")}
        />
      )}
    </div>
  );
}

export default App;