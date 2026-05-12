const targetDate = new Date('2026-05-13T00:00:00');
const countdownEl = document.getElementById('countdown');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minutesEl = document.getElementById('minutes');
const secondsEl = document.getElementById('seconds');

let effectsStarted = false;

function updateCountdown() {
    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
        countdownEl.classList.add('hidden');
        if (!effectsStarted) {
            effectsStarted = true;
            startBirthdayEffects();
        }
        return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((diff / (1000 * 60)) % 60);
    const seconds = Math.floor((diff / 1000) % 60);

    daysEl.textContent = days;
    hoursEl.textContent = String(hours).padStart(2, '0');
    minutesEl.textContent = String(minutes).padStart(2, '0');
    secondsEl.textContent = String(seconds).padStart(2, '0');
}

updateCountdown();
const countdownInterval = setInterval(() => {
    updateCountdown();
    if (targetDate - new Date() <= 0) {
        clearInterval(countdownInterval);
    }
}, 1000);

function startBirthdayEffects() {
    for (let i = 0; i < 5; i++) {
        setTimeout(() => createBalloon(), i * 500);
    }
    for (let i = 0; i < 10; i++) {
        setTimeout(() => createConfetti(), i * 150);
    }

    setInterval(createBalloon, 3000);
    setInterval(createConfetti, 600);
    setInterval(createSparkle, 800);
}

const balloonColors = [
    '#f472b6', '#a78bfa', '#fb923c', '#38bdf8'
];

const confettiColors = [
    '#f472b6', '#a78bfa', '#fb923c', '#fbbf24'
];

function createBalloon() {
    const balloon = document.createElement('div');
    balloon.classList.add('balloon');
    balloon.style.left = (Math.random() > 0.5 ? Math.random() * 15 : 85 + Math.random() * 15) + 'vw';
    balloon.style.backgroundColor = balloonColors[Math.floor(Math.random() * balloonColors.length)];
    balloon.style.animationDuration = (6 + Math.random() * 6) + 's';
    balloon.style.animationDelay = Math.random() * 2 + 's';
    balloon.style.width = (40 + Math.random() * 25) + 'px';
    balloon.style.height = (55 + Math.random() * 25) + 'px';
    document.body.appendChild(balloon);

    setTimeout(() => balloon.remove(), 14000);
}

function createConfetti() {
    const confetti = document.createElement('div');
    confetti.classList.add('confetti');
    confetti.style.left = Math.random() * 100 + 'vw';
    confetti.style.backgroundColor = confettiColors[Math.floor(Math.random() * confettiColors.length)];
    confetti.style.animationDuration = (3 + Math.random() * 4) + 's';
    confetti.style.borderRadius = Math.random() > 0.5 ? '50%' : '2px';
    confetti.style.width = (6 + Math.random() * 8) + 'px';
    confetti.style.height = (6 + Math.random() * 8) + 'px';
    document.body.appendChild(confetti);

    setTimeout(() => confetti.remove(), 8000);
}

function createSparkle() {
    const sparkle = document.createElement('div');
    sparkle.classList.add('sparkle');
    sparkle.style.left = Math.random() * 100 + 'vw';
    sparkle.style.top = Math.random() * 100 + 'vh';
    sparkle.style.animationDelay = Math.random() * 1.5 + 's';
    document.body.appendChild(sparkle);

    setTimeout(() => sparkle.remove(), 3000);
}

// Gift unwrap
function unwrapGift() {
    const gift = document.getElementById('gift-wrap');
    const video = document.getElementById('video-reveal');
    const iframe = document.getElementById('yt-player');

    gift.style.display = 'none';
    video.classList.remove('hidden');
    iframe.src = iframe.src + '&autoplay=1';
}

