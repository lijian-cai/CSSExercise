const burger = document.querySelector('.burger')
const close = document.querySelector('#close')
const burgerMenu = document.querySelector('.burger-menu')

burger.addEventListener('click', () => {

  burger.style.display = 'none';
  close.style.display = 'block';
  burgerMenu.style.display = 'block';
})

close.addEventListener('click', () => {
  close.style.display = 'none';
  if(window.outerWidth < 800){
    burger.style.display = 'block';
  }
  burgerMenu.style.display = 'none';
})

window.onresize = () => {
  if(burger.style.display == 'block' && window.outerWidth >= 800) {
    burger.style.display = 'none';
  }else if(burger.style.display == 'none' && window.outerWidth < 800) {
    burger.style.display = 'block';
  }
}