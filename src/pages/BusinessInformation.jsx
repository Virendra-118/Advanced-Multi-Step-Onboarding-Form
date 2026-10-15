import { useState } from "react";
import StepIndicator from "../components/StepIndicator";
import FormField from "../components/FormField";

function BusinessInformation({ onBack, onNext }) {
  const [businessData, setBusinessData] = useState({
    accountType: "Business",
    businessName: "",
    companySize: "",
    industry: "",
  });

  function handleChange(e) {
    const { name, value } = e.target;

    setBusinessData({
      ...businessData,
      [name]: value,
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    console.log("Business Information:", businessData);
    onNext();
  }

  const selectClass =
    "w-full rounded-lg border border-slate-300 bg-white px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100";

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4 md:p-8">
      <div className="w-full max-w-4xl rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-10">
        <StepIndicator currentStep={1} />

        <div className="mt-8">
          <h1 className="text-2xl font-bold text-blue-950">
            Tell us about your business
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            This helps us tailor the best experience for you.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          {/* Account Type */}
          <div className="mt-6 grid grid-cols-2 gap-3">
            {["Business", "Individual"].map((type) => (
              <button
                key={type}
                type="button"
                onClick={() =>
                  setBusinessData({
                    ...businessData,
                    accountType: type,
                  })
                }
                className={`flex items-center gap-2 rounded-lg border p-3 text-sm font-medium transition ${
                  businessData.accountType === type
                    ? "border-blue-500 bg-blue-50 text-blue-700"
                    : "border-slate-200 text-slate-600 hover:border-blue-300"
                }`}
              >
                <span
                  className={`flex h-4 w-4 items-center justify-center rounded-full border ${
                    businessData.accountType === type
                      ? "border-blue-600"
                      : "border-slate-300"
                  }`}
                >
                  {businessData.accountType === type && (
                    <span className="h-2 w-2 rounded-full bg-blue-600" />
                  )}
                </span>

                {type}
              </button>
            ))}
          </div>

          <div className="mt-6 space-y-5">
            <FormField
              label={
                businessData.accountType === "Business"
                  ? "Business Name"
                  : "Full Name"
              }
              name="businessName"
              placeholder={
                businessData.accountType === "Business"
                  ? "Enter business name"
                  : "Enter your full name"
              }
              value={businessData.businessName}
              onChange={handleChange}
              required
            />

            {businessData.accountType === "Business" && (
              <>
                {/* Company Size */}
                <div>
                  <label
                    htmlFor="companySize"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Company Size <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="companySize"
                    name="companySize"
                    value={businessData.companySize}
                    onChange={handleChange}
                    required
                    className={selectClass}
                  >
                    <option value="">Select company size</option>
                    <option value="1-10 employees">1-10 employees</option>
                    <option value="11-50 employees">11-50 employees</option>
                    <option value="51-200 employees">51-200 employees</option>
                    <option value="201-500 employees">201-500 employees</option>
                    <option value="500+ employees">500+ employees</option>
                  </select>
                </div>

                {/* Industry */}
                <div>
                  <label
                    htmlFor="industry"
                    className="mb-2 block text-sm font-medium text-slate-700"
                  >
                    Industry <span className="text-red-500">*</span>
                  </label>

                  <select
                    id="industry"
                    name="industry"
                    value={businessData.industry}
                    onChange={handleChange}
                    required
                    className={selectClass}
                  >
                    <option value="">Select industry</option>
                    <option value="Technology">Technology</option>
                    <option value="Healthcare">Healthcare</option>
                    <option value="Education">Education</option>
                    <option value="Finance">Finance</option>
                    <option value="Retail">Retail</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
              </>
            )}
          </div>

          {/* Navigation */}
          <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
            <button
              type="button"
              onClick={onBack}
              className="text-sm font-medium text-blue-600 hover:text-blue-800"
            >
              Back
            </button>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white transition hover:bg-blue-700"
            >
              Next →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default BusinessInformation;
