const swiper = new Swiper('.swiper', {
    // Optional parameters
    // direction: 'vertical',
    // loop: true,
  
    // // If we need pagination
    // pagination: {
    //   el: '.swiper-pagination',
    // },
  
    // // Navigation arrows
    // navigation: {
    //   nextEl: '.swiper-button-next',
    //   prevEl: '.swiper-button-prev',
    // },
  
    // // And if we need scrollbar
    // scrollbar: {
    //   el: '.swiper-scrollbar',
    // },
    effect: "cards",                   
    cardsEffect: {
        perSlideOffset: 15,             // slide gap(px)
        perSlideRotate: 10,             // Rotation angle of second and subsequent slides
        rotate: true,                   // Rotation presence of second and subsequent slides(true/false)
        slideShadows: false,            // Shadow presence of second and subsequent slides(true/false)
    },
    grabCursor: true,                   //grab cursor
    pagination: {                       //pagination(dots)
        el: '.swiper-pagination',
    },
    navigation: {                       //navigation(arrows)
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",

    },
    
  });

  const banners = Array.from(document.querySelectorAll(".swiper-slide"))
  
  banners.forEach((el) => {
    el.addEventListener("click", e => {
      window.location.href = el.getAttribute('data-url')
    })
  })
  
let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.menu');

menuBtn.addEventListener('click', function(){
	menuBtn.classList.toggle('active');
	menu.classList.toggle('active');
})