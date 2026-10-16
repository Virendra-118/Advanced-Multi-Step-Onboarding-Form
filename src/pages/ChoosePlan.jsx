
import StepIndicator from "../components/StepIndicator";
import { useOnboarding } from "../context/OnboardingContext";

function ChoosePlan({ onBack, onNext }) {
  const { state, dispatch } = useOnboarding();
  const selectedPlan = state.selectedPlan;

  const plans = [
    {
      name: "Starter",
      price: "$0",
      features: ["Basic features", "1 team member", "5 projects"],
    },
    {
      name: "Pro",
      price: "$19",
      features: [
        "Advanced features",
        "10 team members",
        "Unlimited projects",
      ],
    },
    {
      name: "Enterprise",
      price: "$49",
      features: [
        "All features",
        "Unlimited members",
        "Priority support",
      ],
    },
  ];

  function handleSelectPlan(planName) {
    dispatch({
      type: "SET_PLAN",
      payload: planName,
    });
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4">
      <div className="w-full max-w-5xl rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-10">
        <StepIndicator currentStep={2} />

        <h1 className="mt-8 text-2xl font-bold text-blue-950">
          Select your plan
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Choose the plan that fits your needs.
        </p>

        <div className="mt-8 grid grid-cols-1 gap-5 sm:grid-cols-3">
          {plans.map((plan) => (
            <div
              key={plan.name}
              onClick={() => handleSelectPlan(plan.name)}
              className={`cursor-pointer rounded-xl border p-5 ${
                selectedPlan === plan.name
                  ? "border-blue-600 bg-blue-50"
                  : "border-slate-200 hover:border-blue-300"
              }`}
            >
              {plan.name === "Pro" && (
                <p className="mb-2 text-xs font-semibold text-blue-600">
                  MOST POPULAR
                </p>
              )}

              <h2 className="text-lg font-semibold text-blue-950">
                {plan.name}
              </h2>

              <p className="mt-3 text-3xl font-bold text-blue-950">
                {plan.price}
                <span className="text-sm font-normal text-slate-500">
                  /month
                </span>
              </p>

              <ul className="mt-5 space-y-3">
                {plan.features.map((feature) => (
                  <li key={feature} className="text-sm text-slate-600">
                    <span className="mr-2 text-emerald-500">✓</span>
                    {feature}
                  </li>
                ))}
              </ul>

              <button
                type="button"
                onClick={(e) => {
                  e.stopPropagation();
                  handleSelectPlan(plan.name);
                }}
                className={`mt-6 w-full rounded-lg px-4 py-2 text-sm font-semibold ${
                  selectedPlan === plan.name
                    ? "bg-blue-600 text-white"
                    : "border border-slate-200 text-blue-600"
                }`}
              >
                {selectedPlan === plan.name
                  ? "Selected"
                  : "Select Plan"}
              </button>
            </div>
          ))}
        </div>

        <div className="mt-8 flex justify-between border-t border-slate-100 pt-6">
          <button
            type="button"
            onClick={onBack}
            className="text-sm font-medium text-blue-600"
          >
            ← Back
          </button>

          <button
            type="button"
            onClick={onNext}
            className="rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default ChoosePlan;
