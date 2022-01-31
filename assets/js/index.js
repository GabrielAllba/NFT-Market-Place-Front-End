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

let aboutOpenner = document.getElementById('about-openner-acc')
let detailOpenner= document.getElementById('detail-openner-acc')
let offersOpenner= document.getElementById('offers-openner-acc')
let attributesOpenner =document.getElementById('attribute-openners')
let aboutProductOpenner = document.getElementById('about-product-openners')
let listingsProductOpenner = document.getElementById('listings-openner-acc')

let accordionDetailAbout = document.getElementById('acc-detail-about')
let accordionDetailDetail = document.getElementById('acc-detail-detail')
let accordionDetailOffers= document.getElementById('acc-detail-offers')
let accordionDetailAttributes = document.getElementById('acc-detail-attributes')
let accordionDetailProduct= document.getElementById('acc-detail-product')
let accordionDetailListings = document.getElementById('acc-detail-listings')




aboutOpenner.addEventListener('click', () => {
    accordionDetailAbout.classList.toggle('show-accordion')
})
detailOpenner.addEventListener('click', () => {
    accordionDetailDetail.classList.toggle('hide-accordion')
})
offersOpenner.addEventListener('click', () => {
    accordionDetailOffers.classList.toggle('hide-accordion')
})
attributesOpenner.addEventListener('click', () =>{
    accordionDetailAttributes.classList.toggle('hide-accordion')
})
aboutProductOpenner.addEventListener('click', () => {
    accordionDetailProduct.classList.toggle('hide-accordion')
})
listingsProductOpenner.addEventListener('click', ()=>{
    accordionDetailListings.classList.toggle('hide-accordion')
})




