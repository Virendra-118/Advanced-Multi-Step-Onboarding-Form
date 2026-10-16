
import StepIndicator from "../components/StepIndicator";
import FileUpload from "../components/FileUpload";
import { useOnboarding } from "../context/OnboardingContext";

function UploadDocuments({ onBack, onNext }) {
  const { state, dispatch } = useOnboarding();
  const files = state.files;

  function handleFilesChange(updatedFiles) {
    dispatch({
      type: "SET_FILES",
      payload: updatedFiles,
    });
  }

  function handleSubmit() {
    onNext();
  }

  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 p-4 md:p-8">
      <div className="w-full max-w-4xl rounded-2xl border border-blue-100 bg-white p-6 shadow-sm md:p-10">
        <StepIndicator currentStep={3} />

        <div className="mt-8">
          <h1 className="text-2xl font-bold text-blue-950">
            Upload your documents
          </h1>

          <p className="mt-2 text-sm text-slate-500">
            Select the documents required to complete your profile.
          </p>
        </div>

        <div className="mt-7">
          <FileUpload
            label="Upload Documents"
            files={files}
            onChange={handleFilesChange}
          />
        </div>

        <div className="mt-8 flex justify-between border-t border-slate-100 pt-6">
          <button
            type="button"
            onClick={onBack}
            className="text-sm font-medium text-blue-600 hover:text-blue-800"
          >
            ← Back
          </button>

          <button
            type="button"
            onClick={handleSubmit}
            className="rounded-lg bg-blue-600 px-7 py-3 text-sm font-semibold text-white hover:bg-blue-700"
          >
            Next →
          </button>
        </div>
      </div>
    </div>
  );
}

export default UploadDocuments;
