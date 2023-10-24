const password = document.querySelector("#password");
const passwordConfirm = document.querySelector("#password-confirm");
const submitBtn = document.querySelector("#submit");

submitBtn.addEventListener("click", pwValid(password, passwordConfirm));

function pwValid(pw, pwConf) {
  if (pw === pwConf) {
    //validate, take to next page
  } else {
    //some sort of alert, dont validate
  }
}
