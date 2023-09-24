let user_name = document.getElementById("name");
let user_username = document.getElementById("username");
let user_email = document.getElementById("email");
let user_password = document.getElementById("password");
let btn = document.getElementById("btn");
const labels = document.querySelectorAll("label");
const inputs = document.querySelectorAll("input");

function clickEvent(event) {
  event.preventDefault();
  let usernameValue = user_username.value;
  let emailValue = user_email.value;
  let passwordValue = user_password.value;

  if (
    user_name.value === "" ||
    usernameValue === "" ||
    emailValue === "" ||
    passwordValue === ""
  ) {
    labels.forEach((label) => {
      label.style.display = "block";
    });
    inputs.forEach((input) => {
      input.style.border = "1px solid hsl(0, 100%, 74%)";
    });
  } else {
    user_name.value = "";
    user_username.value = "";
    user_email.value = "";
    user_password.value = "";
  }
}
window.addEventListener("DOMContentLoaded", function () {
  user_name.value = "";
  user_username.value = "";
  user_email.value = "";
  user_password.value = "";
});
btn.addEventListener("click", clickEvent);
