
import { useState } from "react";
import StepIndicator from "../components/StepIndicator";
import FormField from "../components/FormField";
import { validateAccountForm } from "../utils/validation";
import { useOnboarding } from "../context/OnboardingContext";

function AccountInformation({ onBack, onNext }) {
  const { state, dispatch } = useOnboarding();
  const [errors, setErrors] = useState({});

  const formData = state.accountData;

  function handleChange(e) {
    const { name, value } = e.target;

    dispatch({
      type: "UPDATE_ACCOUNT",
      payload: { [name]: value },
    });

    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  }

  function handleSubmit(e) {
    e.preventDefault();

    const validationErrors = validateAccountForm(formData);
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    onNext();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4 md:p-8">
      <div className="w-full max-w-4xl rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-10">
        <StepIndicator currentStep={0} />

        <div className="mt-8">
          <h1 className="text-2xl font-bold text-blue-950">
            Create your account
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Let's set up your basic information.
          </p>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="mt-7 space-y-5">
            <FormField
              label="Full Name"
              name="fullName"
              type="text"
              placeholder="Enter your full name"
              value={formData.fullName}
              onChange={handleChange}
              required
              error={errors.fullName}
            />

            <FormField
              label="Email Address"
              name="email"
              type="email"
              placeholder="Enter your email"
              value={formData.email}
              onChange={handleChange}
              required
              error={errors.email}
            />

            <FormField
              label="Password"
              name="password"
              type="password"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
              error={errors.password}
            />
          </div>

          <div className="mt-8 flex items-center justify-between border-t border-slate-100 pt-6">
            <button
              type="button"
              onClick={onBack}
              className="rounded-lg border border-slate-200 px-6 py-3 text-sm font-medium text-slate-600 hover:bg-slate-50"
            >
              ← Back
            </button>

            <button
              type="submit"
              className="rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white hover:bg-blue-700"
            >
              Next →
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AccountInformation;
