// target values of the form
const form = document.querySelector(".mainForm");
const firstName = document.querySelector(".name");
const email = document.querySelector(".email");
const country = document.querySelector(".country");
const postalCode = document.querySelector(".postalCode");
const pass = document.querySelector(".password");
const confirmPassword = document.querySelector(".conPassword");
// target all error messages
const nameError = document.querySelector(".name + span.error");
const emailError = document.querySelector(".email + span.error");
const countryError = document.querySelector(".country + span.error");
const postalCodeError = document.querySelector(".postalCode + span.error");
const passwordError = document.querySelector(".password + span.error");
const confirmPasswordError = document.querySelector(
  ".conPassword + span.error"
);

firstName.addEventListener("input", (event) => {
  if (firstName.validity.valid) {
    nameError.textContent = "";
    nameError.className = "error";
  } else {
    showError(firstName, nameError);
  }
});

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError(email, emailError);
  }
});

country.addEventListener("input", (event) => {
  if (country.validity.valid) {
    countryError.textContent = "";
    countryError.className = "error";
  } else {
    showError(country, countryError);
  }
});

postalCode.addEventListener("input", (event) => {
  if (postalCode.validity.valid) {
    postalCodeError.textContent = "";
    postalCodeError.className = "error";
  } else {
    showError(postalCode, postalCodeError);
  }
});

pass.addEventListener("input", (event) => {
  if (pass.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
  } else {
    showError(pass, passwordError);
  }
});

confirmPassword.addEventListener("input", (event) => {
  let passValue = document.querySelector(".password").value;
  let confirmPasswordValue = document.querySelector(".conPassword").value;
  if (confirmPasswordValue === passValue) {
    confirmPasswordError.textContent = " ";
    confirmPasswordError.className = "error";
  } else {
    showError(confirmPassword, confirmPasswordError);
  }
});

// added an array to loop through all fields
const fields = [firstName, email, country, postalCode, pass, confirmPassword];

form.addEventListener("submit", (event) => {
  let isFormValid = true;

  fields.forEach((field) => {
    if (!field.validity.valid) {
      showError(field, field.nextElementSibling);
      isFormValid = false;
    }
  });

  if (!isFormValid) {
    event.preventDefault();
  }
});

// displays the error based on type of issue
function showError(field, errorType) {
  switch (field) {
    case firstName:
      errorType.className = "error active";
      firstNameErrorContent();
      break;
    case email:
      errorType.className = "error active";
      emailErrorContent();
      break;
    case country:
      errorType.className = "error active";
      countryErrorContent();
      break;
    case postalCode:
      errorType.className = "error active";
      postalCodeErrorContent();
      break;
    case pass:
      errorType.className = "error active";
      passErrorContent();
      break;
    case confirmPassword:
      errorType.className = "error active";
      confirmPasswordErrorContent();
      break;
  }
}

// show error details for first name
function firstNameErrorContent() {
  if (firstName.validity.valueMissing) {
    nameError.textContent = "You need to enter a name.";
  } else if (firstName.validity.tooShort) {
    nameError.textContent = `Name should be at least ${firstName.minLength} characters; you entered ${firstName.value.length}.`;
  }
}

// email error details
function emailErrorContent() {
  if (email.validity.valueMissing) {
    emailError.textContent = "You need to enter an email address.";
  } else if (email.validity.typeMismatch) {
    emailError.textContent = "Entered value needs to be an email address.";
  } else if (email.validity.tooShort) {
    emailError.textContent = `Email should be at least ${email.minLength} characters; you entered ${email.value.length}.`;
  }
}

// country error details
function countryErrorContent() {
  if (country.validity.valueMissing) {
    countryError.textContent = "You need to enter your country.";
  } else if (country.validity.tooShort) {
    countryError.textContent = `Country should be at least ${country.minLength} characters; you entered ${country.value.length}.`;
  }
}

// postal code error details
function postalCodeErrorContent() {
  if (postalCode.validity.valueMissing) {
    postalCodeError.textContent = "You need to enter your country postal code.";
  } else if (postalCode.validity.tooShort) {
    postalCodeError.textContent = `Postal code should be at least ${postalCode.minLength} characters; you entered ${postalCode.value.length}.`;
  }
}

// password code error details
function passErrorContent() {
  if (pass.validity.valueMissing) {
    passwordError.textContent = "You need to enter a password.";
  } else if (pass.validity.tooShort) {
    passwordError.textContent = `Password code should be at least ${pass.minLength} characters; you entered ${pass.value.length}.`;
  }
}

function confirmPasswordErrorContent() {
  confirmPasswordError.textContent = "Passwords don't match";
}
