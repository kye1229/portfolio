const mainSwiper = new Swiper('#main',{
    direction:'vertical',
    mousewheel:true,
});

const webSwiper = new Swiper('.page3 .web_swiper',{
    speed:1000,
    pagination:{
        el:'.web_swiper .swiper-pagination',
        type:'bullets',
        clickable:true,
    }
});

const bnrSwiper = new Swiper('.page4 .bnr',{
    autoplay:{delay:0,},
    loop:true,
    speed:4000,
    slidesPerView:3,

});

const snsSwiper = new Swiper('.page4 .sns_contents',{
    autoplay:{delay:0,},
    loop:true,
    speed:8000,
    slidesPerView:3,

});


const activeScroll = document.querySelector('.design_right .active-scrollbar');
const detailSwiper = new Swiper('.design_right .detail_page',{
    autoplay:{delay:2500,},
    loop:true,
    on:{
        autoplayTimeLeft(type,time,progress) {
            if(progress === 1){
                activeScroll.style.width = '0%'
                activeScroll.style.transition = 'none'
            }else {
                activeScroll.style.width = '100%'
                activeScroll.style.transition = 'width 2.5s linear'
            }
        }
    },
});

const popBg = document.querySelector('.popup_bg');