function StepIndicator({ currentStep }) {
  const steps = [
    "Account",
    "Business",
    "Plan",
    "Documents",
    "Review",
  ];

  return (
    <div className="w-full">
      {/* Circles and Connecting Lines */}
      <div className="flex w-full items-center">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex flex-1 items-center"
          >
            {/* Step Circle */}
            <div
              className={`z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-sm font-medium ${
                index <= currentStep
                  ? "bg-blue-600 text-white"
                  : "bg-gray-200 text-gray-500"
              }`}
            >
              {index + 1}
            </div>

            {/* Connecting Line */}
            {index < steps.length - 1 && (
              <div
                className={`h-1 flex-1 rounded-full ${
                  index < currentStep
                    ? "bg-blue-600"
                    : "bg-gray-200"
                }`}
              />
            )}
          </div>
        ))}
      </div>

      {/* Step Names */}
      <div className="mt-3 flex w-full">
        {steps.map((step, index) => (
          <div
            key={step}
            className="flex flex-1 justify-center"
          >
            <span
              className={`whitespace-nowrap text-center text-xs sm:text-sm ${
                index === currentStep
                  ? "font-semibold text-blue-600"
                  : "text-gray-600"
              }`}
            >
              {step}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default StepIndicator;