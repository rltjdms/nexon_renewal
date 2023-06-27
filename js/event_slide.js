// event pager 시작
let eventslide = document.querySelector("event-slide"), //ul
  eventslideList = eventslide.querySelectorAll("li"), //각 슬라이드
  eventDot = eventslide.querySelector(".event-dot"); //dot

currentIndex = 0; //현재이미지
slideCount = slides.length; // 이미지개수
dotIndex = "";
