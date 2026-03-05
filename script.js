const verses = [
  "John 3:16 - For God so loved the world, that he gave his only begotten Son, that whosoever believeth in him should not perish, but have everlasting life.",
  "Psalm 23:1 - The LORD is my shepherd; I shall not want.",
  "Romans 8:28 - And we know that all things work together for good to them that love God, to them who are the called according to his purpose.",
  "Philippians 4:13 - I can do all things through Christ which strengtheneth me.",
  "Proverbs 3:5-6 - Trust in the LORD with all thine heart; and lean not unto thine own understanding. In all thy ways acknowledge him, and he shall direct thy paths.",
  "Genesis 1:1 - In the beginning God created the heaven and the earth.",
  "John 1:1-3 - In the beginning was the Word, and the Word was with God, and the Word was God.  The same was in the beginning with God.  All things were made by him; and without him was not any thing made that was made.",
  "Revelation 4:11 - Thou art worthy, O Lord, to receive glory and honour and power: for thou hast created all things, and for thy pleasure they are and were created.",
  "Romans 5:9 - Much more then, being now justified by his blood, we shall be saved from wrath through him.",
  "Romans 10:9 - That if thou shalt confess with thy mouth the Lord Jesus, and shalt believe in thine heart that God hath raised him from the dead, thou shalt be saved.",
  "John 1:12 - But as many as received him, to them gave he power to become the sons of God, even to them that believe on his name.",
  "Revelation 22:21 - The grace of our Lord Jesus Christ be with you all. Amen.",
  "Revelation 1:8 - I am Alpha and Omega, the beginning and the ending, saith the Lord, which is, and which was, and which is to come, the Almighty.",
  "Matthew 6:33 - But seek ye first the kingdom of God, and his righteousness; and all these things shall be added unto you.",
  "Luke 18:1 - And he spake a parable unto them to this end, that men ought always to pray, and not to faint;",
  "Ephesians 1:7 - In whom we have redemption through his blood, the forgiveness of sins, according to the riches of his grace;",
  "Ephesians 2:8-9 - For by grace are ye saved through faith; and that not of yourselves: it is the gift of God:  Not of works, lest any man should boast.",
  "1 Peter 1:3–5 - According as his divine power hath given unto us all things that pertain unto life and godliness, through the knowledge of him that hath called us to glory and virtue: Whereby are given unto us exceeding great and precious promises: that by these ye might be partakers of the divine nature… Who are kept by the power of God through faith unto salvation ready to be revealed in the last time.",
  "Matthew 24:46 - Blessed is that servant, whom his lord when he cometh shall find so doing.",
  "1 Thessalonians 5:2 - For yourselves know perfectly that the day of the Lord so cometh as a thief in the night.",
  "1 Thessalonians 5:16-22 - Rejoice evermore.  Pray without ceasing.  In every thing give thanks: for this is the will of God in Christ Jesus concerning you.  Quench not the Spirit.  Despise not prophesyings.  Prove all things; hold fast that which is good.  Abstain from all appearance of evil.",
  "1 Thessalonians 5:24 - Faithful is he that calleth you, who also will do it.",
  "2 Thessalonians 2:14 - Whereunto he called you by our gospel, to the obtaining of the glory of our Lord Jesus Christ."
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

// Change verse every 30 seconds
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