// 헤더 시작 - 기서은 //

// 헤더 종료 - 기서은 //

// 인기게임 시작 - 박선정 //

// 인기게임 종료 - 박선정 //

// 신규게임 시작 - 박선정 //

// 신규게임 종료 - 박선정 //

// 추천게임 시작 - 김다훈 //

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
function autoSlide() {
  eventTimer = setInterval(() => {
    let nextIdx = (currentSlideIdx + 1) % slideCount;
    eventmoveSlide(nextIdx); // 다음 슬라이드
  }, 3000);
}
autoSlide(); //자동 슬라이드
// 슬라이드에 마우스가 올라간 경우 루프 멈춤
eventWrapper.addEventListener("mouseenter", () => {
  clearInterval(eventTimer);
});
// 슬라이드에 마우스가 나간 경우 루프 재 시작
eventWrapper.addEventListener("mouseleave", () => {
  autoSlide();
});

// 이벤트&공지사항 종료 - 김아름  //

// 푸터 시작 - 김아름 //

// 푸터 종료 - 김아름 //
