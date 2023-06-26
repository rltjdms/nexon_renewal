/* 슬라이드 */


let slideWrapper = document.querySelector('.rec_slidewrapper'),
    slideContainer = slideWrapper.querySelectorAll('ul'),
    recHash = document.querySelectorAll('.rec_hash-list a'),
    slideWidth = 380,
    slideRemain = 142,      // left 이동 픽셀 설정
    currentIndex = 0,       // 현재 보고있는 화면
    slideBtn = document.querySelector('.rec_slide-button'),
    prevBtn = slideBtn.querySelector('.prev'),
    nextBtn = slideBtn.querySelector('.next');

slideContainer.forEach(item => {
    let slides = item.querySelectorAll('li');
    let slideCount = slides.length;
    slides.forEach(items => {
        item.style.width = `${slideWidth * slideCount - 10}px`;
        // 슬라이드 이동 함수 설정
        function moveSlide(num) {
            if(slideCount == 5) {
                item.style.left = `-${(2 * slideWidth - slideRemain) * num}px`;
            }else if (slideCount == 4) {
                item.style.left = `-${(slideWidth - slideRemain) * num}px`;
            }else{
                item.style.left = '71px'    // 게임 3개일 때 중앙으로
            }
            currentIndex = num;
        }
        // 해시태그 클릭할 때 마다 moveSlide(0) 실행
        recHash.forEach(element=>{
            element.addEventListener('click',()=>{
                moveSlide(0);
            })
        });
        // 슬라이드 이동 버튼 설정
        nextBtn.addEventListener('click', e => {
            e.preventDefault();
            moveSlide(1);
        });
        prevBtn.addEventListener('click', e => {
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
let recImg = document.querySelectorAll('.rec_slidewrapper img'),
    recLightbox = document.querySelector('#lightbox-overlay'),
    recLightboxLink = recLightbox.querySelector('#data-lightbox');

recImg.forEach(item =>{
    item.addEventListener('mouseenter', ()=>{
        let linkSrc = item.getAttribute('data-lightbox');
        recLightboxLink.setAttribute('src',linkSrc);
        recLightbox.classList.add('visible');
    });
});
recLightbox.addEventListener('mouseleave', ()=>{
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