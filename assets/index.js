let hamburgerContainer = document.querySelector('.hamburger-container');
let openList = document.querySelector('#open-list')
let menuOpen = false;
let mainNavbar = document.querySelector('#main-navbar')
let outside = document.getElementsByClassName('outside')[0]

hamburgerContainer.addEventListener('click', () => {
    if(!menuOpen){
        openList.classList.add('opened')
        menuOpen = true;
        mainNavbar.style.right = '-5%'
        outside.style.opacity = '1'
        outside.style.zIndex = '0'
    }
    else{
        openList.classList.remove('opened')
        menuOpen = false;
        mainNavbar.style.right= ''
        outside.style.opacity = ''
    }
})

    outside.addEventListener('click', () => {
            mainNavbar.style.right = '';
            outside.style.zIndex = ''
            outside.style.opacity = '0'
            openList.classList.remove('opened')  
            menuOpen = false  
    })
