// 헤더 시작 - 기서은 //

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