let eventWrapper = document.querySelector(".event"), // event(부모)
  eventSlide = eventWrapper.querySelector(".event-slide"), //event ul
  eventslideList = eventSlide.querySelectorAll("li"),
  // 각 슬라이드
  dotPager = eventWrapper.querySelector(".event-dot"), //dot버튼
  dotIndex = "", //닷버튼 공간
  eventTimer, //이벤트 시간
  slideCount = eventslideList.length, //슬라이드 개수
  currentSlideIdx = 0; // 보고있는 화면

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
  // 모든 페이저에서 active를 제거하고, 현재 슬라이드번호의 dot버튼에 active 추가
  for (let db of dotbtn) {
    db.classList.remove("active");
  }
  dotbtn[currentSlideIdx].classList.add("active");
}
eventmoveSlide(1);

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
