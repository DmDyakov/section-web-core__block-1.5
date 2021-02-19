let mySwiper;
let swiperOn;
 
let changeSwiper = () => {        
    if (document.documentElement.clientWidth >= 768 && swiperOn == 1) {
        swiperOn = 0
        // console.log(swiperOn);
        mySwiper.destroy();
       
    } else {
        mySwiper = new Swiper('.swiper-container', {
            slidesPerView: 'auto',
            // spaceBetween: 16,               
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },              
        });        
        swiperOn = 1;
        // console.log(swiperOn);
    }
}
changeSwiper();
window.addEventListener('resize', () => {
        changeSwiper(); 
        hide();
    });

// ================

let changeBtn = document.querySelector('.slider__change-size-btn');
changeBtn.textContent = 'Показать все';

let sliderWrapper = document.querySelector('.slider__wrapper');

let show = () => {
    changeBtn.textContent = 'Скрыть'; 
    sliderWrapper.classList.add('show');
}

let hide = () => {
    changeBtn.textContent = 'Показать все';
    sliderWrapper.classList.remove('show')
}

changeBtn.addEventListener('click',  () => {
    if (changeBtn.textContent == 'Показать все') {
       show();
    } else {
       hide();
    }  
    
});

