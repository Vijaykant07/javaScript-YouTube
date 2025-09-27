// Select all buttons
const buttons = document.querySelectorAll('.button');
// Select body
const body = document.querySelector('body');

// Add event listeners
buttons.forEach(function (button) {
  button.addEventListener('click', function (e) {
    const color = e.target.id;  // get button id
    console.log("Color selected:", color); // debug log
    body.style.backgroundColor = color; // apply background
  });
});
