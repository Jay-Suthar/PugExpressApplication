
burg = document.querySelector('.burg')
navbar = document.querySelector('#navbar')
navleft = document.querySelector('#navleft')
navright = document.querySelector('#navright')

burg.addEventListener('click', () => {
    navright.classList.toggle('v-class');
    navleft.classList.toggle('v-class');
    navbar.classList.toggle('h-nav');
})

