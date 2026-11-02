// Sweet Crumbs Bakery - mobile menu toggle
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('button[aria-label="Open menu"]');
  var nav = document.querySelector('header nav');
  if (!btn || !nav) return;
  var panel = nav.cloneNode(true);
  panel.className = '';
  panel.style.cssText = 'display:none;flex-direction:column;gap:1rem;padding:1rem 1.5rem;';
  btn.closest('header').appendChild(panel);
  btn.addEventListener('click', function () {
    var open = panel.style.display === 'flex';
    panel.style.display = open ? 'none' : 'flex';
    btn.setAttribute('aria-expanded', String(!open));
  });
});
