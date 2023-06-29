// 헤더 시작 - 기서은 //

// 헤더 종료 - 기서은 //


// 인기게임 시작 - 박선정 //

// 인기게임 종료 - 박선정 //


// 신규게임 시작 - 박선정 //

// 신규게임 종료 - 박선정 //


// 추천게임 시작 - 김다훈 //
// 추천게임 - 슬라이드
let recSlideWrapper = document.querySelector('.rec_slidewrapper'),
    recSlideContainer = recSlideWrapper.querySelectorAll('ul'),
    recHash = document.querySelectorAll('.rec_hash-list a'),
    recSlideWidth = 380,
    recSlideRemain = 142,      // left 이동 픽셀 설정
    recCurrentIndex = 0,       // 현재 보고있는 화면
    recSlideBtn = document.querySelector('.rec_slide-button'),
    recBtnLink = recSlideBtn.querySelectorAll('a'),
    recPrevBtn = recSlideBtn.querySelector('.prev'),
    recNextBtn = recSlideBtn.querySelector('.next');

recSlideContainer.forEach(item => {
  let recSlides = item.querySelectorAll('li');
  let recSlideCount = recSlides.length;
  
    item.style.width = `${recSlideWidth * recSlideCount - 10}px`;
    // 슬라이드 이동 함수 설정
    function recMoveSlide(num) {
      if (recSlideCount == 5) {
        item.style.left = `-${(2 * recSlideWidth - recSlideRemain) * num}px`;
        recSlideBtn.style.display = 'block';
      } else if (recSlideCount == 4) {
        item.style.left = `-${(recSlideWidth - recSlideRemain) * num}px`;
        recSlideBtn.style.display = 'block';
      } else if (recSlideCount == 3) {
        item.style.left = '71px';    // 게임 3개일 때 중앙으로
        recSlideBtn.style.display = 'none';
      }
      recCurrentIndex = num;
    }
    // 해시태그 클릭할 때 마다 recMoveSlide(0) 실행
    recHash.forEach(element => {
      element.addEventListener('click', () => {
        recMoveSlide(0);
      });
    });
    // 슬라이드 이동 버튼 설정
    recNextBtn.addEventListener('click', e => {
      e.preventDefault();
      recMoveSlide(1);
    });
    recPrevBtn.addEventListener('click', e => {
      e.preventDefault();
      recMoveSlide(0);
    });
});

// 추천게임 - 해시태그 탭메뉴
recHash.forEach(item=> {
    item.addEventListener('click', e=> {
        e.preventDefault();
        let recTab = e.target.getAttribute('href');
        let recTabs = recTab.replace('#','');
        // 이전 슬라이드 안보이게 하기
        recSlideContainer.forEach(item=> {
            item.style.display = 'none'
        })

        let recSlide = document.getElementById(recTabs),
        recSlideList = recSlide.querySelectorAll('li'),
        recSlideLen = recSlideList.length;

        // 해시태그(#rec_tab-1)에서 # 제거된 ID(rec_tab-1)에 해당하는 slidewrapper 보여주기
        recSlide.style.display = 'block';

        // 게임 수 3개면 버튼 안보이게 하기
        if(recSlideLen == 3){
          recSlideBtn.style.display = 'none';
        }

        // 선택된 해시태그 스타일 속성 지정
        recHash.forEach(item=> {
            item.classList.remove('active');
            e.target.classList.add('active');
        })
    })
});

document.getElementById('rec_tab-1').style.display = 'block';

// 추천게임 - 모달
let recYoutube = document.querySelectorAll('.fa-youtube'),
    recLightbox = document.querySelector('#rec_lightbox-overlay'),
    recLightboxLink = recLightbox.querySelector('#data-lightbox'),
    recLightboxBg = document.querySelector('#rec_lightbox-background'),
    lightCloseBtn = document.querySelector('#rec_lightbox-close');

recYoutube.forEach(item =>{
    item.addEventListener('click', e=>{
        e.preventDefault();
        let linkSrc = item.getAttribute('data-lightbox');
        recLightboxLink.setAttribute('src',linkSrc);
        recLightbox.classList.add('visible');
        recLightboxBg.classList.add('visible');
    });
});
lightCloseBtn.addEventListener('click', ()=>{
    recLightbox.classList.remove('visible');
    recLightboxBg.classList.remove('visible');
});
// 추천게임 종료 - 김다훈 //


// 이벤트&공지사항 시작 - 김아름 //

// 이벤트&공지사항 종료 - 김아름  //


// 푸터 시작 - 김아름 //

// 푸터 종료 - 김아름 //