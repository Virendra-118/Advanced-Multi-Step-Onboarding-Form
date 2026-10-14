import welcomeImage from "../assets/Project_Welcome_page.jpg";

function Onboarding({ onGetStarted }) {
  const steps = [
    "Create your account",
    "Tell us about your business",
    "Choose your plan",
    "Upload documents",
    "Review & submit",
  ];
  return (
    <div className="min-h-screen bg-slate-50 flex items-center justify-center p-4 md:p-8">
      <div className="w-full max-w-5xl rounded-2xl bg-white border border-blue-100 p-6 md:p-10 shadow-sm">

        <h1 className="text-xl font-bold text-blue-950">
          DevFlow
        </h1>

        <div className="mt-8 grid items-center gap-8 md:grid-cols-2">

          {/* Welcome Content */}
          <div>
            <h2 className="text-3xl font-bold text-blue-950">
              Welcome to DevFlow!
            </h2>

            <p className="mt-3 text-sm leading-6 text-slate-500">
              Let's get you set up. It only takes a few minutes
              to create your account and start your journey.
            </p>

            <ul className="mt-6 space-y-4">
              {steps.map((step) => (
                <li
                  key={step}
                  className="flex items-center gap-3 text-sm text-slate-700"
                >
                  <span className="text-emerald-500">✓</span>
                  {step}
                </li>
              ))}
            </ul>

            <p className="mt-8 text-sm text-slate-500">
              Already have an account?{" "}
              <a href="#" className="text-blue-600 hover:underline">
                Sign in
              </a>
            </p>
          </div>

          {/* Welcome Image */}
          <div className="flex items-center justify-center">
            <img
              src={welcomeImage}
              alt="Team collaborating on a project"
              className="w-full max-w-lg h-auto object-contain"
            />
          </div>

        </div>

        {/* Get Started Button */}
        <div className="mt-8 flex justify-end border-t border-slate-100 pt-6">
          <button
            onClick={onGetStarted}
            className="rounded-lg bg-blue-600 px-6 py-3 text-sm font-semibold text-white hover:bg-blue-700 transition"
          >
            Get Started →
          </button>
        </div>

      </div>
    </div>
  );
}

export default Onboarding;