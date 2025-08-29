const swiperMain = new Swiper('.swiper-mainBox', {
    centeredSlides: true,

    slidesPerView: 'auto',

    allowTouchMove: true,

    loop:true,

});

const swiperTrend = new Swiper('.trend-swiper', {
    slidesPerView: 'auto',
    spaceBetween: 30,
    
    allowTouchMove: true,
});

const swiperHeader = new Swiper('.header-swiper', {
    slidesPerView: '1',
    speed: 2000,
    loop: true,
    
    spaceBetween: 30,
    autoplay: {
        delay: 2500,
    },

    pagination: {
        el: '.header-pagination',
        type: "fraction",
    }
});

const progressBar = document.querySelector('.progress-bar');
const duration = 2500;

function startProgress() {
    progressBar.style.width = '100%';
    progressBar.style.transitionDuration = `${duration}ms`;   
}

window.onload = startProgress;

const titleLinks = document.querySelectorAll('.title-box ul li a');

titleLinks.forEach((link, index) => {
    link.addEventListener('click', (event) => {
        titleLinks.forEach(btn => {
            btn.classList.remove('active');
        });

        link.classList.add('active');
        event.preventDefault();

        const currentRealIndex = swiperMain.realIndex;

        if (index > currentRealIndex) {
            swiperMain.slideTo(swiperMain.activeIndex + (index - currentRealIndex));
        } else if (index < currentRealIndex) {
            swiperMain.slideTo(swiperMain.activeIndex - (currentRealIndex - index));
        }
    });
});

const Language = document.querySelectorAll('.language');
const language_setting = document.querySelectorAll('.language-setting');
const language_select = document.querySelectorAll('.language-select');

Language.forEach(function(el){
    el.addEventListener('click', function(event) {
        // 이벤트매개변수.preventDefault()
        // HTML 의 href값을 차단
        event.preventDefault();

        // 버튼의 on클래스 유무체크후 sub show, hide
        if (el.classList.contains('on')) {
            // 참(on이 있을때)
            // on클래스 제거
            el.classList.remove('on');
            // 자신의 서브박스가 보일때 숨기기
            el.nextElementSibling.style.display = 'none';
        } else {
            // 거짓(on이 없을때)
            // 다른요소에 on있는 경우 전체on을제거
            Language.forEach(function(e) {
                e.classList.remove('on');
            });
            // 다른서브박스가 보이는경우 전체서브박스를 hide
            language_setting.forEach(function(a) {
                a.style.display = 'none';
            });
            // 버튼 자기자신에게 on클래스 생성
            el.classList.add('on');
            // 버튼의 동생인 서브박스 보이기
            el.nextElementSibling.style.display = 'block';
        }
    });
});

language_select.forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();

        if (element.classList.contains('on')) {
            element.classList.remove('on');
        } else {
            language_select.forEach(function(otherElement) {
                otherElement.classList.remove('on');
            });
            element.classList.add('on');
        }
    });
});

const SiteBtn = document.querySelectorAll('.siteBtn');
const SiteLinkList = document.querySelectorAll('.site-Link-list');

SiteBtn.forEach(function(element) {
    element.addEventListener('click', function(event) {
        event.preventDefault();

        if (element.classList.contains('on')) {
            element.classList.remove('on');
            element.nextElementSibling.style.display = 'none';
        } else {
            SiteBtn.forEach(function(otherElement) {
                otherElement.classList.remove('on');
            });
            element.classList.add('on');
            element.nextElementSibling.style.display = 'block';
        }
    });
});


swiperMain.on('slideChangeTransitionEnd', function () {
    const activeIndex = swiperMain.realIndex;

    titleLinks.forEach(btn => {
        btn.classList.remove('active');
    });

    titleLinks[activeIndex].classList.add('active');
});

gsap.registerPlugin(ScrollTrigger);

gsap.set('.main2-list',{
    y: '50%',
    opacity: 0,
});

// 애니메이션 실행
gsap.to('.main2-list1',{
    y: 0,
    opacity: 1,
    ease: 'power3.inout',
    
    scrollTrigger: {
        // markers: true,
        trigger:'.main-box2',
        start: "top 30%",
        end: "top 50%",
        scrub: 1,
    }
})

gsap.to('.main2-list2',{
    y: 0,
    opacity: 1,
    ease: 'power3.inout',
    
    scrollTrigger: {
        // markers: true,
        trigger:'.main-box2',
        start: "top top",
        end: "top 60%",
        scrub: 1,
    }
});

gsap.to(".scaleImg", {
    width: "100%",
    height: "200vh",
    ease: "power1.out",
    distance: 2,

    scrollTrigger: {
        trigger: ".main-box3",
    }
});

const Menu = document.querySelectorAll('.menu');
const subMenuBox = document.querySelector('.sub-menu-box');
const subMenu = document.querySelectorAll('.sub-menu');

Menu.forEach(item => {
    item.addEventListener('mouseenter', () => {
        subMenuBox.classList.add('open');
        subMenu.forEach(el => {
            el.style.display = 'block';
        });
    });

    item.addEventListener('mouseleave', () => {
        subMenuBox.classList.remove('open');
        subMenu.forEach(el => {
            el.style.display = 'none';
        });
    });
})
