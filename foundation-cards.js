(() => {
  const modal = document.getElementById('cardModal');
  const image = document.getElementById('cardModalImage');
  const title = document.getElementById('cardModalTitle');
  const openLink = document.getElementById('openCardImage');

  document.querySelectorAll('.official-card').forEach((button) => {
    button.addEventListener('click', () => {
      const src = button.dataset.card;
      const cardTitle = button.dataset.title || 'Carte officielle';
      image.src = src;
      image.alt = `Carte officielle ZifaFit ${cardTitle}`;
      title.textContent = cardTitle;
      openLink.href = src;
      modal.classList.add('is-open');
      modal.setAttribute('aria-hidden', 'false');
      document.body.style.overflow = 'hidden';
    });
  });

  function closeModal() {
    modal.classList.remove('is-open');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
  }

  modal.querySelectorAll('[data-close-modal]').forEach((el) => el.addEventListener('click', closeModal));
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
  });
})();
