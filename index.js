let detailsElems = document.getElementsByTagName('details')
for (let elem of detailsElems) {
  elem.addEventListener('click', () => {
    for (let item of detailsElems) {
      item.open = false;
    }
  })
}

$(document).ready(function () {
  $(".reviews__slider").slick({
    infinity: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    prevArrow: $(".slider__prev-btn"),
    nextArrow: $(".slider__next-btn"),
    autoplay: true,
  });
});


let loginBtn = document.querySelector(".application__btn");
let loginModal = document.querySelector(".modal");
let closeModal = document.querySelector('.modal__close')



let miniModal = document.querySelector('.animate__modal')
let animModalGrow = document.querySelector('.animate__grow')
let miniModalShow = document.querySelector('.mini')
let miniBtn = document.querySelector('.mini__close')



// miniModal.addEventListener("click", () => {
//   miniModalShow.classList.add("mini--show")
// })
// miniBtn.addEventListener("click", () => {
//   miniModalShow.classList.remove("mini--show")
// })
animModalGrow.addEventListener("click", () => {
  miniModalShow.classList.toggle("mini--show")
  // closeAnimModal.classList.toggle("animate__close--active")
})



loginBtn.addEventListener("click", () => {
  loginModal.classList.add("modal--show");
});
closeModal.addEventListener("click", () => {
  loginModal.classList.remove("modal--show");
})





let desc = document.querySelector('.about__desc')
let descImg = document.querySelector('.about__saly')
console.log(descImg);

desc.addEventListener('mouseover', () => {
  descImg.classList.add('about__saly--active')
});
desc.addEventListener('mouseleave', () => {
  descImg.classList.remove('about__saly--active')
});




let desc1 = document.querySelector('.about__desc2')
let descImg1 = document.querySelector('.about__saly2')

desc1.addEventListener('mouseover', () => {
  descImg1.classList.add('about__saly2--right')
});
desc1.addEventListener('mouseleave', () => {
  descImg1.classList.remove('about__saly2--right')
});



let desc2 = document.querySelector('.about__desc3')
let descImg2 = document.querySelector('.about__saly3')

desc2.addEventListener('mouseover', () => {
  descImg2.classList.add('about__saly3--leftbottom')
});
desc2.addEventListener('mouseleave', () => {
  descImg2.classList.remove('about__saly3--leftbottom')
});




let desc3 = document.querySelector('.about__desc4')
let descImg3 = document.querySelector('.about__saly4')

desc3.addEventListener('mouseover', () => {
  descImg3.classList.add('about__saly4--rightbottom')
});
desc3.addEventListener('mouseleave', () => {
  descImg3.classList.remove('about__saly4--rightbottom')
});










