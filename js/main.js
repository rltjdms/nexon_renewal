
//인기게임
/*
변수명 tabMenu에 리스트를 할당
*/
let pop_tabMenu = document.querySelectorAll('.pop_tab_menu li');
let pop_tabContent = document.querySelectorAll('#pop_tab_content .tabs')

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

