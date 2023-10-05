// 팝업 시작 - 김아름 //
// 팝업창
let popup = document.querySelector("dialog"),
  popupClose = popup.querySelector(".close"),
  dayCheck = document.querySelector("#todayView");

//쿠키설정 24시간
function setCookie(name, value, day) {
  let date = new Date();
  date.setDate(date.getDate() + day);
  document.cookie = `${name}=${value};expires=
    ${date.toUTCString()}`;

}

//쿠키 가져오기
function checkCookie(name) {
  let cookieArr = document.cookie.split(";");
  let visited = false;

  for (let cookie of cookieArr) {
    if (cookie.search(name) > -1) {
      visited = true;
      break;
    }
  }
  if (!visited) {
    popup.setAttribute("open", "");
  }
}

//X버튼 클릭하면 닫기
checkCookie("nexonss");
popupClose.addEventListener("click", () => {
  if (dayCheck.checked) {
    setCookie("nexonss", "home", 1);
  } else {
    //setCookie("nexonss", "home", -1);
  }
  popup.removeAttribute("open");
});

// 팝업 종료 - 김아름 //


// 헤더 시작 - 기서은 //
// 헤더 시작 - 기서은 //
let header = document.querySelector("header"),
    Nav = header.querySelector("nav"),
    NavMenu = Nav.querySelectorAll("nav > ul > li"),
    //NavMenuCounter =  NavMenu.length,
    headerTabmenu = Nav.querySelectorAll(".header_all_tab_menu > li"),
    headerTabId = Nav.querySelectorAll(".header_all_tab_content > div");
// headerHeight = header.offsetHeight;

NavMenu.forEach(item => {
    item.addEventListener("mouseenter", (e) => {
        e.preventDefault();
        item.classList.add("on");

    });
    item.addEventListener("mouseleave", (e) => {
        e.preventDefault();
        item.classList.remove("on");

        // header.style.height = `${headerHeight}px`;
    });
});
// Nav에 마우스를 올리면 서브메뉴 나옴


headerTabmenu.forEach((item, idx) => {
    item.addEventListener("click", (e) => {
        e.preventDefault();
        // item.classList.toggle("on");
        for(let hederTabsub of headerTabmenu) {
          hederTabsub.classList.remove("on");
        }
        e.currentTarget.classList.add("on");

        for (hdTabId of headerTabId) {
            hdTabId.style.display = "none";
            //tc.style.display = 'none';
        }
        //tabContent[idx].style.display ='block';
        headerTabId[idx].style.display = "block";
    });
});//header tab menu click 

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
//배너 슬라이드
let headerSection = document.querySelector(".header_banner"),
    headerContent = headerSection.querySelector(".header_content"),
    headerSlide = headerSection.querySelectorAll(".header_slide"),
    headerVedio =  headerSection.querySelectorAll("video"),
    headerpager = headerSection.querySelector(".heade_pager"),
    headerpagerHtml = "",
    headCounter = headerSlide.length,
    headCurrentIndex = 0;

if (headCounter > 0) {
    headerSlide.forEach((list, idx) => {
        list.style.left = `${idx * 100}%`;
        headerpagerHtml += `<a href="">${idx}</a>`;
    });
}
headerpager.innerHTML = headerpagerHtml;
let headerpagerBtn = headerpager.querySelectorAll("a");

function head_moveSlide(num) {
    headerContent.style.left = `${num * -100}%`;
    headCurrentIndex = num;

    for (let headerpg of headerpagerBtn) {
        headerpg.classList.remove("active");
    }
    headerpagerBtn[headCurrentIndex].classList.add("active");

    for(let hdvd of headerVedio) {
      hdvd.pause();
      hdvd.currentTime = 0;
    }
    let headslideVideo = headerSlide[headCurrentIndex].querySelectorAll('video');
    if (headslideVideo .length > 0) {
       headslideVideo [0].play();
    }
  }
head_moveSlide(0);

headerpagerBtn.forEach((Btn, idx) => {
    Btn.addEventListener("click", (e) => {
        e.preventDefault();
        head_moveSlide(idx);
    });
});
function head_autoSlide() {
    head_timer = setInterval(() => {
        let headerSlideNext = (headCurrentIndex + 1) % headCounter;
        head_moveSlide(headerSlideNext);
    }, 27000);
    //clearInterval(timer);
}
head_autoSlide();

//pc방 on off
let headRIght = document.querySelector(".header_right"),
    headpcBtn = headRIght.querySelector(".header_onoff"); 

    headpcBtn.addEventListener("click", () => {
      headpcBtn.classList.toggle("active");
    });
//Quick
let aside = document.querySelector(".quick_box"),
    quickBtn = aside.querySelector(".quick_btt"),
    quickList = aside.querySelector(".quick_list");

quickBtn.addEventListener("click", () => {
    quickBtn.classList.toggle("on");
});
// 헤더 종료 - 기서은 //

// 인기게임 시작 - 박선정 //
let pop_tabMenu = document.querySelectorAll('.pop_tab_menu li');
let pop_tabContent = document.querySelectorAll('.pop_tab_content .tabs');

function activeTab(num){
  for(let list of pop_tabMenu){
    list.classList.remove('active');
  };
  pop_tabMenu[num].classList.add('active');

  for(let content of pop_tabContent){
    content.classList.remove('active');
  };
  pop_tabContent[num].classList.add('active');
};

pop_tabMenu.forEach((item,index)=>{
  item.addEventListener('click', e=>{
    e.preventDefault();
    activeTab(index);
  })
});

activeTab(0);



// 인기게임 종료 - 박선정 //

// 신규게임 시작 - 박선정 //

// 신규게임 종료 - 박선정 //

// 추천게임 시작 - 김다훈 //
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
let eventWrapper = document.querySelector(".event"), // event(부모)
  eventSlide = eventWrapper.querySelector(".event-slide"), //event ul
  eventslideList = eventSlide.querySelectorAll("li"),
  // 각 슬라이드
  dotPager = eventWrapper.querySelector(".event-dot"), //dot버튼
  dotIndex = "", //닷버튼 공간
  eventTimer, //이벤트 시간
  //   eventSlideWidth = eventslideList.offsetWidth,
  slideCount = eventslideList.length, //이벤트 슬라이드 개수
  currentSlideIdx = 0; // 보고있는 이벤트 화면

if (slideCount > 1) {
  eventslideList.forEach((item, idx) => {
    item.style.left = `${idx * 100}%`;
    dotIndex += `<a href="">${idx}</a>`; //dot버튼 생성
  });
}
dotPager.innerHTML = dotIndex;
let dotbtn = dotPager.querySelectorAll("a");
function eventmoveSlide(num) {
  eventSlide.style.left = `${-num * 100}%`;
  currentSlideIdx = num;
  // console.log(currentSlideIdx);
  for (let es of eventslideList) {
    es.classList.remove("active");
  }
  eventslideList[currentSlideIdx].classList.add("active");
  for (let db of dotbtn) {
    db.classList.remove("active");
  }
  dotbtn[currentSlideIdx].classList.add("active");
}
eventmoveSlide(0);
dotbtn.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    eventmoveSlide(idx);
  });
});
// 이벤트 슬라이드 루프 시작하기
function event_autoSlide() {
  eventTimer = setInterval(() => {
    let nextIdx = (currentSlideIdx + 1) % slideCount;
    eventmoveSlide(nextIdx); // 다음 슬라이드
  }, 3000);
}
event_autoSlide(); //자동 슬라이드
// 슬라이드에 마우스가 올라간 경우 루프 멈춤
eventWrapper.addEventListener("mouseenter", () => {
  clearInterval(eventTimer);
});
// 슬라이드에 마우스가 나간 경우 루프 재 시작
eventWrapper.addEventListener("mouseleave", () => {
  event_autoSlide();
});
// 이벤트&공지사항 종료 - 김아름  //

// 퀵메뉴 시작 - 기서은 //
window.addEventListener("scroll", () => {
  popGame= document.querySelector('.pop_tab_wrapper');
  popGameTop = popGame.offsetTop;
  scroll = window.scrollY;
  ftGame= document.querySelector('footer');
  ftGameTop = ftGame.offsetTop;

  if (scroll > popGameTop - 700 && scroll < ftGameTop - 700) {
    aside.classList.remove("fixed");
  } else {
    aside.classList.add("fixed");
  }
});
// 퀵메뉴 종료 - 기서은 //

// 푸터 시작 - 김아름 //

// 푸터 종료 - 김아름 //

// 다크모드 시작 //
let darkcheck = document.querySelector(".quick_box");
let darkcheckbox = darkcheck.querySelector("#quick_toggle");
let darkBtn = darkcheck.querySelector("#darkBtn");
let body = document.querySelector("body");
darkBtn.addEventListener("click", ()=> {
    body.classList.toggle("dark-active");
  });
// 다크모드 종료 //