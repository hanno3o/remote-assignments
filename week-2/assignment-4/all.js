const coverText = document.querySelector('.cover')
const hiddenWrap = document.querySelector('.wrap-hidden')
const cta = document.querySelector('.cta')

coverText.addEventListener('click', e => {
    e.target.textContent = 'Have a Good Time!'
})

cta.addEventListener('click', e => {
    hiddenWrap.style.display = "flex"
})

