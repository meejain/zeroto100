export default function decorate(block) {
  const ul = document.createElement('ul');
  ul.className = 'carousel-logos-track';

  [...block.children].forEach((row) => {
    const li = document.createElement('li');
    li.className = 'carousel-logos-item';
    while (row.firstElementChild) li.append(row.firstElementChild);
    ul.append(li);
  });

  // Duplicate items for seamless loop
  const clone = ul.cloneNode(true);
  clone.setAttribute('aria-hidden', 'true');

  const wrapper = document.createElement('div');
  wrapper.className = 'carousel-logos-wrapper';
  wrapper.append(ul, clone);

  block.replaceChildren(wrapper);
}
