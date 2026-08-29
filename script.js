
const menuToggle=document.querySelector('.menu-toggle');
const menu=document.querySelector('.menu');
if(menuToggle) menuToggle.addEventListener('click',()=>menu.classList.toggle('open'));

document.querySelectorAll('[data-scroll]').forEach(a=>{
 a.addEventListener('click',e=>{
  const id=a.getAttribute('href');
  if(id && id.startsWith('#')){
   e.preventDefault(); document.querySelector(id)?.scrollIntoView({behavior:'smooth'});
   menu?.classList.remove('open');
  }
 });
});

document.querySelectorAll('form[data-demo]').forEach(form=>{
 form.addEventListener('submit',e=>{
  e.preventDefault();
  const toast=document.querySelector('.toast');
  if(toast){toast.textContent='Thank you! Your enquiry is ready to be sent.';toast.style.display='block';setTimeout(()=>toast.style.display='none',3000);}
  form.reset();
 });
});
