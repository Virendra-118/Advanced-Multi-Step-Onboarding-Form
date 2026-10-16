
import { useEffect, useState } from "react";

function FileUpload({ label, files = [], onChange }) {
  const [previewFile, setPreviewFile] = useState(null);

  // Clean up the temporary preview URL when the preview changes
  useEffect(() => {
    if (!previewFile) return;

    const fileURL = URL.createObjectURL(previewFile);

    return () => {
      URL.revokeObjectURL(fileURL);
    };
  }, [previewFile]);

  function handleFileChange(e) {
    const newFiles = Array.from(e.target.files);

    onChange([...files, ...newFiles]);

    // Allow selecting the same file again
    e.target.value = "";
  }

  function handleViewFile(file) {
    const fileURL = URL.createObjectURL(file);
    const newTab = window.open(fileURL, "_blank");

    if (!newTab) {
      URL.revokeObjectURL(fileURL);
    } else {
      // Revoke the temporary URL after the new tab has had time to load
      setTimeout(() => URL.revokeObjectURL(fileURL), 60000);
    }
  }

  function handleRemoveFile(indexToRemove) {
    const updatedFiles = files.filter(
      (_, index) => index !== indexToRemove
    );

    onChange(updatedFiles);
  }

  return (
    <div className="w-full">
      <label className="mb-2 block text-sm font-medium text-slate-700">
        {label}
      </label>

      <div className="rounded-lg border-2 border-dashed border-slate-300 p-6 transition hover:border-blue-500">
        <input
          type="file"
          multiple
          accept=".pdf,.doc,.docx,.jpg,.jpeg,.png"
          onChange={handleFileChange}
          className="w-full text-sm text-slate-500 file:mr-4 file:rounded-lg file:border-0 file:bg-blue-50 file:px-4 file:py-2 file:font-medium file:text-blue-600"
        />

        <p className="mt-3 text-sm text-slate-500">
          Supported formats: PDF, DOC, DOCX, JPG, PNG
        </p>

        {files.length > 0 && (
          <div className="mt-4 space-y-3">
            {files.map((file, index) => (
              <div
                key={`${file.name}-${index}`}
                className="flex items-center justify-between gap-3 rounded-lg bg-slate-50 p-3"
              >
                <div className="min-w-0">
                  <p className="break-all text-sm font-medium text-slate-700">
                    {file.name}
                  </p>

                  <p className="mt-1 text-xs text-slate-500">
                    Size: {(file.size / 1024).toFixed(2)} KB
                  </p>
                </div>

                <div className="flex shrink-0 gap-3">
                  <button
                    type="button"
                    onClick={() => handleViewFile(file)}
                    className="text-sm font-medium text-blue-600 hover:text-blue-800"
                  >
                    View
                  </button>

                  <button
                    type="button"
                    onClick={() => handleRemoveFile(index)}
                    className="text-sm font-medium text-red-500 hover:text-red-700"
                  >
                    Remove
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

export default FileUpload;
