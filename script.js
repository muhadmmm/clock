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

function updateDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, '0');
  const day = String(now.getDate()).padStart(2, '0');
  const dateString = `${year}/${month}/${day}`;
  document.getElementById('date-container').textContent = dateString;
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

setInterval(function() {
  const now = new Date();
  updateDate(now);
  updatePieChart(now);
}, 1000);

updateDate(new Date());
updatePieChart(new Date());

setInterval(updateClock, 1000);
updateClock();
const quotes = [
  "progressing.........",
];

let quoteIndex = 0;
let charIndex = 0;

function typeQuote() {
  const quote = quotes[quoteIndex];
  charIndex++;

  document.getElementById('quote-text').textContent = quote.substring(0, charIndex);

  setTimeout(typeQuote, 100);

  if (charIndex === quote.length) {
    charIndex = 0;
    quoteIndex++;
    if (quoteIndex === quotes.length) {
      quoteIndex = 0;
    }
  }
}

typeQuote();
