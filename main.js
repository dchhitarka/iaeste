window.addEventListener('mousewheel', (e)=>{
  if (e.orioriginalEvent.wheelDelta >= 0) {
    console.log('Scroll up');
}
else {
    console.log('Scroll down');
}
});
let up = document.querySelector('.up')
let scroll = up.offsetTop;
