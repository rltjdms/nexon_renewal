/* 슬라이드 */


let slideWrapper = document.querySelector('.rec_slidewrapper'),
    slideContainer = slideWrapper.querySelectorAll('ul'),
    slideWidth = 380,
    slideRemain = 142,      // left 이동 픽셀 설정
    currentIndex = 0,                   // 현재 보고있는 화면
    slideBtn = document.querySelector('.rec_slide-button'),
    prevBtn = slideBtn.querySelector('.prev'),
    nextBtn = slideBtn.querySelector('.next');

slideContainer.forEach(item => {
    let slides = item.querySelectorAll('li');
    let slideCount = slides.length;
    slides.forEach(items => {
        item.style.width = `${slideWidth * slideCount - 10}px`;

        function moveSlide(num) {
            if(slideCount == 5) {
                item.style.left = `-${(2 * slideWidth - slideRemain) * num}px`;
            }else if (slideCount == 4) {
                item.style.left = `-${(slideWidth - slideRemain) * num}px`;
            }else{
                item.style.left = '71px'    // 게임 3개일 때 중앙으로
            }
            currentIndex = num;
        }

        nextBtn.addEventListener('click', e => {
            e.preventDefault();
            moveSlide(1);
        });
        prevBtn.addEventListener('click', e => {
            e.preventDefault();
            moveSlide(0);
        });
        moveSlide(0);
    });
});



// 해시태그 탭메뉴
let recHash = document.querySelectorAll('.rec_hash-list a');
let recContent = document.querySelectorAll('#rec_tab > ul');

recHash.forEach(item=> {
    item.addEventListener('click', e=> {
        e.preventDefault();
        let recTab = e.target.getAttribute('href');
        let recTabs = recTab.replace('#','');

        recContent.forEach(item=> {
            item.style.display = 'none'
        })

        document.getElementById(recTabs).style.display = 'block';

        recHash.forEach(item=> {
            item.classList.remove('active');
            e.target.classList.add('active');
        })
    })
});

document.getElementById('rec_tab-1').style.display = 'block';