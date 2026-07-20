const modal = document.getElementById('zgModal');
const modalImage = document.getElementById('zgModalImage');
const modalTitle = document.getElementById('zgModalTitle');

document.querySelectorAll('.zg-card-button').forEach((button) => {
  button.addEventListener('click', () => {
    modalImage.src = button.dataset.card;
    modalImage.alt = button.dataset.title;
    modalTitle.textContent = button.dataset.title;
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

modal.querySelectorAll('[data-close]').forEach((item) => {
  item.addEventListener('click', closeModal);
});

document.addEventListener('keydown', (event) => {
  if (event.key === 'Escape' && modal.classList.contains('is-open')) closeModal();
});
