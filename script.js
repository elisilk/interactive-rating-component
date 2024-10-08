// ----------------------------------------
// Global variables
// ----------------------------------------

// ----------------------------------------
// HTML elements to save
// ----------------------------------------

// elements to save
// rating screen (form) - id="rating-screen"
// submit button - id="submit-button"

// thank you screen - id="thank-you-screen"
// your rating value - id="your-rating-value"

// ----------------------------------------
// Functions
// ----------------------------------------

const anyRatingsChosen = () => {
  return !(document.querySelector('input[name="rating"]:checked') == null);
};

const handleSubmitClick = (e) => {
  // Maybe don't want to prevent default, so can take advantage of the built-in form error checking?
  e.preventDefault();

  // Check to see if a rating has been selected
  if (!anyRatingsChosen()) {
    document.getElementById("rating-screen").reportValidity();
    //  console.error("Error: no rating chosen");
    return;
  }

  // Get the selected rating value
  const selectedRating = document.querySelector(
    'input[name="rating"]:checked'
  )?.value;

  document.getElementById("your-rating-value").textContent = selectedRating;

  // Show the thank you screen
  document
    .getElementById("thank-you-screen")
    ?.classList.remove("screen--hidden");

  // Hide ratings screen
  document.getElementById("rating-screen")?.remove();
};

// ----------------------------------------
// Main program
// ----------------------------------------

document
  .getElementById("submit-button")
  .addEventListener("click", handleSubmitClick);
