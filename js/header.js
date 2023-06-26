let header = document.querySelector("header"),
    Nav = header.querySelector("nav"),
    NavMenu = Nav.querySelectorAll("nav > ul > li"),
    headerHeight = header.offsetHeight;

    NavMenu.forEach((item) => {
        item.addEventListener("mouseenter", (e) => {
            e.preventDefault();
            item.classList.add("on");

            let SubMenuHeight = e.currentTarget.querySelector("ul").offsetHeight;
            let headerSubheight =
                header.querySelector(".header_submenu").offsetHeight;
            let totalHeight = headerHeight + SubMenuHeight + headerSubheight + 30;
            header.style.height = `${totalHeight}px`;

            item.classList.add("on");
        });
        item.addEventListener("mouseleave", (e) => {
            e.preventDefault();
            item.classList.remove("on");

            header.style.height = `${headerHeight}px`;
        });
});
// Nav에 마우스를 올리면 서브메뉴 나옴

// 스크롤시
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        header.classList.add("active");
    } else {
        header.classList.remove("active");
    }
});
//헤더에 마우스를 올릴때 하얀색으로 바뀜

    header.addEventListener("mouseenter", () =>{
        header.classList.add("active");
    });
    header.addEventListener("mouseenter", (e) => {
        header.classList.remove("active");
    });
