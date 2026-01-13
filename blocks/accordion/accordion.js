export default function decorate(block) {
  const items = [];

  [...block.children].forEach((row) => {
    // Label is the first column
    const label = row.children[0];
    const summary = document.createElement('summary');
    summary.className = 'accordion-item-label';

    // Wrap label content in a span for hover animation
    const labelText = document.createElement('span');
    labelText.className = 'accordion-item-label-text';
    labelText.append(...label.childNodes);
    summary.append(labelText);

    // Content is the second column
    const body = row.children[1];
    body.className = 'accordion-item-body';

    // Create details element
    const details = document.createElement('details');
    details.className = 'accordion-item';
    details.append(summary, body);

    row.replaceWith(details);
    items.push(details);
  });

  // Add scroll animation with Intersection Observer
  const observerOptions = {
    threshold: 0.15,
    rootMargin: '0px 0px -100px 0px',
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        // Trigger animation for all items with staggered delay
        items.forEach((item, index) => {
          setTimeout(() => {
            item.classList.add('animate-in');
          }, index * 120); // 120ms delay between each item for more dramatic effect
        });
      } else {
        // Remove animation class when scrolling away
        items.forEach((item) => {
          item.classList.remove('animate-in');
        });
      }
    });
  }, observerOptions);

  // Observe the block container
  observer.observe(block);
}
