
let mySwiper = 'not init';
function initSwiper() {
    if (document.documentElement.clientWidth < 768 
        && mySwiper == 'not init') {        
        mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            spaceBetween: 16,
            watchOverflow: true,      
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },             
              
        });        
        
    } else if (document.documentElement.clientWidth >= 768 
        && mySwiper != 'not init') {             
        mySwiper.destroy();            
        mySwiper = 'not init';
             
    }        
}
   
initSwiper();

window.addEventListener('resize', () => {
    initSwiper(); 
});

// ================

let changeBtn = document.querySelector('.slider__change-size-btn');
changeBtn.textContent = 'Показать все';

let sliderWrapper = document.querySelector('.slider__wrapper');

changeBtn.addEventListener('click',  () => {
    if (changeBtn.textContent == 'Показать все') {
       changeBtn.textContent = 'Скрыть'; 
       sliderWrapper.classList.add('show');
    } else {
        changeBtn.textContent = 'Показать все';
        sliderWrapper.classList.remove('show')
    }    
    
});
