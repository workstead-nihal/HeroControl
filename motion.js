// Animate visible sections once without hiding content before initialization.
if ('IntersectionObserver' in window && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
 const revealObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
   if (!entry.isIntersecting) return;
   entry.target.classList.add('reveal-in');
   revealObserver.unobserve(entry.target);
  });
 }, { threshold: 0.08 });
 document.querySelectorAll('.section-heading, .product-grid, .about-grid, .application-grid, .trust-grid, .resource-feature, .resource-grid, .steps, .contact-bottom, .contact-layout, .support').forEach(element => revealObserver.observe(element));
}
