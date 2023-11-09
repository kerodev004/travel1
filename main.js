let ham = document.querySelector('.ham')
let menu = document.querySelector('.menu')
let clos = document.querySelector('.close')
let head = document.querySelector('.head')
let log = document.querySelector('.log-in')
let box = document.querySelector('.log-box')
let home = document.querySelector('.home')
let img1 = document.querySelector('.img1')
let img2 = document.querySelector('.img2')
let img3 = document.querySelector('.img3')
let img4 = document.querySelector('.img4')
let ball1 = document.querySelector('.ball1')
let ball2 = document.querySelector('.ball2')
let ball3 = document.querySelector('.ball3')
let ball4 = document.querySelector('.ball4')
let right = document.querySelector('.right')
let left = document.querySelector('.left')
let test = document.querySelector('.testimonail')
let up = document.querySelector('.up')
//------------------------------
ham.onclick = () => {
    menu.classList.add("active")
}
clos.onclick = () => {
    menu.classList.remove("active")
}
onscroll = () => {
    if (scrollY > 110) {
        head.style.background = 'rgb(0, 0, 0 , .8)'
    }
    else {
        head.style.background = 'transparent'
    }
    if (scrollY > 50) {
        up.classList.add("actup")
    }
    else {
        up.classList.remove("actup")
    }
}
/*--------------end header------------*/
log.onclick = () => {
    box.classList.toggle("actlog")
}
//--------------------------------------
img1.onclick = () => {
    home.style.background = 'url(img/card1.jpg)'
    home.style.backgroundPosition = 'center'
    home.style.backgroundSize = 'cover'
    home.style.backgroundRepeat = 'norepeat'
}
img2.onclick = () => {
    home.style.background = 'url(img/card2.jpg)'
    home.style.backgroundPosition = 'center'
    home.style.backgroundSize = 'cover'
    home.style.backgroundRepeat = 'norepeat'
}
img3.onclick = () => {
    home.style.background = 'url(img/card3.jpg)'
    home.style.backgroundPosition = 'center'
    home.style.backgroundSize = 'cover'
    home.style.backgroundRepeat = 'norepeat'
}
img4.onclick = () => {
    home.style.background = 'url(img/card4.jpg)'
    home.style.backgroundPosition = 'center'
    home.style.backgroundSize = 'cover'
    home.style.backgroundRepeat = 'norepeat'
}
//---------------------------------
ball1.onclick = () => {
    home.style.background = 'url(img/card1.jpg)'
    home.style.backgroundPosition = 'center'
    home.style.backgroundSize = 'cover'
    home.style.backgroundRepeat = 'norepeat'
    ball1.classList.add('ballactive')
    //remove the active class
    ball2.classList.remove('ballactive')
    ball3.classList.remove('ballactive')
    ball4.classList.remove('ballactive')
}
ball2.onclick = () => {
    home.style.background = 'url(img/card2.jpg)'
    home.style.backgroundPosition = 'center'
    home.style.backgroundSize = 'cover'
    home.style.backgroundRepeat = 'norepeat'
    ball2.classList.add('ballactive')
    //remove the active class
    ball1.classList.remove('ballactive')
    ball3.classList.remove('ballactive')
    ball4.classList.remove('ballactive')
}
ball3.onclick = () => {
    home.style.background = 'url(img/card3.jpg)'
    home.style.backgroundPosition = 'center'
    home.style.backgroundSize = 'cover'
    home.style.backgroundRepeat = 'norepeat'
    ball3.classList.add('ballactive')
    //remove the active class
    ball1.classList.remove('ballactive')
    ball2.classList.remove('ballactive')
    ball4.classList.remove('ballactive')

}
ball4.onclick = () => {
    home.style.background = 'url(img/card4.jpg)'
    home.style.backgroundPosition = 'center'
    home.style.backgroundSize = 'cover'
    home.style.backgroundRepeat = 'norepeat'
    ball4.classList.add('ballactive')
    //remove the active class
    ball1.classList.remove('ballactive')
    ball2.classList.remove('ballactive')
    ball3.classList.remove('ballactive')
}
//---------------------------- 
up.addEventListener('click', () => {
    window.scrollTo({
        top : 0 , 
        behavior :"smooth"
    })
})