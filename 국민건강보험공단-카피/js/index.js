
// 사이트팝업 열기,닫기
// 일반변수 = let (값이 바뀜)
// 상수변수 = const (값이 안바뀜)
// 버튼,배너하단 박스 로딩
const btn_showhide = document.querySelector('.btn-showhide');
const banner_bottom = document.querySelector('.banner-bottom');

// 버튼에 클릭이벤트 적용
btn_showhide.addEventListener('click',function(){
    // 조건문을 활용하여 banner-bottom영역 show,hide
    // 클래스의 유무를 체크
    // 오브젝트.classList.contains('클래스이름')
    // 클래스가 있으면 = true,
    // 클래스가 없으면 = false
    if (banner_bottom.classList.contains('on')) {
        // 참인경우
        // on이 있을때
        // on클래스를 제거
        banner_bottom.classList.remove('on');
        btn_showhide.classList.remove('on');
        btn_showhide.textContent = '팝업 닫기';
    } else {
        // 거짓인경우
        // 디폴트값이 = on이 없는 경우
        // 버튼의 텍스트 내용 = 팝업닫기
        // 버튼옆의 화살표 = 위를 향하고 있음
        // on클래스를 만들어라
        banner_bottom.classList.add('on');
        // 버튼에도 on클래스 생성후 화살표 방향 변경
        btn_showhide.classList.add('on');
        // 버튼의 내용을 '팝업 열기'로 변경
        // obejct.textContent = '텍스트'
        btn_showhide.textContent = '팝업 열기';
    }
});

// 사이트설정 서브메뉴 show, hide
const setting_btn = document.querySelectorAll('.setting-item');
const setting_sub = document.querySelectorAll('.setting-sub')

setting_btn.forEach(function(el){
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
            setting_btn.forEach(function(e) {
                e.classList.remove('on');
            });
            // 다른서브박스가 보이는경우 전체서브박스를 hide
            setting_sub.forEach(function(a) {
                a.style.display = 'none';
            });
            // 버튼 자기자신에게 on클래스 생성
            el.classList.add('on');
            // 버튼의 동생인 서브박스 보이기
            el.nextElementSibling.style.display = 'block';
        }

    });
});


// Header - Gnb
const gnb_btn = document.querySelectorAll('.gnb > li > button');
const gnb_sub = document.querySelectorAll('.gnb .gnb-sub');

gnb_btn.forEach(function(el,i) {
    // 버튼클릭시??
    el.addEventListener('click', function() {
        // 클릭한 대상의 동생요소안에서 버튼요소찾아서 변수저장
        const depth1_btn =  el.nextElementSibling.querySelectorAll('button');
        console.log(depth1_btn);
        // 서브메뉴 첫번째 버튼요소 활성화
        depth1_btn[0].classList.add('on');


        // 버튼의 인덱스와 같은 sub인덱스요소 보이기
        // gnb_sub[i].style.display = 'block';
        // 버튼요소에 on클래스 유무를 체크


        if (el.classList.contains('on')) {
            // 있을때
            el.classList.remove('on');
            gnb_sub[i].style.display = 'none';
        } else {
            // 없을때
            // 기본값 (서브박스가 안보이는 상태)
            // 전체 버튼의 클래스 on제거
            gnb_btn.forEach(function(e){
                e.classList.remove('on');
            });
            // 전체 서브박스 숨기기
            gnb_sub.forEach(function(element){
                element.style.display = 'none';
            });

            el.classList.add('on');
            gnb_sub[i].style.display = 'block';

            //
            

        }
    });
});


// main sec2 -- 개인, 사업장 버튼
const service_btn = document.querySelectorAll('.service-menu button');
const service_cont = document.querySelectorAll('.service-cont');

// 전체서비스 숨김처리, 개인서비스컨텐츠 Show
service_cont.forEach(function(el){
    el.style.display = 'none';
});
service_cont[0].style.display = 'flex';

// 개인 = 0, 사업장 = 1
service_btn.forEach(function(el,i) {
    el.addEventListener('click', function(){
        // 버튼요소에 active클래스 유무체크
        // ! = 부정
        // active클래스가 없을때
        if (!el.classList.contains('active')) {
            // 없을때
            // 전체 active제거
            service_btn.forEach(function(e) {
                e.classList.remove('active');
            });
            // 전체서비스컨텐츠 숨기처리
            service_cont.forEach(function(el){
                el.style.display = 'none';
            });
            
            // 클릭한 요소만 active생성
            el.classList.add('active');
            // 클릭한 버튼의 인덱스와 같은 서비스컨텐츠만 show
            service_cont[i].style.display = 'flex';
        } 
    });
});

// 나를 위한 건강보험 제도 슬라이드
const my_insurance_slide = new Swiper('.swiper-insurance', {
    // 슬라이드 3개씩 보기
    slidesPerView : 3,
    // 슬라이드 사이의 간격
    spaceBetween : 16,
    // 슬라이드 3개씩 넘기기
    slidesPerGroup : 3,
    // 자동실행
    autoplay : {
        delay : 3500,
    },
    // 슬라이드 속도
    speed : 2000,
    // 슬라이드 한쪽방향으로 반복
    loop : true,
    // 페이지 네비게이션
    pagination : {
        el : '.my-insurance-slide-ctrl .page-navi',
        type : 'fraction',
    },
    // 좌우화살표
    navigation : {
        prevEl : '.my-insurance-slide-ctrl .prev',
        nextEl : '.my-insurance-slide-ctrl .next',
    }
});

// 자동실행 중지, 실행
const play_btn = document.querySelector('.my-insurance-slide-ctrl .play');
const pause_btn = document.querySelector('.my-insurance-slide-ctrl .pause');

// 페이지 로딩시 실행버튼 숨기기
play_btn.style.display = 'none';

pause_btn.addEventListener('click', function() {
    // 스와이퍼가 저장된변수.autoplay.stop();
    my_insurance_slide.autoplay.stop();
    this.style.display = 'none';
    play_btn.style.display = 'block';
});

play_btn.addEventListener('click', function() {
    my_insurance_slide.autoplay.start();
    this.style.display = 'none';
    pause_btn.style.display = 'block';
});

// 카드뉴스 -- 슬라이드
const card_news_slide = new Swiper('.swiper-card-news', {
    autoplay : {
        delay : 3500,
    },
    
    pagination : {
        el : '.card-news-ctrl .page-navi',
        type : 'fraction'
    },

    navigation : {
        prevEl : '.card-news-ctrl .prev',
        nextEl : '.card-news-ctrl .next'
    }
})

const promotion_slide = new Swiper('.swiper-promotion', {
    autoplay : {
        delay : 3500,
    },

    pagination : {
        el : '.promotion-ctrl .page-navi',
        type : 'fraction'
    },

    navigation : {
        prevEl : '.promotion-ctrl .prev',
        nextEl : '.promotion-ctrl .next'
    }
});

// 탭뉴스
// querySeletorAll 복수라서 변수명에 s를 붙임
const tab_news_btns = document.querySelectorAll('.tab-news-menu-btn');
const tab_news_conts = document.querySelectorAll('.tab-news-cont');

// 탭뉴스 : 공지사항만 보이기(나머지 숨기기)
tab_news_conts.forEach(function(tab_cont) {
    tab_cont.style.display = 'none';
});

tab_news_conts[0].style.display = 'block';

tab_news_btns.forEach(function(news_btns, index) {
    news_btns.addEventListener('click', function () {
        // 버튼에 active클래스가 있나없나 비교
        if (!news_btns.classList.contains('active')) {
            // 모든 버튼의 active 제거
            tab_news_btns.forEach(function(el) {
                el.classList.remove('active');
            });
            // 전체 컨텐츠 숨기기
            tab_news_conts.forEach(function(tab_cont) {
                tab_cont.style.display = 'none';
            });
            // active 제거 후, 클릭한 버튼에 active를 붙임 
            // news_btns에 active가 붙어있지 않을 경우
            this.classList.add('active');
            // 클릭한 버튼의 인덱스와 같은 컨텐츠 보이기
            tab_news_conts[index].style.display = 'block';
        }
    });
});

const sns_slide = new Swiper('.swiper-sns', {
    autoplay : {
        delay : 3500,
    },

    slidesPerView : 2,
    // 슬라이드 사이의 간격
    spaceBetween : 20,
    // 슬라이드 3개씩 넘기기
    slidesPerGroup : 1,
    // 자동실행

    pagination : {
        el : '.sns-slide .page-navi',
    },

    navigation : {
        prevEl : '.sns-slide .prev',
        nextEl : '.sns-slide .next'
    }
});

// 자동실행 중지, 실행
const sns_play_btn = document.querySelector('.sns-slide .play');
const sns_pause_btn = document.querySelector('.sns-slide .pause');

// 페이지 로딩시 실행버튼 숨기기
sns_play_btn.style.display = 'none';

sns_pause_btn.addEventListener('click', function() {
    // 스와이퍼가 저장된변수.autoplay.stop();
    sns_slide.autoplay.stop();
    this.style.display = 'none';
    sns_play_btn.style.display = 'block';
});

sns_play_btn.addEventListener('click', function() {
    sns_slide.autoplay.start();
    this.style.display = 'none';
    sns_pause_btn.style.display = 'block';
});

// footer 관련사이트 가기
const sitelink_btn = document.querySelectorAll('.sitelink-btn');
const sitelink_sub = document.querySelectorAll('.sitelink-sub');
const body = document.querySelector('body');
const sitelink_close_btn = document.querySelectorAll('.sitelink-close');

sitelink_btn.forEach(function(element, index) {
    element.addEventListener('click', function() {
        // 클릭한 대상의 동생요소 sitelink sub 보이기
        this.nextElementSibling.style.display = 'block';

        // body 요소 overflow hidden
        body.classList.add('on');
    });
});

sitelink_close_btn.forEach(function(element, index) {
    element.addEventListener('click', function() {
        // 전체 사이트링크 서브 박스 숨김 처리
        sitelink_sub.forEach(function(e) {
            e.style.display = 'none';
        });
        // body 클래스 on 제거
        body.classList.remove('on');
    });
})