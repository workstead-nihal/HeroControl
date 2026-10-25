const toggle = document.querySelector('.menu-toggle');
const navigation = document.querySelector('#navigation');
function closeMenu() { toggle.setAttribute('aria-expanded', 'false'); navigation.classList.remove('open'); }
toggle.addEventListener('click', () => { const open = toggle.getAttribute('aria-expanded') !== 'true'; toggle.setAttribute('aria-expanded', String(open)); navigation.classList.toggle('open', open); });
navigation.querySelectorAll('a').forEach(link => link.addEventListener('click', closeMenu));
document.addEventListener('keydown', event => { if (event.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') { closeMenu(); toggle.focus(); } });
document.querySelectorAll('[data-filter]').forEach(button => button.addEventListener('click', () => {
 document.querySelectorAll('[data-filter]').forEach(item => { const active = item === button; item.classList.toggle('active', active); item.setAttribute('aria-pressed', String(active)); });
 let count = 0;
 document.querySelectorAll('[data-category]').forEach(product => { product.hidden = button.dataset.filter !== 'all' && product.dataset.category !== button.dataset.filter; if (!product.hidden) count++; });
 document.querySelector('.product-status').textContent = `Showing ${count} ${count === 1 ? 'product' : 'products'}.`;
}));
document.querySelector('#year').textContent = new Date().getFullYear();

const enquiryForm = document.querySelector('#enquiry-form');
if (enquiryForm) {
 enquiryForm.addEventListener('submit', event => {
  event.preventDefault();
  if (!enquiryForm.reportValidity()) return;
  const data = new FormData(enquiryForm);
  const body = `Name: ${data.get('name')}\nEmail: ${data.get('email')}\nPhone: ${data.get('phone') || 'Not provided'}\n\n${data.get('message')}`;
  const emailUrl = `mailto:info@herocontrol.in?subject=${encodeURIComponent(data.get('topic'))}&body=${encodeURIComponent(body)}`;
  window.location.href = emailUrl;
  document.querySelector('#form-status').textContent = 'Your email app has been requested. If it did not open, email info@herocontrol.in or call our team. Your enquiry has not been sent by this website.';
 });
}
