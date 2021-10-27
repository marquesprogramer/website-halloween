/*------------ SHOW MENU-------------*/
const navMenu = document.getElementById('nav'),
navToggle = document.getElementById('nav-toggle'),
navClose = document.getElementById('nav-close')

/**abrir menu */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        navMenu.classList.add('show-menu')
        navClose.classList.add('visible')
    })
}

/**fechar menu */
if(navClose){
    navClose.addEventListener('click', () =>{
        navMenu.classList.remove('show-menu')
        navClose.classList.remove('visible')
    })
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLink = document.querySelectorAll('.nav__link')
function linkAction() {
    const navMenu = document.getElementById('nav'),
    navClose = document.getElementById('nav-close')
    /*Quando um link for clicado a class show-menu será removido*/
    navMenu.classList.remove('show-menu')
    navClose.classList.remove('visible')
}
navLink.forEach(n => n.addEventListener('click', linkAction))

/*==================== DEIXA O LINK CLICADO COM A CLASS ACTIVE-LINK ====================*/
const linkColor = document.querySelectorAll('.nav__link')

function colorLink(){
    if(linkColor){
        linkColor.forEach(L => L.classList.remove('active-link'))
        this.classList.add('active-link')
    }
}

linkColor.forEach(L=> L.addEventListener('click', colorLink))

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const scrollHeader = document.getElementById('header');
    // Quando o scroll tiver um altura maior que 200 será adiconado a class scroll-header na tag Header
    if(this.scrollY >= 50) scrollHeader.classList.add('scroll-header'); 
    else scrollHeader.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)

/*=============== SHOW SCROLL UP ===============*/ 
function scrollTop(){
    const scrollTop = document.getElementById('scroll-up');
    // Quando o scroll tiver um altura maior que 560 será adiconado a class scroll-top
    if(this.scrollY >= 460) scrollTop.classList.add('scroll-top'); 
    else scrollTop.classList.remove('scroll-top')
}
window.addEventListener('scroll', scrollTop)

/*=============== SCROLL REVEAL ANIMATION ===============*/
const sr = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 2500,
    delay: 400,
})

sr.reveal(`.decoration__container, .delicacy__container, .social__container`)
sr.reveal(`.social__img, .acessory__card-left, .newlleter__title`, {origin: 'left'})
sr.reveal(`.social__info, .acessory__card-right, .box__input`, {origin: 'right'})
sr.reveal(`.footer__container`, {origin: 'bottom'})