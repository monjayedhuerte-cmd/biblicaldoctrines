const verses = [
  "John 3:16 - For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
  "Psalm 23:1 - The LORD is my shepherd; I shall not want.",
  "Romans 8:28 - And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
  "Philippians 4:13 - I can do all things through Christ which strengtheneth me.",
  "Proverbs 3:5-6 - Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths."
];

const verseContainer = document.getElementById("dailyVerse");

function getRandomVerse() {
  return verses[Math.floor(Math.random() * verses.length)];
}

function updateVerse() {
  // Fade out current verse
  verseContainer.style.opacity = 0;
  setTimeout(() => {
    verseContainer.innerText = getRandomVerse();
    // Fade in new verse
    verseContainer.style.opacity = 1;
  }, 500); // fade-out duration
}

// Initial verse
updateVerse();

// Change verse every 15 seconds
setInterval(updateVerse, 15000);

const faders = document.querySelectorAll('.fade-in');

const appearOptions = {
  threshold: 0.2,
  rootMargin: "0px 0px -50px 0px"
};

const appearOnScroll = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (!entry.isIntersecting) return;
    entry.target.classList.add('visible');
    observer.unobserve(entry.target);
  });
}, appearOptions);

faders.forEach(fader => {
  appearOnScroll.observe(fader);
});

const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', () => {
  menu.classList.toggle('show');
});