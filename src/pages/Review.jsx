
import StepIndicator from "../components/StepIndicator";
import { useOnboarding } from "../context/OnboardingContext";

function Review({
  onBack,
  onSubmit,
  onEditAccount,
  onEditBusiness,
  onEditPlan,
  onEditDocuments,
}) {
  const { state } = useOnboarding();

  const { accountData, businessData, selectedPlan, files } = state;

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4 md:p-8">
      <div className="w-full max-w-4xl rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-10">
        <StepIndicator currentStep={4} />

        <div className="mt-8">
          <h1 className="text-2xl font-bold text-blue-950">
            Review your information
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Please confirm your details before submitting.
          </p>
        </div>

        {/* Account Information */}
        <div className="mt-6 divide-y divide-slate-100 rounded-xl border border-slate-200 px-5">
          <div className="flex items-start justify-between gap-4 py-5">
            <div className="flex min-w-0 gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl">
                👤
              </div>

              <div className="min-w-0">
                <h2 className="font-semibold text-blue-950">
                  Account Information
                </h2>

                <p className="mt-2 break-words text-sm text-slate-600">
                  {accountData.fullName || "Not provided"}
                </p>

                <p className="mt-1 break-words text-sm text-slate-500">
                  {accountData.email || "Not provided"}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onEditAccount}
              className="text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              Edit
            </button>
          </div>

          {/* Business Details */}
          <div className="flex items-start justify-between gap-4 py-5">
            <div className="flex min-w-0 gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl">
                🏢
              </div>

              <div className="min-w-0">
                <h2 className="font-semibold text-blue-950">
                  Business Details
                </h2>

                <p className="mt-2 break-words text-sm text-slate-600">
                  {businessData.businessName || "Not provided"}
                </p>

                {businessData.accountType === "Individual" ? (
                  <p className="mt-1 text-sm text-slate-500">
                    Individual
                  </p>
                ) : (
                  <p className="mt-1 break-words text-sm text-slate-500">
                    {businessData.companySize || "Not provided"}
                    {" · "}
                    {businessData.industry || "Not provided"}
                  </p>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={onEditBusiness}
              className="text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              Edit
            </button>
          </div>

          {/* Selected Plan */}
          <div className="flex items-start justify-between gap-4 py-5">
            <div className="flex min-w-0 gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl">
                ✨
              </div>

              <div>
                <h2 className="font-semibold text-blue-950">
                  Plan
                </h2>

                <p className="mt-2 text-sm text-slate-600">
                  {selectedPlan} Plan
                </p>

                <p className="mt-1 text-sm text-slate-500">
                  {selectedPlan === "Starter"
                    ? "$0/month"
                    : selectedPlan === "Enterprise"
                    ? "$49/month"
                    : "$19/month"}
                </p>
              </div>
            </div>

            <button
              type="button"
              onClick={onEditPlan}
              className="text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              Edit
            </button>
          </div>

          {/* Uploaded Documents */}
          <div className="flex items-start justify-between gap-4 py-5">
            <div className="flex min-w-0 gap-4">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-xl">
                📁
              </div>

              <div className="min-w-0">
                <h2 className="font-semibold text-blue-950">
                  Documents
                </h2>

                {files.length > 0 ? (
                  <ul className="mt-2 space-y-1">
                    {files.map((file, index) => (
                      <li
                        key={`${file.name}-${index}`}
                        className="break-all text-sm text-slate-500"
                      >
                        {file.name}
                      </li>
                    ))}
                  </ul>
                ) : (
                  <p className="mt-2 text-sm text-slate-500">
                    No documents selected
                  </p>
                )}
              </div>
            </div>

            <button
              type="button"
              onClick={onEditDocuments}
              className="text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              Edit
            </button>
          </div>
        </div>

        {/* Bottom Buttons */}
        <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
          <button
            type="button"
            onClick={onBack}
            className="text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            ← Back
          </button>

          <button
            type="button"
            onClick={onSubmit}
            className="rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
          >
            Submit →
          </button>
        </div>
      </div>
    </div>
  );
}

export default Review;
