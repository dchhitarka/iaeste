let arrow = document.getElementById('arrow');
window.addEventListener('scroll', ()=>{
  let h1 = window.pageYOffset;
  const h2 = document.querySelector('.us').scrollHeight;
  if (h1 >= h2){
    arrow.classList.remove('none');
  }
  else{
    arrow.classList.add('none');
  }
});
