const quotes = [
  "Every night I fall asleep dreaming of you, and every morning I wake up thinking of you.",
  "As the stars twinkle in the night sky, my heart twinkles with thoughts of you.",
  "The moon is beautiful tonight, but not as beautiful as you.",
  "Distance may separate our bodies, but never our hearts. Good night, my love.",
  "Like the stars that light up the dark sky, you light up my world.",
  "Sweet dreams, Mansi. Until tomorrow, keep my love in your heart.",
  "The day is over, but my love for you never ends. Good night, my angel.",
  "As you drift off to sleep, know that you're the last thought on my mind.",
  "May your dreams be as sweet as you are. Good night, my beloved.",
  "The night is more beautiful because you exist in my world.",
];

function displayRandomQuote() {
  const quoteElement = document.querySelector(".quote");
  const randomIndex = Math.floor(Math.random() * quotes.length);
  quoteElement.textContent = quotes[randomIndex];
}

// Change quote every 5 seconds with fade effect
function cycleQuotes() {
  const quoteElement = document.querySelector(".quote");
  quoteElement.style.opacity = "0";
  quoteElement.style.transform = "translateY(20px)";

  setTimeout(() => {
    displayRandomQuote();
    quoteElement.style.opacity = "1";
    quoteElement.style.transform = "translateY(0)";
  }, 500);
}

// Initial quote
displayRandomQuote();

// Cycle quotes every 5 seconds
setInterval(cycleQuotes, 5000);

// Add floating hearts dynamically
function createHeart() {
  const heart = document.createElement("span");
  heart.innerHTML = "❤️";
  heart.style.left = Math.random() * 100 + "%";
  heart.style.animationDuration = Math.random() * 3 + 2 + "s";
  heart.style.opacity = "0";
  document.querySelector(".floating-hearts").appendChild(heart);

  setTimeout(() => {
    heart.remove();
  }, 5000);
}

// Create new hearts every 500ms
setInterval(createHeart, 500);
