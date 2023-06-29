// 헤더 시작 - 기서은 //
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
//배너 슬라이드
let headerSection = document.querySelector(".header_banner"),
    headerContent = headerSection.querySelector(".header_content"),
    headerSlide = headerSection.querySelectorAll(".header_slide"),
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

function moveSlide(num) {
    headerContent.style.left = `${num * -100}%`;
    headCurrentIndex = num;

    for (let headerpg of headerpagerBtn) {
        headerpg.classList.remove("active");
    }
    headerpagerBtn[headCurrentIndex].classList.add("active");
}
moveSlide(0);
headerpagerBtn.forEach((Btn, idx) => {
    Btn.addEventListener("click", (e) => {
        e.preventDefault();
        moveSlide(idx);
    });
});
function autoSlide() {
    timer = setInterval(()=> {
        let headerSlideNext = (headCurrentIndex + 1) % headCounter;
        moveSlide(headerSlideNext);
    },28000);
    //clearInterval(timer);
}
autoSlide();
console.log(headCurrentIndex);

//Quick
let aside = document.querySelector(".quick_box"),
    quickBtn = aside.querySelector(".quick_btt"),
    quickList = aside.querySelector(".quick_list");

quickBtn.addEventListener("click", () => {
    quickBtn.classList.toggle("on");
});
// 헤더 종료 - 기서은 //

// 인기게임 시작 - 박선정 //

/*
변수명 tabMenu에 리스트를 할당
*/
let pop_tabMenu = document.querySelectorAll('.pop_tab_menu li');
let pop_tabContent = document.querySelectorAll('#pop_tab_content > div')

/*
pop_tabMenu를 클릭하면 모든 pop_tabMenu에서 클래스명 active를 제거하고, 
클릭된 그 요소에만 active를 추가한다.
*/

pop_tabMenu.forEach(i=>{
  i.addEventListener('click',(e)=>{
    e.preventDefault();
    for(let list of pop_tabMenu){
      list.classList.remove('active');
    };
    e.currentTarget.classList.add('active');
    //모든 pop_tab_content는 보이지 않고, 아이디 tabs-pc 보이도록 display 속성을 block으로 변경
    let targetId = e.target.getAttribute('href');
    for(let content of pop_tabContent){
      content.style.display = 'none';
    }
    document.querySelector(targetId).style.display = 'block';
  });
});
// 인기게임 종료 - 박선정 //

// 신규게임 시작 - 박선정 //

// 신규게임 종료 - 박선정 //

// 추천게임 시작 - 김다훈 //

// 추천게임 종료 - 김다훈 //

// 이벤트&공지사항 시작 - 김아름 //

// 이벤트&공지사항 종료 - 김아름  //

// 푸터 시작 - 김아름 //

// 푸터 종료 - 김아름 //
