/* 슬라이드 */


let slideWrapper = document.querySelector('.slidewrapper'),                  // ul의 부모
    slideContainer = slideWrapper.querySelector('ul'),                    // ul
    slides = slideContainer.querySelectorAll('li'),                    // 각 슬라이드
    slideCount = slides.length,                    // 슬라이드 개수
    slideWidth = 380,
    slideRemain = 87,
    currentIndex = 0,                   // 현재 보고있는 화면
    slideBtn = document.querySelector('.rec_slide-button'),
    prevBtn = slideBtn.querySelector('.prev'),
    nextBtn = slideBtn.querySelector('.next');


// 슬라이드 가로배치

// slideContainer의 너비 지정
slideContainer.style.width = `${slideWidth * slideCount}px`;  // ul의 높이가 안나오므로 cf부여

function moveSlide(num){
    // slideContainer.style.left=`${-100*num}%`;
    slideContainer.style.left=`-${(2*slideWidth-slideRemain)*num}px`;
    currentIndex=num;
}

nextBtn.addEventListener('click', e=>{
    e.preventDefault();
    moveSlide(1);
});
prevBtn.addEventListener('click', e=>{
    e.preventDefault();
    moveSlide(0);
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