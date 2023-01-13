const coverText = document.querySelector('.cover')
const hiddenWrap = document.querySelector('.wrap-hidden')
const cta = document.querySelector('.cta')
const burger = document.querySelector('.burger')
const navMenu = document.querySelector('nav ul')

coverText.addEventListener('click', e => {
    e.target.textContent = 'Have a Good Time!'
})

cta.addEventListener('click', e => {
    hiddenWrap.style.display = "flex"
})

burger.addEventListener('click', e => {
    burger.classList.toggle("active")
    navMenu.classList.toggle("active")
})