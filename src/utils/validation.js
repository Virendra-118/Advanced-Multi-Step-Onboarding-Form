export function validateAccountForm(formData) { 
    // console.log("Validating form data:", formData);
  const errors = {};

  if (!formData.fullName.trim()) {
    errors.fullName = "Full name is required";

  }
  
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } 
  else if (!/\S+@\S+\.\S+/.test(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  if (!formData.password) {
    errors.password = "Password is required";
  } else if (formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  return errors;
}
