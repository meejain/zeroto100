import { createOptimizedPicture } from '../../scripts/aem.js';

export default function decorate(block) {
  /* Create two-column layout */
  const column1 = document.createElement('div');
  column1.className = 'cards-hobbies-column';
  
  const column2 = document.createElement('div');
  column2.className = 'cards-hobbies-column';

  const allCards = [];
  
  // Process all cards first
  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    while (row.firstElementChild) li.append(row.firstElementChild);
    [...li.children].forEach((div) => {
      if (div.children.length === 1 && div.querySelector('picture')) div.className = 'cards-hobbies-card-image';
      else div.className = 'cards-hobbies-card-body';
    });
    allCards.push(li);
  });

  // Optimize all images
  allCards.forEach((card) => {
    card.querySelectorAll('picture > img').forEach((img) => img.closest('picture').replaceWith(createOptimizedPicture(img.src, img.alt, false, [{ width: '750' }])));
  });

  // Split cards into two columns (odd cards in column 1, even cards in column 2)
  allCards.forEach((card, index) => {
    if (index % 2 === 0) {
      column1.append(card);
    } else {
      column2.append(card);
    }
  });

  // Replace block content with two columns
  block.replaceChildren(column1, column2);

  // Animate cards on scroll
  const cards = block.querySelectorAll('li');
  let animationTimeouts = [];

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      const card = entry.target;
      const index = Array.from(cards).indexOf(card);

      if (entry.isIntersecting) {
        const timeout = setTimeout(() => {
          card.classList.add('animate-in');
        }, index * 150);
        animationTimeouts.push(timeout);
      } else {
        card.classList.remove('animate-in');
        animationTimeouts.forEach(clearTimeout);
        animationTimeouts = [];
      }
    });
  }, {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px',
  });

  cards.forEach((card) => observer.observe(card));
}
