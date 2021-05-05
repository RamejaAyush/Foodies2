const nav = document.querySelector('#nav')
const burger = document.querySelector('.burger')
const navLinks = document.querySelector('.nav-links')

burger.addEventListener('click', () => {
  navLinks.classList.toggle('nav-active')
  burger.classList.toggle('toogle')
})

window.onscroll = () => {
  if (window.pageYOffset > 95) {
    nav.classList.add('scrolled')
  } else {
    nav.classList.remove('scrolled')
  }
}
