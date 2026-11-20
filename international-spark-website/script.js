const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('#nav-links');
const mobile = matchMedia('(max-width: 640px)');
function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); links.hidden = mobile.matches; }
closeMenu();
mobile.addEventListener('change', closeMenu);
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); links.hidden = !open; });
links.addEventListener('click', event => { if (event.target.closest('a')) closeMenu(); });
document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
if (!matchMedia('(prefers-reduced-motion: reduce)').matches && 'IntersectionObserver' in window) {
  const observer = new IntersectionObserver(entries => entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.remove('is-pending'); observer.unobserve(entry.target); } }), { threshold: 0.08 });
  document.querySelectorAll('#usluge > div > div > div, #o-nama > *, #kontakt > div').forEach(element => { element.classList.add('reveal', 'is-pending'); observer.observe(element); });
}
const form = document.querySelector('#contact-form');
const status = document.querySelector('#form-status');
const submit = form.querySelector('button[type="submit"]');
const endpoint = form.dataset.endpoint;
if (/^https:\/\/formspree\.io\/f\/[a-zA-Z0-9]+$/.test(endpoint)) {
  submit.disabled = false;
  status.textContent = 'Vaše podatke koristimo za odgovor na upit.';
}
form.addEventListener('submit', async event => {
  event.preventDefault();
  if (!endpoint || submit.disabled || !form.reportValidity()) return;
  submit.disabled = true;
  status.textContent = 'Slanje upita…';
  try {
    const response = await fetch(endpoint, { method: 'POST', body: new FormData(form), headers: { Accept: 'application/json' } });
    if (!response.ok) throw new Error('Delivery failed');
    form.reset();
    status.textContent = 'Hvala! Vaš upit je poslan.';
  } catch { status.textContent = 'Upit nije poslan. Pokušajte ponovno.'; }
  finally { submit.disabled = false; }
});
