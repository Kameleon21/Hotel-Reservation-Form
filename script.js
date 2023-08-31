// target values of the form
const form = document.querySelector(".form");
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

email.addEventListener("input", (event) => {
  if (email.validity.valid) {
    emailError.textContent = "";
    emailError.className = "error";
  } else {
    showError(email);
  }
});

firstName.addEventListener("input", (event) => {
  if (firstName.validity.valid) {
    nameError.textContent = "";
    nameError.className = "error";
  } else {
    showError(firstName);
  }
});

country.addEventListener("input", (event) => {
  if (country.validity.valid) {
    countryError.textContent = "";
    countryError.className = "error";
  } else {
    showError(country);
  }
});

postalCode.addEventListener("input", (event) => {
  if (postalCode.validity.valid) {
    postalCodeError.textContent = "";
    postalCodeError.className = "error";
  } else {
    showError(postalCode);
  }
});

pass.addEventListener("input", (event) => {
  if (pass.validity.valid) {
    passwordError.textContent = "";
    passwordError.className = "error";
  } else {
    showError(pass);
  }
});

form.addEventListener("submit", (event) => {
  if (!email.validity.valid) {
    showError();
    event.preventDefault();
  }
});

// displays the error based on type of issue
function showError(field) {
  switch (field) {
    case firstName:
      firstNameErrorContent();
      break;
    case email:
      emailErrorContent();
      break;
    case country:
      countryErrorContent();
      break;
    case postalCode:
      postalCodeErrorContent();
      break;
    case pass:
      passErrorContent();
      break;
    default:
      alert("No field chosen");
  }

  errorType.className = "error active";
  if ((errorType.className = "error")) {
    errorType.textContent = " ";
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
    postalCode.textContent = "You need to enter your country postal code.";
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
