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

document.addEventListener('DOMContentLoaded', () => {
    const recordMenuContainer = document.querySelector('.record-menu');
    const recordTableBodies = document.querySelectorAll('.record-table tbody');
    const recordListButtons = document.querySelectorAll('.record-list-button button');
    const recordTables = document.querySelectorAll('.record-table');

    const allRecordsData = {
        '노히트 관련': {
            menu: ['노히트 노런', '1안타 경기'],
            data: {
                '노히트 노런': [
                    { no: '1', date: '1984.05.05', player: '방수원', opposingTeam: '삼미', place: '광주', opposingPitcher: '신태중 김재현 <br>오문현', result: '8-0 승', notes: '한국프로야구 최초, 6삼진,<br>3사사구' },
                    { no: '2', date: '1989.07.06', player: '선동열', opposingTeam: '삼성', place: '광주', opposingPitcher: '김상엽 이문한 <br>양일환 오명록 <br>정윤수', result: '10-0 승', notes: '9삼진, 3사사구' }
                ],
                '1안타 경기': [
                    { no: '1', date: '1990.05.23', player: '이강철', opposingTeam: '삼성', place: '광주', opposingPitcher: '오명록 최동원 <br>김상엽 유명선', result: '6-0 승', notes: '홍승규 1회 안타' },
                    { no: '2', date: '1990.06.13', player: '선동열', opposingTeam: '롯데', place: '사직', opposingPitcher: '윤동배 박동수', result: '3-0 승', notes: '허규옥 7회 안타' },
                    { no: '3', date: '1990.07.30', player: '신동수', opposingTeam: '태평양', place: '광주', opposingPitcher: '최창호 조영상<br>박은진', result: '2-0 승', notes: '정영기 6회 안타' },
                    { no: '4', date: '1994.08.14', player: '조계현', opposingTeam: '쌍방울', place: '전주', opposingPitcher: '박성기 박진석', result: '4-0 승', notes: '김기태 2회 안타' }
                ]
            }
        },

        '홈런 관련': {
            menu: ['만루 홈런', '연타석 홈런', '연속타자 홈런', '끝내기 홈런', '기타 홈런'],
            data: {
                '만루 홈런': [
                    { no: '1', date: '1983.07.12', player: '김준환', opposingTeam: '롯데', place: '구덕', opposingPitcher: '노상수', result: '5-7 패', notes: '' },
                    { no: '2', date: '1984.08.01', player: '송일섭', opposingTeam: '삼미', place: '광주', opposingPitcher: '김재현', result: '8-2 승', notes: '' },
                    { no: '3', date: '1986.07.03', player: '김일권', opposingTeam: '롯데', place: '광주', opposingPitcher: '배경환', result: '8-6 승', notes: '' },
                    { no: '4', date: '1986.08.21', player: '한대화', opposingTeam: '삼성', place: '광주', opposingPitcher: '전용권', result: '14-2 승', notes: '' },
                    { no: '5', date: '1987.09.04', player: '김성한', opposingTeam: '삼성', place: '대구', opposingPitcher: '김훈기', result: '9-4 승', notes: '11회 연장' },
                ],
                '연타석 홈런': [
                    { no: '1', date: '1986.07.03', player: '김일권', opposingTeam: '롯데', place: '광주', opposingPitcher: '배경환', result: '8-6 승', notes: '' },                    
                ],
                '연속타자 홈런': [
                    { no: '1', date: '1986.07.03', player: '김일권', opposingTeam: '롯데', place: '광주', opposingPitcher: '배경환', result: '8-6 승', notes: '' },                    
                ],
                '끝내기 홈런': [
                    { no: '1', date: '1986.07.03', player: '김일권', opposingTeam: '롯데', place: '광주', opposingPitcher: '배경환', result: '8-6 승', notes: '' },                    
                ],
                '기타 홈런': [
                    { no: '1', date: '1986.07.03', player: '김일권', opposingTeam: '롯데', place: '광주', opposingPitcher: '배경환', result: '8-6 승', notes: '' },                    
                ],
            }
        },

        '득점 관련': {
            menu: ['20안타 또는 20득점 기록'],
            data: {
                '20안타 또는 20득점 기록': [
                    { no: '1', date: '1987.05.23', opposingTeam: '청보 핀토스', place: '광주', opposingPitcher: '최일언, 신성범', result: '17-1 승',},
                ]
            }
        }
    };

    const renderTable = (data, tableIndex) => {
        const targetTableBody = recordTableBodies[tableIndex];
        if (!targetTableBody) return;

        targetTableBody.innerHTML = '';
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
                targetTableBody.appendChild(row);
            });
        } else {
            targetTableBody.innerHTML = '<tr><td colspan="8">데이터가 없습니다.</td></tr>';
        }
    };

    const renderMenu = (menuItems, tableIndex) => {
        recordMenuContainer.innerHTML = '';
        menuItems.forEach((item, index) => {
            const li = document.createElement('li');
            const a = document.createElement('a');
            a.href = '#';
            a.textContent = item;
            li.appendChild(a);
            recordMenuContainer.appendChild(li);

            a.addEventListener('click', (event) => {
                event.preventDefault();

                document.querySelectorAll('.record-menu a').forEach(link => link.classList.remove('active'));
                a.classList.add('active');

                const recordType = a.textContent.trim();
                const currentData = Object.values(allRecordsData)[tableIndex].data;
                const dataToDisplay = currentData[recordType];
                renderTable(dataToDisplay, tableIndex);
            });
        });

        if (recordMenuContainer.firstChild) {
            const firstLink = recordMenuContainer.querySelector('a');
            firstLink.classList.add('active');
            const initialDataKey = firstLink.textContent.trim();
            const initialData = Object.values(allRecordsData)[tableIndex].data[initialDataKey];
            renderTable(initialData, tableIndex);
        }
    };

    recordListButtons.forEach((btn, index) => {
        btn.addEventListener('click', () => {
            recordTables.forEach(table => table.classList.remove('active'));
            recordListButtons.forEach(button => button.classList.remove('record-active'));

            const targetTable = recordTables[index];
            if (targetTable) {
                targetTable.classList.add('active');
                btn.classList.add('record-active');

                const category = btn.textContent.trim();
                const menuItems = allRecordsData[category].menu;
                renderMenu(menuItems, index);
            }
        });
    });

    recordListButtons[0].classList.add('record-active');
    recordTables[0].classList.add('active');
    const initialCategory = recordListButtons[0].textContent.trim();
    const initialMenuItems = allRecordsData[initialCategory].menu;
    renderMenu(initialMenuItems, 0);
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