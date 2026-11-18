'use strict';

const menuButton = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() {
  navigation.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
}
menuButton.addEventListener('click', () => {
  const isOpen = menuButton.getAttribute('aria-expanded') === 'true';
  navigation.classList.toggle('is-open', !isOpen);
  menuButton.setAttribute('aria-expanded', String(!isOpen));
});
navigation.addEventListener('click', event => {
  if (event.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', event => {
  if (event.key === 'Escape' && navigation.classList.contains('is-open')) {
    closeMenu();
    menuButton.focus();
  }
});
window.matchMedia('(min-width: 621px)').addEventListener('change', closeMenu);
document.querySelector('#year').textContent = String(new Date().getFullYear());

// One address for every contact action. Update this and the HTML email links
// together if the team moves to a dedicated domain.
const contactEmail = 'valerio.barabino@edu.unige.it';
document.querySelector('#contact-form').addEventListener('submit', event => {
  event.preventDefault();
  const interest = document.querySelector('#interest').value;
  const message = document.querySelector('#message').value.trim();
  const body = `Hello HyBrain team,\n\nI'm interested in ${interest.toLowerCase()}.\n\n${message ? message + '\n\n' : ''}Best regards,\n`;
  window.location.href = `mailto:${contactEmail}?subject=${encodeURIComponent('HyBrain — ' + interest)}&body=${encodeURIComponent(body)}`;
});

document.querySelector('.copy-email').addEventListener('click', async () => {
  const status = document.querySelector('#copy-status');
  try {
    await navigator.clipboard.writeText(contactEmail);
    status.textContent = 'Email address copied.';
  } catch {
    // Clipboard APIs may be unavailable when opening index.html directly.
    const range = document.createRange();
    range.selectNodeContents(document.querySelector('.direct-email'));
    const selection = window.getSelection();
    selection.removeAllRanges();
    selection.addRange(range);
    status.textContent = 'Email address selected. Press Ctrl+C or ⌘C to copy.';
  }
});
