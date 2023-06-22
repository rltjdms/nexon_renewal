let header = document.querySelector("header"),
    headerSub = document.querySelectorAll("header_submenu"),
    headerSubOST = headerSub.offsetHeight,
    Nav = header.querySelector("nav"),
    NavMenu = Nav.querySelectorAll("nav > ul > li");

     NavMenu.forEach(item => {
      item.addEventListener("mouseenter", (e) => {
          e.preventDefault();
          let SubMenuHeight =
              e.Target.querySelector("ul").offsetHeight;
          let totalHeight = headerHeight + SubMenuHeight + 30;
          header.style.height = `${totalHeight}px`;

          item.classList.add("on");
      });
      item.addEventListener("mouseleave", (e) => {
          e.preventDefault();
          header.style.height = `${headerHeight}px`;

          item.classList.remove("on");
      });
    });
    // Nav에 마우스를 올리면 서브메뉴 나옴