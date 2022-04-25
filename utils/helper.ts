import get from 'lodash/get';

function scrollTop() {
  if (typeof document === 'undefined') return;
  const header = document.getElementById('header');
  const height = get(header, 'scrollHeight') || 0;
  const y = Math.max(0, height - 64);
  window.scrollTo(0, y);
}