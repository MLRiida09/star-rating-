// Select all star labels and rating inputs
const stars = document.querySelectorAll('.star-widget label');
const inputs = document.querySelectorAll('.star-widget input');
const textElement = document.querySelector('.post .text');

// Define rating colors for each star level
const ratingColors = {
  "rate-1": "#D32F2F", // Red
  "rate-2": "#F57C00", // Orange
  "rate-3": "#FBC02D", // Yellow
  "rate-4": "#AFB42B", // Lime
  "rate-5": "#388E3C"  // Green
};

// Listen for changes on each input (when a star is selected)
inputs.forEach(input => {
  input.addEventListener('change', () => {
    const selectedId = input.id;                        // e.g. "rate-3"
    const selectedNumber = parseInt(selectedId.split('-')[1]); // e.g. 3
    const color = ratingColors[selectedId];             // Get the color for selected rating

    // Reset all stars to default color and remove animation
    stars.forEach(label => {
      label.style.color = '#444';                       // Default star color
      label.classList.remove('animate');                // Remove animation class
    });

    // Apply selected color and animation to the chosen stars
    for (let i = 1; i <= selectedNumber; i++) {
      const label = document.querySelector(`label[for="rate-${i}"]`);
      label.style.color = color;
      label.classList.add('animate');
    }

    // Change the color of the text element to match the selected rating
    textElement.style.color = color;
  });
});
