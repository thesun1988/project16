// script.js

function validateAndSubmit() {
  const validationResult = validateAndSanitizePhoneNumber();

  if (typeof validationResult === 'string') {
    alert(validationResult);
  } else {
    console.log("Sanitized Phone Number:", validationResult);
  }
}

function validateAndSanitizePhoneNumber() {
  const phoneNumberInput = document.getElementById('phoneNumberInput').value;

  if (!phoneNumberInput.trim()) {
    return "Phone number cannot be blank.";
  }

  const phoneNumberRegex = /^[0-9-]+$/;
  if (!phoneNumberRegex.test(phoneNumberInput)) {
    return "Phone number can only contain numbers and dashes.";
  }

  const sanitizedPhoneNumber = phoneNumberInput.replace(/[^0-9-]/g, '');

  return sanitizedPhoneNumber;
}
