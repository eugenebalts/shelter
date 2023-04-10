const headerMenu = document.querySelector('.header_navigation');
const burgerButton = document.querySelector('.header_burger');
const burgerMenuList = document.querySelector('header_navigation_list');
const burgerMenuButtons = document.querySelectorAll('.header_navigation li')
const body = document.querySelector('body')


// CLICK ON A BUTTON
burgerButton.addEventListener('click', () => {
    headerMenu.classList.toggle('open')
    body.classList.toggle('menu') // OVERFLOW 
})


//CLICK ON THE LINKS

burgerMenuButtons.forEach(link => {
    link.addEventListener('click', (e) => {
        console.log(e.target)
        if (e.target.closest('.open')) {
            headerMenu.classList.remove('open')
            body.classList.remove('menu')
        }
    })
})

// CLICK OVER NAV

window.addEventListener('click', (e) => {
    if(headerMenu.classList.contains('open')) {
        if(!e.target.closest('.open')) {
            headerMenu.classList.remove('open')
            body.classList.remove('menu')
        }
    } 
})