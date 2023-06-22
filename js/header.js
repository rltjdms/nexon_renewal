let header = document.querySelector("header"),
    Nav = header.querySelector("nav"),
    NavMenu = Nav.querySelectorAll("nav > ul > li");

     NavMenu.forEach(item => {
      item.addEventListener("mouseenter", (e) => {
          e.preventDefault();
          item.classList.add("on");
      });
      item.addEventListener("mouseleave", (e) => {
          e.preventDefault();
          item.classList.remove("on");
      });
    });
    // Nav에 마우스를 올리면 서브메뉴 나옴