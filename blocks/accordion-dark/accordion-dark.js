export default function decorate(block) {
  [...block.children].forEach((row) => {
    // Label is the first column
    const label = row.children[0];
    const summary = document.createElement('summary');
    summary.className = 'accordion-dark-item-label';
    summary.append(...label.childNodes);

    // Content is the second column
    const body = row.children[1];
    body.className = 'accordion-dark-item-body';

    // Create details element
    const details = document.createElement('details');
    details.className = 'accordion-dark-item';
    details.append(summary, body);

    row.replaceWith(details);
  });
}
