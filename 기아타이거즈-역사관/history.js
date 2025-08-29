const history_btn = document.querySelectorAll('.history-button');
const history_show = document.querySelectorAll('.history-show');
const close_btn = document.querySelectorAll('.close');

history_btn.forEach(function(el) {
    el.addEventListener('click', function(event) {
        history_btn.forEach(function(e) {
            e.classList.remove('on');
        });

        // 다른 창 열면 이전에 열려있던거 꺼짐
        history_show.forEach(function(show) {
            show.style.display = 'none';
        });

        el.classList.add('on');
        el.nextElementSibling.style.display = 'block';
    });
});

close_btn.forEach(function(b) {
    b.addEventListener('click', function(event) {
        const active_btn = document.querySelector('.history-button.on');

        if (active_btn) {
            active_btn.classList.remove('on');
            active_btn.nextElementSibling.style.display = 'none';
        }
    })
})

const yearButtons = document.querySelectorAll('.history-eight button');
const innerBoxes = document.querySelectorAll('.inner-box');

window.addEventListener('DOMContentLoaded', () => {
    innerBoxes.forEach(box => box.classList.remove('active'));
    yearButtons.forEach(box => box.classList.remove('year-active'));
    document.querySelector('.inner-box1').classList.add('active');
    document.querySelector('.history-eight button').classList.add('year-active');
});

yearButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        innerBoxes.forEach(box => box.classList.remove('active'));
        yearButtons.forEach(box => box.classList.remove('year-active'));
        const targetBox = document.querySelector(`.inner-box${index + 1}`);
        if (targetBox) {
            targetBox.classList.add('active');
            btn.classList.add('year-active');
        }
    });
});

innerBoxes.forEach(innerBox => {
    const thumbBtns = innerBox.querySelectorAll('.thumb-img-btn');
    const mainImg1 = innerBox.querySelector('.image-box img');
    const mainTxt1 = innerBox.querySelector('.text-box p');
    
    const defaultBtn = innerBox.querySelector('.thumb-img-btn.on');
    if (defaultBtn) {
        const imgSrc = defaultBtn.dataset.imgSrc;
        const imgText = defaultBtn.dataset.text;
        if (imgSrc) mainImg1.src = imgSrc;
        if (imgText) mainTxt1.textContent = imgText;
    }

    thumbBtns.forEach(btn => {
        const imgSrc = btn.dataset.imgSrc;
        const imgText = btn.dataset.text;

        btn.addEventListener('click', () => {
            thumbBtns.forEach(imgItem => imgItem.classList.remove('on'));
            btn.classList.add('on');

            if (imgSrc) mainImg1.src = imgSrc;
            if (imgText) mainTxt1.textContent = imgText;
        });

        if (imgSrc) {
            btn.style.backgroundImage = `url(${imgSrc})`;
        }
    });
});


const slide = new Swiper('.swiper', {
    speed : 1000,
    // autoplay : {
    //     delay : 1000,
    // }
});

document.addEventListener('DOMContentLoaded', () => {
    const recordMenu = document.querySelectorAll('.record-menu a');
    const recordTable = document.querySelectorAll('.record-table');
    const recordListBtn = document.querySelectorAll('.record-list-button button');
    const recordTableBody = document.querySelector('.record-table tbody');

    const tableData = {
        '노히트 노런': [
            {
                no: '1', date: '1984.05.05', player: '방수원', opposingTeam: '삼미', place: '광주', opposingPitcher: '신태중 김재현 <br>오문현', result: '8-0 승', notes: '한국프로야구 최초, 6삼진,<br>3사사구'
            },
            {
                no: '2', date: '1989.07.06', player: '선동열', opposingTeam: '삼성', place: '광주', opposingPitcher: '김상엽 이문한 <br>양일환 오명록 <br>정윤수', result: '10-0 승', notes: '9삼진, 3사사구'
            }
            ],
            '1안타 경기': [
            {
                no: '1', date: '1990.05.23', player: '이강철', opposingTeam: '삼성', place: '광주', opposingPitcher: '오명록 최동원 <br>김상엽 유명선', result: '6-0 승', notes: '홍승규 1회 안타'
            },
            {
                no: '2', date: '1990.06.13', player: '선동열', opposingTeam: '롯데', place: '사직', opposingPitcher: '윤동배 박동수', result: '3-0 승', notes: '허규옥 7회 안타'
            },
            {
                no: '3', date: '1990.07.30', player: '신동수', opposingTeam: '태평양', place: '광주', opposingPitcher: '최창호 조영상<br>박은진', result: '2-0 승', notes: '정영기 6회 안타'
            },
            {
                no: '4', date: '1994.08.14', player: '조계현', opposingTeam: '쌍방울', place: '전주', opposingPitcher: '박성기 박진석', result: '4-0 승', notes: '김기태 2회 안타'
            },
        ]
    };

    const renderTable = (data) => {
        recordTableBody.innerHTML = '';
        if (data && data.length > 0) {
        data.forEach(item => { 
            const row = document.createElement('tr');
            row.innerHTML = `
            <td>${item.no}</td>
            <td>${item.date}</td>
            <td>${item.player}</td>
            <td>${item.opposingTeam}</td>
            <td>${item.place}</td>
            <td>${item.opposingPitcher}</td>
            <td>${item.result}</td>
            <td>${item.notes}</td>
            `;
            recordTableBody.appendChild(row);
        });
        } else {
        recordTableBody.innerHTML = '<tr><td colspan="8">데이터가 없습니다.</td></tr>';
        }
    };

    window.addEventListener('DOMContentLoaded', () => {
        recordTable.forEach(box => box.classList.remove('active'));
        recordListBtn.forEach(box => box.classList.remove('record-active'));
        document.querySelector('.record-table').classList.add('active');
        document.querySelector('.record-list-button button').classList.add('record-active');
    });

    recordListBtn.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            recordTable.forEach(box => box.classList.remove('active'));
            recordListBtn.forEach(box => box.classList.remove('record-active'));
            const targetBox = document.querySelector(`.record-table${index + 1}`);
            if (targetBox) {
                targetBox.classList.add('active');
                btn.classList.add('record-active');
            }
        });
    });

    recordMenu.forEach(link => {
        link.addEventListener('click', (event) => {
        event.preventDefault(); 
        
        recordMenu.forEach(item => item.classList.remove('active'));
        link.classList.add('active');

        const recordType = link.textContent.trim();
        const dataToDisplay = tableData[recordType];
        
        renderTable(dataToDisplay);
        });
    });
    
    if (recordMenu.length > 0) {
        recordMenu[0].classList.add('active');
        renderTable(tableData[recordMenu[0].textContent.trim()]);
    }
});

const playerButtons = document.querySelectorAll('.history-player button');
const playerTableBox = document.querySelectorAll('.table-box');

window.addEventListener('DOMContentLoaded', () => {
    playerTableBox.forEach(box => box.classList.remove('active'));
    playerButtons.forEach(box => box.classList.remove('player-active'));
    document.querySelector('.table-box').classList.add('active');
    document.querySelector('.history-player button').classList.add('player-active');
});

playerButtons.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        playerTableBox.forEach(box => box.classList.remove('active'));
        playerButtons.forEach(box => box.classList.remove('player-active'));
        const targetBox = document.querySelector(`.table-box${index + 1}`);
        if (targetBox) {
            targetBox.classList.add('active');
            btn.classList.add('player-active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.querySelector('.BI-main-img');
    const thumbButtons = document.querySelectorAll('.BI-thumb');

    thumbButtons.forEach(button => {
        const imageSrc = button.getAttribute('data-img-src');
        if (imageSrc) {
            button.style.backgroundImage = `url('${imageSrc}')`;
        }

        button.addEventListener('click', (event) => {
            thumbButtons.forEach(btn => {
                btn.classList.remove('on');
            });
            event.currentTarget.classList.add('on');
            const newImageSrc = event.currentTarget.getAttribute('data-img-src');
            mainImage.src = newImageSrc;
        });
    });

    function setDefaultImage() {
        const firstButton = thumbButtons.length > 0 ? thumbButtons[0] : null;
        if (firstButton) {
            firstButton.classList.add('on');
            const defaultImageSrc = firstButton.getAttribute('data-img-src');
            mainImage.src = defaultImageSrc;
        }
    }
    
    setDefaultImage();
});