/**
 * Switches to the selected tab
 * @param {Element} selectedButton The clicked button
 * @param {Element} selectedPanel The panel to show
 * @param {Element} buttonsContainer Container with all buttons
 * @param {Element} panelsContainer Container with all panels
 */
function switchTab(selectedButton, selectedPanel, buttonsContainer, panelsContainer) {
  // Deactivate all tabs
  const allButtons = buttonsContainer.querySelectorAll('.tabs-button');
  const allPanels = panelsContainer.querySelectorAll('.tabs-panel');

  allButtons.forEach((btn) => {
    btn.classList.remove('active');
    btn.setAttribute('aria-selected', 'false');
    btn.setAttribute('tabindex', '-1');
  });

  allPanels.forEach((panel) => {
    panel.classList.remove('active');
    panel.hidden = true;
  });

  // Activate selected tab
  selectedButton.classList.add('active');
  selectedButton.setAttribute('aria-selected', 'true');
  selectedButton.setAttribute('tabindex', '0');
  selectedPanel.classList.add('active');
  selectedPanel.hidden = false;
  selectedButton.focus();
}

/**
 * Handles keyboard navigation for tabs
 * @param {KeyboardEvent} e The keyboard event
 * @param {Element} buttonsContainer Container with all buttons
 * @param {Element} panelsContainer Container with all panels
 */
function handleKeyboardNavigation(e, buttonsContainer, panelsContainer) {
  const buttons = [...buttonsContainer.querySelectorAll('.tabs-button')];
  const panels = [...panelsContainer.querySelectorAll('.tabs-panel')];
  const currentIndex = buttons.findIndex((btn) => btn === document.activeElement);

  let newIndex = currentIndex;

  switch (e.key) {
    case 'ArrowLeft':
      newIndex = currentIndex > 0 ? currentIndex - 1 : buttons.length - 1;
      e.preventDefault();
      break;
    case 'ArrowRight':
      newIndex = currentIndex < buttons.length - 1 ? currentIndex + 1 : 0;
      e.preventDefault();
      break;
    case 'Home':
      newIndex = 0;
      e.preventDefault();
      break;
    case 'End':
      newIndex = buttons.length - 1;
      e.preventDefault();
      break;
    default:
      return;
  }

  if (newIndex !== currentIndex) {
    switchTab(buttons[newIndex], panels[newIndex], buttonsContainer, panelsContainer);
  }
}

/**
 * Decorates the tabs block
 * @param {Element} block The tabs block element
 */
export default async function decorate(block) {
  // Extract tab items from the block structure
  const tabItems = [...block.children];

  if (tabItems.length === 0) {
    return;
  }

  // Create tabs container structure
  const tabsContainer = document.createElement('div');
  tabsContainer.className = 'tabs-container';

  // Create tab buttons container
  const tabButtons = document.createElement('div');
  tabButtons.className = 'tabs-buttons';
  tabButtons.setAttribute('role', 'tablist');

  // Create tab panels container
  const tabPanels = document.createElement('div');
  tabPanels.className = 'tabs-panels';

  // Process each tab item
  tabItems.forEach((item, index) => {
    const cells = [...item.children];

    if (cells.length < 2) {
      return;
    }

    const tabLabel = cells[0].textContent.trim();
    const tabContent = cells[1];

    // Create tab button
    const button = document.createElement('button');
    button.className = 'tabs-button';
    button.textContent = tabLabel;
    button.setAttribute('role', 'tab');
    button.setAttribute('aria-selected', index === 0 ? 'true' : 'false');
    button.setAttribute('aria-controls', `tab-panel-${index}`);
    button.setAttribute('id', `tab-${index}`);
    button.setAttribute('tabindex', index === 0 ? '0' : '-1');

    // Create tab panel
    const panel = document.createElement('div');
    panel.className = 'tabs-panel';
    panel.setAttribute('role', 'tabpanel');
    panel.setAttribute('aria-labelledby', `tab-${index}`);
    panel.setAttribute('id', `tab-panel-${index}`);
    panel.setAttribute('tabindex', '0');

    // Move content to panel
    panel.innerHTML = tabContent.innerHTML;

    // Set initial state
    if (index === 0) {
      button.classList.add('active');
      panel.classList.add('active');
    } else {
      panel.hidden = true;
    }

    // Add click handler
    button.addEventListener('click', () => {
      switchTab(button, panel, tabButtons, tabPanels);
    });

    // Add keyboard navigation
    button.addEventListener('keydown', (e) => {
      handleKeyboardNavigation(e, tabButtons, tabPanels);
    });

    tabButtons.appendChild(button);
    tabPanels.appendChild(panel);
  });

  // Clear original content and add new structure
  block.innerHTML = '';
  tabsContainer.appendChild(tabButtons);
  tabsContainer.appendChild(tabPanels);
  block.appendChild(tabsContainer);
}
