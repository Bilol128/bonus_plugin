const burgerButton = document.querySelectorAll('.burger-btn')
const burgerMenu = document.querySelector('.burger-menu')
const burgerMenu_Container = document.querySelector('.burger-container')
const body= document.querySelector('body')
const burger_close= document.querySelector('.burger-close')
const acardion_head= document.querySelectorAll('.acardion-header')
const acardion= document.querySelectorAll('.faq-acardion')
const acardion2= document.querySelectorAll('.acardion2-element')
const acardion_two= document.querySelectorAll('.acardion2-element2')



acardion_two.forEach(acardion2_elem => {
  console.log(acardion2_elem);
  acardion2_elem.addEventListener('click' , function(){
      if(acardion2_elem.classList.contains('acardion_2-active')){
        acardion2_elem.classList.remove('acardion_2-active')
      }else{
          acardion_two.forEach((event2) => event2.classList.remove("acardion_2-active"));
          acardion2_elem.classList.add('acardion_2-active')
      }
  })    
})

acardion2.forEach(acardion2_elem => {
  console.log(acardion2_elem);
  acardion2_elem.addEventListener('click' , function(){
      if(acardion2_elem.classList.contains('acardion2-active')){
        acardion2_elem.classList.remove('acardion2-active')
      }else{
          acardion2.forEach((event2) => event2.classList.remove("acardion2-active"));
          acardion2_elem.classList.add('acardion2-active')
      }
  })    
})




new Swiper('.slide2-container' ,{
  loop:false,
  spaceBetween: 50,
  slidesPerView:1,
  slideToClickedSlide: true,
  navigation: {
    nextEl: '.slide2-arrow__left',
    prevEl: '.slide2-arrow__right',
  },
 })

acardion.forEach(acardion_elem => {
  acardion_elem.addEventListener('click' , function(){
      if(acardion_elem.classList.contains('acardion-active')){
        acardion_elem.classList.remove('acardion-active')
      }else{
          acardion.forEach((event2) => event2.classList.remove("acardion-active"));
          acardion_elem.classList.add('acardion-active')
      }
  })    
})

new Swiper('.slider-container' ,{
     loop:false,
     spaceBetween: 30,
     slidesPerView:2.3,
     slideToClickedSlide: true,
     pagination: {
          el: '.slider-pagination',
          type:'progressbar'
       },
       breakpoints: {
          320: {
            slidesPerView: 1,
          },
          480: {
            slidesPerView: 1,
          },
          768: {
            slidesPerView: 1.2,
          },
          1200: {
            slidesPerView: 2.3,
          },
          1451: {
               slidesPerView:2.3,
          }
        }
    })


   burgerButton.forEach(burgerButtonElem => {
    burgerButtonElem.addEventListener('click' , function(){
      burgerButtonElem.classList.add('burger-btn_active')
      burgerMenu.classList.toggle('burger-menu_active')
      burgerMenu_Container.classList.toggle('burger-menuCont_active')
       body.classList.toggle('body-burger_lock')
 })
    burger_close.addEventListener('click', function(){
  burgerButtonElem.classList.remove('burger-btn_active')
     burgerMenu.classList.remove('burger-menu_active')
     burgerMenu_Container.classList.remove('burger-menuCont_active')
      body.classList.remove('body-burger_lock')
 })
   });
