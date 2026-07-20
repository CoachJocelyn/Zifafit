(() => {
  const hero = document.querySelector('.premium-hero');
  const bg = document.querySelector('.premium-hero-bg');

  if (!hero || !bg || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  hero.addEventListener('pointermove', (event) => {
    const rect = hero.getBoundingClientRect();
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    bg.style.transform = `scale(1.08) translate3d(${x * -12}px, ${y * -8}px, 0)`;
  });

  hero.addEventListener('pointerleave', () => {
    bg.style.transform = '';
  });
})();