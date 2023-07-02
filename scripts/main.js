const swiper = new Swiper('.swiper', {
    effect: "cards",                   
    cardsEffect: {
        perSlideOffset: 15, 
        perSlideRotate: 10, 
        rotate: true,
        slideShadows: false,
    },
    grabCursor: true,
    pagination: {   
        el: '.swiper-pagination',
    },
    navigation: {
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