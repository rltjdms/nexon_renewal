let header = document.querySelector('header'),
    Nav = header.querySelector('nav'),
    NavMenu = Nav.querySelectorAll('nav > ul > li'),
    NavSubmenu = Nav.querySelectorAll('.header_submenu');

     NavMenu.forEach(item => {
      item.addEventListener("mouseenter", (e) => {
          e.preventDefault();
          NavSubmenu.classList.add("on");
      });
      item.addEventListener("mouseleave", (e) => {
          e.preventDefault();
          NavSubmenu.classList.remove("on");
      });
    });