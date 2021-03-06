var header = document.getElementById("header");
    var mobileMenu = document.getElementById("mobile-menu");
    var headerHeight = header.clientHeight;

    // Open, Close Menu
    mobileMenu.onclick = () => {
      var isClosed = header.clientHeight === headerHeight;
      if (isClosed) {
        header.style.height = "auto";
      } else {
        header.style.height = null;
      }
    };

    //  Tự động đóng khi chọn menu
    var menuItems = document.querySelectorAll(' #nav li a[href *="#" ] ');
    for (var i = 0; i < menuItems.length; i++) {
      var menuItem = menuItems[i];

      menuItem.onclick = (event) => {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu){
          event.prevenDefault();
        } else {
          header.style.height = null;
        }
      }
    }