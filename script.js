const myInput = document.querySelector("#password");
const letter = document.querySelector("#letter");
const capital = document.querySelector("#capital");
const number = document.querySelector("#number");
const length = document.querySelector("#length");
const message = document.querySelector("#message");

// When user clicks password field, show message box
myInput.addEventListener("focus", () => {
  message.style.display = "block";
});

myInput.addEventListener("blur", () => {
  message.style.display = "none";
});

// When the entire input is valid;

function validPassword(input) {
  let lowerCaseLetters = /[a-z]/g;
  let upperCaseLetters = /[A-Z]/g;
  let numbers = /[0-9]/g;

  if (
    myInput.value.match(lowerCaseLetters) &&
    myInput.value.match(upperCaseLetters) &&
    myInput.value.match(numbers) &&
    myInput.value.length >= 8
  ) {
    return true;
  } else {
    return false;
  }
}

// Validate on input
myInput.addEventListener("keyup", () => {
  // Validate password field
  if (validPassword(myInput)) {
    myInput.style.boxShadow = "0px 0px 10px 0px var(--pwd-valid)";
  } else {
    myInput.style.boxShadow = "none";
  }

  // Validate lowercase letters
  let lowerCaseLetters = /[a-z]/g;
  if (myInput.value.match(lowerCaseLetters)) {
    letter.classList.remove("invalid");
    letter.classList.add("valid");
  } else {
    letter.classList.remove("valid");
    letter.classList.add("invalid");
  }

  // Validate capital letters
  let upperCaseLetters = /[A-Z]/g;
  if (myInput.value.match(upperCaseLetters)) {
    capital.classList.remove("invalid");
    capital.classList.add("valid");
  } else {
    capital.classList.remove("valid");
    capital.classList.add("invalid");
  }

  // Validate numbers
  let numbers = /[0-9]/g;
  if (myInput.value.match(numbers)) {
    number.classList.remove("invalid");
    number.classList.add("valid");
  } else {
    number.classList.remove("valid");
    number.classList.add("invalid");
  }

  // Validate length
  if (myInput.value.length >= 8) {
    length.classList.remove("invalid");
    length.classList.add("valid");
  } else {
    length.classList.remove("valid");
    length.classList.add("invalid");
  }
});
