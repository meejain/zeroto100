export default function decorate(block) {
  const rows = [...block.children];

  if (rows.length > 0) {
    // First row is the quote text
    const quoteRow = rows[0];
    quoteRow.classList.add('quote-simple-text');
  }

  if (rows.length > 1) {
    // Second row is attribution (optional)
    const attributionRow = rows[1];
    attributionRow.classList.add('quote-simple-attribution');
  }
}
