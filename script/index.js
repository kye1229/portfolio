const mainSwiper = new Swiper('#main',{
    direction:'vertical',
    mousewheel:true,
    on:{
        slideChangeTransitionEnd:function(){
            setTimeout(()=> ScrollTrigger.refresh() ,0)
        }
    },
});
gsap.registerPlugin(ScrollTrigger);
gsap.to('.page2 .info',{
    scrollTrigger:{
        trigger:'.page2 .info',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse', 
    },
    opacity:1,
    top:0,
});

const webSwiper = new Swiper('.page3 .web_swiper',{
    autoplay:{delay:4000,},
    speed:1500,
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
    slidesPerView:2.5,
    centeredSlides:true,
    spaceBetween:20,
});

const snsSwiper = new Swiper('.page4 .sns_contents',{
    autoplay:{delay:0,},
    loop:true,
    speed:8000,
    slidesPerView:2.5,
    centeredSlides:true,
    spaceBetween:20,
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
const bnr = document.querySelectorAll('.bnr img');
const sns = document.querySelectorAll('.sns_contents img');
const detail = document.querySelectorAll('.detail_page img');
popBg.style.display = 'none'
for(let i of bnr){
    i.addEventListener('click',()=>{
        popBg.style.display = 'block';
        popBg.children[0].children[0].src = i.src;
        popBg.children[0].style.width = '900px';
        popBg.children[0].style.marginTop = '300px';
        mainSwiper.mousewheel.disable();
    })
}
for(let i of sns){
    i.addEventListener('click',()=>{
        popBg.style.display = 'block';
        popBg.children[0].children[0].src = i.src;
        popBg.children[0].style.width = '700px';
        popBg.children[0].style.marginTop = '100px'
        mainSwiper.mousewheel.disable();
})};

popBg.addEventListener('click',function(){
    popBg.style.display = 'none';
    mainSwiper.mousewheel.enable();
});
for(let i of detail){
    i.addEventListener('click',()=>{
        popBg.style.display = 'block'
        popBg.children[0].children[0].src = i.src;
        popBg.children[0].style.width = '700px';
        popBg.children[0].style.marginTop = '100px';
        mainSwiper.mousewheel.disable();
})};

gsap.to('.page5 .txt',{
    scrollTrigger:{
        trigger:'.page5 .txt',
        start:'top 80%',
        end:'top 20%',
        toggleActions:'play reverse restart reverse', 
    },
    opacity:1,
    top:0,
});