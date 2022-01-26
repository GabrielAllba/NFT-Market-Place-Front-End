let hamburgerContainer = document.querySelector('.hamburger-container');
let openList = document.querySelector('#open-list')
let menuOpen = false;
let mainNavbar = document.querySelector('#main-navbar')
hamburgerContainer.addEventListener('click', () => {
    if(!menuOpen){
        openList.classList.add('opened')
        menuOpen = true;
        mainNavbar.style.right = '-5%'
    }
    else{
        openList.classList.remove('opened')
        menuOpen = false;
        mainNavbar.style.right= ''
    }
})
