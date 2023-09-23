window.addEventListener("load", function () {
  var yearInput = document.getElementById("year");
  var monthInput = document.getElementById("month");
  var daysInput = document.getElementById("days");
  yearInput.value = "";
  monthInput.value = "";
  daysInput.value = "";
});
function calculateAge() {
  let yearValue = parseInt(document.getElementById("year").value);
  let monthValue = parseInt(document.getElementById("month").value) - 1;
  let daysValue = parseInt(document.getElementById("days").value);
  let para = document.querySelector("p");
  var dob = new Date(daysValue, monthValue, yearValue);
  var today = new Date();
  var timeDiff = today.getTime() - dob.getTime();
  var oneDay = 24 * 60 * 60 * 1000;
  var oneMonth = 30.44 * oneDay;
  var oneYear = 365.25 * oneDay;

  // Calculate the age in years, months, and days
  var years = Math.floor(timeDiff / oneYear);
  var months = Math.floor((timeDiff % oneYear) / oneMonth);
  var days = Math.floor((timeDiff % oneMonth) / oneDay);
  para.innerHTML =
    "Age of the date entered: " +
    years +
    " years, " +
    months +
    " months, and " +
    days +
    " days";
}
