/* 슬라이드 */
let recSlideWrapper = document.querySelector('.rec_slidewrapper'),
    recSlideContainer = recSlideWrapper.querySelectorAll('ul'),
    recHash = document.querySelectorAll('.rec_hash-list a'),
    recSlideWidth = 380,
    recSlideRemain = 142,      // left 이동 픽셀 설정
    recCurrentIndex = 0,       // 현재 보고있는 화면
    recSlideBtn = document.querySelector('.rec_slide-button'),
    recPrevBtn = recSlideBtn.querySelector('.prev'),
    recNextBtn = recSlideBtn.querySelector('.next');

recSlideContainer.forEach(item => {
    let slides = item.querySelectorAll('li');
    let slideCount = slides.length;
    slides.forEach(items => {
        item.style.width = `${recSlideWidth * slideCount - 10}px`;
        // 슬라이드 이동 함수 설정
        function moveSlide(num) {
            if(slideCount == 5) {
                item.style.left = `-${(2 * recSlideWidth - recSlideRemain) * num}px`;
            }else if (slideCount == 4) {
                item.style.left = `-${(recSlideWidth - recSlideRemain) * num}px`;
            }else{
                item.style.left = '71px'    // 게임 3개일 때 중앙으로
                recSlideBtn.classList.add()
            }
            recCurrentIndex = num;
        }
        // 해시태그 클릭할 때 마다 moveSlide(0) 실행
        recHash.forEach(element=>{
            element.addEventListener('click',()=>{
                moveSlide(0);
            })
        });
        // 슬라이드 이동 버튼 설정
        recNextBtn.addEventListener('click', e => {
            e.preventDefault();
            moveSlide(1);
        });
        recPrevBtn.addEventListener('click', e => {
            e.preventDefault();
            moveSlide(0);
        });
        moveSlide(0);
    });
});



// 해시태그 탭메뉴
let recContent = document.querySelectorAll('#rec_tab > ul');

recHash.forEach(item=> {
    item.addEventListener('click', e=> {
        e.preventDefault();
        let recTab = e.target.getAttribute('href');
        let recTabs = recTab.replace('#','');

        recContent.forEach(item=> {
            item.style.display = 'none'
        })

        document.getElementById(recTabs).style.display = 'block';

        recHash.forEach(item=> {
            item.classList.remove('active');
            e.target.classList.add('active');
        })
    })
});

document.getElementById('rec_tab-1').style.display = 'block';

// 모달
let recYoutube = document.querySelectorAll('.fa-youtube'),
    recLightbox = document.querySelector('#lightbox-overlay'),
    recLightboxLink = recLightbox.querySelector('#data-lightbox'),
    lightCloseBtn = document.querySelector('#lightbox-close');

recYoutube.forEach(item =>{
    item.addEventListener('click', e=>{
        e.preventDefault();
        let linkSrc = item.getAttribute('data-lightbox');
        recLightboxLink.setAttribute('src',linkSrc);
        recLightbox.classList.add('visible');
    });
});
lightCloseBtn.addEventListener('click', ()=>{
    recLightbox.classList.remove('visible');
});



// recLightboxLink.addEventListener('load', ()=>{
//     recImg.forEach(item =>{
//         item.addEventListener('click', ()=>{
//             let linkSrc = item.getAttribute('data-lightbox');
//             recLightboxLink.setAttribute('src',linkSrc);
//             recLightbox.classList.add('visible');
//         });
//     });
// })