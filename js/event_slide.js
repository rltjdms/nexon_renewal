// // event pager 시작
// let eventslide = document.querySelector("event-slide"), //ul
//   eventslideList = eventslide.querySelectorAll("li"), //각 슬라이드
//   eventDot = eventslide.querySelector(".event-dot"); //dot

// currentIndex = 0; //현재이미지
// slideCount = slides.length; // 이미지개수
// dotIndex = "";

let eventWrapper = document.querySelector(".event"), // event(부모)
  eventSlide = eventWrapper.querySelector(".event-slide"), //event ul
  eventslideList = eventSlide.querySelectorAll("li"); // 각 슬라이드
dotPager = eventWrapper.querySelector(".event-dot"); //dot버튼
(dotIndex = ""), (slideCount = slides.length), (currentSlideIdx = 0);

if (slideCount > 1) {
  eventslideList.forEach((item, idx) => {
    item.style.left = `${idx * 100}%`;
    //pager a 태그 생성
    dotIndex += `<a href="" class='dot'>${idx}</a>`;
  });
}

dotPager.innerHTML = dotIndex;
let dorbtn = dotPager.querySelectorAll("a");

function moveSlide(num) {
  slideContainer.style.left = `${-num * 100}%`;
  currentSlideIdx = num;
  console.log(currentSlideIdx);
