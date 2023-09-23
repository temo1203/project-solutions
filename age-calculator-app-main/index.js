window.addEventListener("load", function () {
  var yearInput = document.getElementById("year");
  var monthInput = document.getElementById("month");
  var daysInput = document.getElementById("days");
  yearInput.value = "";
  monthInput.value = "";
  daysInput.value = "";
});

function calculateAge() {
  var yearSpan = document.querySelector(".done h1:nth-child(1) span");
  var monthSpan = document.querySelector(".done h1:nth-child(2) span");
  var daySpan = document.querySelector(".done h1:nth-child(3) span");

  let yearValue = parseInt(document.getElementById("year").value);
  let monthValue = parseInt(document.getElementById("month").value) - 1;
  let daysValue = parseInt(document.getElementById("days").value);
  var dob = new Date(yearValue, monthValue, daysValue);
  var today = new Date();

  if (isNaN(yearValue) || isNaN(monthValue) || isNaN(daysValue)) {
    console.log(
      "Invalid input. Please enter valid numbers for year, month, and days."
    );
    return;
  }

  var timeDiff = today.getTime() - dob.getTime();
  var oneDay = 24 * 60 * 60 * 1000;
  var oneMonth = 30.44 * oneDay;
  var oneYear = 365.25 * oneDay;

  var years = Math.floor(timeDiff / oneYear);
  var months = Math.floor((timeDiff % oneYear) / oneMonth);
  var days = Math.floor((timeDiff % oneMonth) / oneDay);

  yearSpan.innerHTML = years;
  monthSpan.innerHTML = months;
  daySpan.innerHTML = days;
}
