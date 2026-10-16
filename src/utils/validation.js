
export function validateAccountForm(formData) {
  const errors = {};

  // Validate full name
  if (!formData.fullName.trim()) {
    errors.fullName = "Full name is required";
  }

  // Validate email
  if (!formData.email.trim()) {
    errors.email = "Email is required";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
    errors.email = "Please enter a valid email address";
  }

  // Validate password
  if (!formData.password) {
    errors.password = "Password is required";
  } else if (formData.password.length < 8) {
    errors.password = "Password must be at least 8 characters";
  }

  return errors;
}
