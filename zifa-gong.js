const modal=document.getElementById('zgModal');
const image=document.getElementById('zgModalImage');
const title=document.getElementById('zgModalTitle');

document.querySelectorAll('.zg-card-button').forEach((button)=>{
  button.addEventListener('click',()=>{
    image.src=button.dataset.card;
    image.alt=button.dataset.title;
    title.textContent=button.dataset.title;
    modal.classList.add('is-open');
    modal.setAttribute('aria-hidden','false');
    document.body.style.overflow='hidden';
  });
});

function closeModal(){
  modal.classList.remove('is-open');
  modal.setAttribute('aria-hidden','true');
  document.body.style.overflow='';
}

modal.querySelectorAll('[data-close]').forEach((item)=>item.addEventListener('click',closeModal));
document.addEventListener('keydown',(event)=>{
  if(event.key==='Escape'&&modal.classList.contains('is-open'))closeModal();
});
