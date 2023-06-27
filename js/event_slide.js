// event pager 시작
let eventslide = document.querySelector("event-slide"), //ul
  eventslideList = eventslide.querySelectorAll("li"), //li
  eventDot = eventslide.querySelector(".event-dot");
currentIndex = 0; //현재이미지
slideCount = slides.length; // 이미지개수
dotIndex = "";

//dot 클릭했을 때 이미지 이동
eventslide.querySelectorAll(".event_dot").forEach((dot, index) => {
  dot.addEventListener("click", () => {
    gotoSlider(index);
  });
});
