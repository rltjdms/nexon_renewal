let header = document.querySelector("header"),
    Nav = header.querySelector("nav"),
    NavMenu = Nav.querySelectorAll("nav > ul > li");
// headerHeight = header.offsetHeight;

NavMenu.forEach((item) => {
    item.addEventListener("mouseenter", (e) => {
        e.preventDefault();
        item.classList.add("on");

        // let SubMenuHeight = e.currentTarget.querySelector("ul").offsetHeight;
        // let totalHeight = headerHeight + SubMenuHeight + 30;
        // header.style.height = `${totalHeight}px`;

        item.classList.add("on");
    });
    item.addEventListener("mouseleave", (e) => {
        e.preventDefault();
        item.classList.remove("on");

        // header.style.height = `${headerHeight}px`;
    });
});
// Nav에 마우스를 올리면 서브메뉴 나옴

//스크롤시
let scroll = 0;
window.addEventListener("scroll", () => {
    scroll = window.scrollY;
    if (scroll > 0) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
    // console.log(scroll);
});

//헤더에 마우스를 올릴때 하얀색으로 바뀜

header.addEventListener("mouseenter", () => {
    if (scroll == 0) {
        header.classList.add("active");
    }
    //꼭대기 일때만...
});
header.addEventListener("mouseleave", (e) => {
    if (scroll == 0) {
        header.classList.remove("active");
    }
    //꼭대기 일때만...
});
header.addEventListener("mouseleave", (e) => {
    if (scroll == 0) {
        header.classList.remove("active");
    }
});


// 추천게임

/* 슬라이드 */
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
  
  recSlides.forEach(items => {
    item.style.width = `${recSlideWidth * recSlideCount - 10}px`;
    // 슬라이드 이동 함수 설정
    function recMoveSlide(num) {
      if (recSlideCount == 5) {
        item.style.left = `-${(2 * recSlideWidth - recSlideRemain) * num}px`;
      } else if (recSlideCount == 4) {
        item.style.left = `-${(recSlideWidth - recSlideRemain) * num}px`;
      } else if (recSlideCount == 3) {
        item.style.left = '71px';    // 게임 3개일 때 중앙으로
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

  // 좌우 이동 버튼 display 설정
  if (recSlideCount == 3) {
    recSlideBtn.style.display = 'none';
  } else {
    recSlideBtn.style.display = 'block';
  }
});

// 해시태그 탭메뉴
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

// 모달
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
