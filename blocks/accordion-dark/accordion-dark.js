export default function decorate(block) {
  [...block.children].forEach((row) => {
    // Label is the first column
    const label = row.children[0];
    const summary = document.createElement('summary');
    summary.className = 'accordion-dark-item-label';
    
    // Wrap label content in a span for hover animation
    const labelText = document.createElement('span');
    labelText.className = 'accordion-dark-item-label-text';
    labelText.append(...label.childNodes);
    summary.append(labelText);

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
