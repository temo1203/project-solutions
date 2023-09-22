const generateButton = document.querySelector("button");
const adviceParagraph = document.querySelector("p");
const liteParagraph = document.querySelector("h5");

// Function to fetch and display random advice
function fetchRandomAdvice() {
  let num = Math.floor(Math.random() * 100);
  const apiUrl = `https://api.adviceslip.com/advice/${num}`;

  fetch(apiUrl)
    .then((response) => {
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      return response.json();
    })
    .then((data) => {
      adviceParagraph.innerHTML = data.slip.advice;
      liteParagraph.innerHTML = `ADVICE #${data.slip.id}`;
    })
    .catch((error) => {
      console.error("There was a problem with the fetch operation:", error);
    });
}

// Add a click event listener to the button
generateButton.addEventListener("click", fetchRandomAdvice);
fetchRandomAdvice();
