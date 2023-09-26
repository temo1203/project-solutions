document.addEventListener("DOMContentLoaded", function () {
  let inp = document.querySelector("input");
  let btn = document.querySelector("button");
  let emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

  btn.addEventListener("click", () => {
    if (inp.value.trim() === "") {
      console.log("Email cannot be empty");
    } else if (!emailPattern.test(inp.value.trim())) {
      console.log("Invalid email format");
    } else {
      console.log("Valid email");
    }
  });
});
