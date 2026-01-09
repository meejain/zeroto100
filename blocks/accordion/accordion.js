/**
 * Accordion block
 * Decorates accordion content with expandable/collapsible sections
 * @param {Element} block The accordion block element
 */
export default async function decorate(block) {
  // Get all rows (each row is a question/answer pair)
  const rows = [...block.children];

  // Transform each row into an accordion item
  rows.forEach((row, index) => {
    const cells = [...row.children];
    
    // Each row should have 2 cells: question and answer
    if (cells.length >= 2) {
      const questionCell = cells[0];
      const answerCell = cells[1];

      // Create accordion item structure
      const accordionItem = document.createElement('div');
      accordionItem.className = 'accordion-item';

      // Create button for question (for accessibility)
      const button = document.createElement('button');
      button.className = 'accordion-button';
      button.setAttribute('aria-expanded', 'false');
      button.setAttribute('aria-controls', `accordion-panel-${index}`);
      button.innerHTML = questionCell.innerHTML;

      // Create icon for expand/collapse
      const icon = document.createElement('span');
      icon.className = 'accordion-icon';
      icon.setAttribute('aria-hidden', 'true');
      button.appendChild(icon);

      // Create panel for answer
      const panel = document.createElement('div');
      panel.className = 'accordion-panel';
      panel.id = `accordion-panel-${index}`;
      panel.setAttribute('role', 'region');
      panel.setAttribute('aria-labelledby', `accordion-button-${index}`);
      panel.innerHTML = answerCell.innerHTML;

      // Add click event listener
      button.addEventListener('click', () => {
        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        
        // Toggle current item
        button.setAttribute('aria-expanded', !isExpanded);
        accordionItem.classList.toggle('active');
      });

      // Assemble accordion item
      accordionItem.appendChild(button);
      accordionItem.appendChild(panel);

      // Replace the row with the accordion item
      row.replaceWith(accordionItem);
    }
  });
}




