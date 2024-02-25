function updateClock() {
  const now = new Date();
  let hour = now.getHours();
  const minute = now.getMinutes();
  const second = now.getSeconds();

  // Convert 24-hour format to 12-hour format
  hour = hour % 12 || 12;

  updateClockHand('hour-clock', hour, 12);
  updateClockHand('minute-clock', minute, 60);
  updateClockHand('second-clock', second, 60);

  updatePieChart(now);
}

function updateClockHand(clockId, value, maxValue) {
  const clock = document.getElementById(clockId);
  const hand = clock.querySelector('.clock-hand');
  const time = clock.querySelector('.time');
  const degrees = (value / maxValue) * 360;
  hand.style.transform = `translate(-50%, -100%) rotate(${degrees}deg)`;
  time.textContent = value < 10 ? `0${value}` : value;
  if (value < 10) {
    time.textContent = `0${value}`;
  } else {
    time.textContent = value;
  }
}

function updatePieChart(now) {
  const daysInYear = 365;
  const passedDays = Math.floor((now - new Date(now.getFullYear(), 0, 0)) / 86400000);
  const percentage = (passedDays / daysInYear) * 100;

  const progress = document.querySelector('.progress');
  progress.style.width = `${percentage}%`;

  const percentageElement = document.querySelector('.percentage');
  percentageElement.textContent = `${percentage.toFixed(2)}%`;
}

setInterval(updateClock, 1000);
updateClock();
const quotes = [
  "The only way to do great work is to love what you do.",
  "Innovation distinguishes between a leader and a follower.",
  "Your time is limited, don't waste it living someone else's life.",
  "Stay hungry, stay foolish.",
  "The people who are crazy enough to think they can change the world are the ones who do."
];

let quoteIndex = 0;
let charIndex = 0;

function typeQuote() {
  const quote = quotes[quoteIndex];
  charIndex++;

  document.getElementById('quote-text').textContent = quote.substring(0, charIndex);

  setTimeout(typeQuote, 200);

  if (charIndex === quote.length) {
    charIndex = 0;
    quoteIndex++;
    if (quoteIndex === quotes.length) {
      quoteIndex = 0;
    }
  }
}

typeQuote();
