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
        renderFraction: function (currentClass, totalClass) {
            return `<span class="${currentClass}"></span> / <span class="${totalClass}"></span>`;
        },
            // 현재 슬라이드 번호를 두 자리로 만들어주는 함수
        formatFractionCurrent: function (number) {
            // 슬라이드 번호가 10보다 작으면 앞에 '0'을 붙여서 두 자리 숫자로 표시
            return number < 10 ? '0' + number : number;  // 현재 슬라이드 숫자에 0 추가
        },
            // 총 슬라이드 숫자를 두 자리로 만들어주는 함수
        formatFractionTotal: function (number) {
            // 슬라이드 번호가 10보다 작으면 앞에 '0'을 붙여서 두 자리 숫자로 표시
            return number < 10 ? '0' + number : number;  // 총 슬라이드 숫자에 0 추가
        },
    },
    on: {
        slideChangeTransitionStart: function () {
            const progressBar = document.querySelector(".progress-bar");

            progressBar.style.transition = "none";
            progressBar.style.width = "0%";
        },

        slideChangeTransitionEnd: function () {
            const progressBar = document.querySelector(".progress-bar");
            const duration = 2500;

            progressBar.style.transition = `${duration}ms`;
            progressBar.style.width = "100%";
        }
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
        event.preventDefault();

        if (el.classList.contains('on')) {
            el.classList.remove('on');
            el.nextElementSibling.style.display = 'none';
        } else {
            Language.forEach(function(e) {
                e.classList.remove('on');
            });
            language_setting.forEach(function(a) {
                a.style.display = 'none';
            });
            el.classList.add('on');
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

document.addEventListener('DOMContentLoaded', () => {
    const inputWraps = document.querySelectorAll('.input-wrap');

    inputWraps.forEach(function(input) {
        const sortBtn = input.querySelector('.sortation-button');
        const sortationList = input.querySelector('.sortation');
        const sortCont = input.querySelectorAll(".sortation-content");
        
        sortBtn.addEventListener('click', function(event) {
            event.preventDefault();

            if (sortationList.style.display === 'block') {
                sortationList.style.display = 'none';
                sortBtn.classList.remove('on');
            } else {
                document.querySelectorAll('.sortation').forEach(list => {
                    list.style.display = 'none';
                    list.previousElementSibling.classList.remove('on');
                });
                
                sortationList.style.display = 'block';
                sortBtn.classList.add('on');
            }
        });

        sortCont.forEach(function(btn) {
            btn.addEventListener('click', function(event) {
                event.preventDefault();

                // Remove 'on' class from all list items in this dropdown
                sortCont.forEach(function(item) {
                    item.classList.remove('on');
                });

                // Add 'on' class to the clicked item
                btn.classList.add('on');

                // Get the text for the button, prioritizing data-text
                const btnText = btn.dataset.text || btn.textContent;
                sortBtn.textContent = btnText;

                // Close the dropdown list and remove the 'on' class from the button
                sortationList.style.display = 'none';
                sortBtn.classList.remove('on');
            });
        });

        // Close dropdown when clicking outside the input-wrap
        document.addEventListener('click', (event) => {
            if (!input.contains(event.target)) {
                sortationList.style.display = 'none';
                sortBtn.classList.remove('on');
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const phoneInput = document.querySelector('.input-tel');

    if (phoneInput) {
        phoneInput.addEventListener('input', function(event) {
            let phoneNumber = event.target.value.replace(/[^0-9]/g, ''); // 숫자만 추출
            let formattedNumber = '';

            if (phoneNumber.length < 4) {
                formattedNumber = phoneNumber;
            } else if (phoneNumber.length < 7) {
                formattedNumber = phoneNumber.substring(0, 3) + '-' + phoneNumber.substring(3);
            } else if (phoneNumber.length < 11) {
                formattedNumber = phoneNumber.substring(0, 3) + '-' + phoneNumber.substring(3, 6) + '-' + phoneNumber.substring(6);
            } else {
                formattedNumber = phoneNumber.substring(0, 3) + '-' + phoneNumber.substring(3, 7) + '-' + phoneNumber.substring(7, 11);
            }
            event.target.value = formattedNumber;
        });
    }
});