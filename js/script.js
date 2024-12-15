const greetings = [
  "Welcome to The Golden Fork!",
  "Delicious Food Is Waiting For You",
  "Enjoy our Chef's Specials!",
  "Experience the Best Culinary Delights!"
];

let currentGreetingIndex = 0;
const greetingElement = document.getElementById('greeting');

function changeGreeting() {
  greetingElement.textContent = greetings[currentGreetingIndex];
  currentGreetingIndex = (currentGreetingIndex + 1) % greetings.length;
}

setInterval(changeGreeting, 4000);
changeGreeting();

document.addEventListener("DOMContentLoaded", function() {
  const priceElements = document.querySelectorAll('.card .card-body p strong');
  priceElements.forEach(function(price) {
      price.addEventListener('mouseenter', function() {
          price.style.fontSize = '1.5rem';
      });
      price.addEventListener('mouseleave', function() {
          price.style.fontSize = '1rem';
      });
  });

  const buyButtons = document.querySelectorAll('.card-body .btn-buy');
  const newImageSrc = 'https://media.istockphoto.com/vectors/checkmark-vector-icon-put-a-green-symbol-on-the-white-background-vector-id1151872207?k=20&m=1151872207&s=170667a&w=0&h=NzKOi1fjRT-jYlohJ7a15LRWHC3wK0LjTu1fi9yOQYQ=';

  buyButtons.forEach(function(button) {
      button.addEventListener('click', function() {
          const mealImage = button.closest('.card').querySelector('.card-img-top');
          if (mealImage) {
              mealImage.src = newImageSrc;
          }
      });
  });
});




function changeTextStyle(inputElement) {
  inputElement.value = inputElement.value.toUpperCase();
  inputElement.style.color = "#dc2f02";
}

function submitForm(event) {
  event.preventDefault();
  document.getElementById("successMessage").style.display = "block";
  document.getElementById("contactForm").reset();
  return false;
}
