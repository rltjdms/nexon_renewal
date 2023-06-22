/* 슬라이드 */
/*
    첫 슬라이드에서 이전 버튼을 클릭하면 마지막 슬라이드로 이동
    마지막 슬라이드에서다음 버튼을 클릭하면 첫 슬라이드로 이동
*/

let slideWrapper = document.querySelector('.slidewrapper'),                  // ul의 부모
    slideContainer = slideWrapper.querySelector('ul'),                    // ul
    slides = slideContainer.querySelectorAll('li'),                    // 각 슬라이드
    slideCount = slides.length,                    // 슬라이드 개수
    slideWidth = slides[0].offsetWidth,
    currentIndex = 0,                   // 현재 보고있는 화면
    prevBtn = slideWrapper.querySelector('.prev'),
    nextBtn = slideWrapper.querySelector('.next');


// 슬라이드 가로배치

// slideContainer의 너비 지정
slideContainer.style.width = `${slides[0].offsetWidth * slideCount}px`;  // ul의 높이가 안나오므로 cf부여

// 슬라이드 이동 함수 moveSlide
// function moveSlide(num){
//     slideContainer.style.left=`${-100*num}%`;
//     currentIndex=num;
// }

function moveSlide(num){
    // slideContainer.style.left=`${-100*num}%`;
    // slideContainer.style.left=`${-slideWidth*num}px`;
    slideContainer.style.left=`${-slideWidth*num}px`;

    currentIndex=num;
}

nextBtn.addEventListener('click', e=>{
    e.preventDefault();
    // moveSlide(Math.floor(slideCount/4));
    moveSlide(1)
});
prevBtn.addEventListener('click', e=>{
    e.preventDefault();
    // moveSlide(Math.floor(slideCount/4-1));
    moveSlide(0)
});

let qnaList = document.querySelectorAll('.qna_list li');