// // event pager 시작
// let eventslide = document.querySelector("event-slide"), //ul
//   eventslideList = eventslide.querySelectorAll("li"), //각 슬라이드
//   eventDot = eventslide.querySelector(".event-dot"); //dot

// currentIndex = 0; //현재이미지
// slideCount = slides.length; // 이미지개수
// dotIndex = "";

let eventWrapper = document.querySelector(".event"), // event(부모)
  eventSlide = eventWrapper.querySelector(".event-slide"), //event ul
  eventslideList = eventSlide.querySelectorAll("li"),
  // 각 슬라이드
  dotPager = eventWrapper.querySelector(".event-dot"), //dot버튼
  dotIndex = "",
  eventTimer,
  slideCount = eventslideList.length,
  currentSlideIdx = 0;

if (slideCount > 1) {
  eventslideList.forEach((item, idx) => {
    item.style.left = `${idx * 100}%`;
    //pager a 태그 생성
    dotIndex += `<a href="">${idx}</a>`;
  });
}

dotPager.innerHTML = dotIndex;
let dotbtn = dotPager.querySelectorAll("a");

function eventmoveSlide(num) {
  eventSlide.style.left = `${-num * 100}%`;
  currentSlideIdx = num;
  console.log(currentSlideIdx);

  for (let es of eventslideList) {
    es.classList.remove("active");
  }
  eventslideList[currentSlideIdx].classList.add("active");
  // 모든 페이저에서 active를 제거하고, 현재 슬라이드번호의 pager에 active 추가
  for (let db of dotbtn) {
    db.classList.remove("active");
  }
  dotbtn[currentSlideIdx].classList.add("active");
} //moveslide
eventmoveSlide(0);

dotbtn.forEach((item, idx) => {
  item.addEventListener("click", (e) => {
    e.preventDefault();
    eventmoveSlide(idx);
  });
});

function autoSlide() {
  eventTimer = setInterval(() => {
    //let nextIdx = currentSlideIdx + 1;
    let nextIdx = (currentSlideIdx + 1) % slideCount;
    eventmoveSlide(nextIdx);
  }, 3000);
}
autoSlide();

eventWrapper.addEventListener("mouseenter", () => {
  clearInterval(eventTimer);
});
eventWrapper.addEventListener("mouseleave", () => {
  autoSlide();
});
