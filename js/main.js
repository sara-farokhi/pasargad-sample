// PERSIAN DATE

getPersianDate = (format) => {
  let week = new Array(
    "يكشنبه",
    "دوشنبه",
    "سه شنبه",
    "چهارشنبه",
    "پنج شنبه",
    "جمعه",
    "شنبه"
  );
  let months = new Array(
    "فروردين",
    "ارديبهشت",
    "خرداد",
    "تير",
    "مرداد",
    "شهريور",
    "مهر",
    "آبان",
    "آذر",
    "دي",
    "بهمن",
    "اسفند"
  );
  let today = new Date();
  let d = today.getDay();
  let day = today.getDate();
  let month = today.getMonth() + 1;
  let year = today.getYear();
  year = window.navigator.userAgent.indexOf("MSIE") > 0 ? year : 1900 + year;
  if (year == 0) {
    year = 2000;
  }
  if (year < 100) {
    year += 1900;
  }
  y = 1;
  for (i = 0; i < 3000; i += 4) {
    if (year == i) {
      y = 2;
    }
  }
  for (i = 1; i < 3000; i += 4) {
    if (year == i) {
      y = 3;
    }
  }
  if (y == 1) {
    year -= month < 3 || (month == 3 && day < 21) ? 622 : 621;
    switch (month) {
      case 1:
        day < 21 ? ((month = 10), (day += 10)) : ((month = 11), (day -= 20));
        break;
      case 2:
        day < 20 ? ((month = 11), (day += 11)) : ((month = 12), (day -= 19));
        break;
      case 3:
        day < 21 ? ((month = 12), (day += 9)) : ((month = 1), (day -= 20));
        break;
      case 4:
        day < 21 ? ((month = 1), (day += 11)) : ((month = 2), (day -= 20));
        break;
      case 5:
      case 6:
        day < 22 ? ((month -= 3), (day += 10)) : ((month -= 2), (day -= 21));
        break;
      case 7:
      case 8:
      case 9:
        day < 23 ? ((month -= 3), (day += 9)) : ((month -= 2), (day -= 22));
        break;
      case 10:
        day < 23 ? ((month = 7), (day += 8)) : ((month = 8), (day -= 22));
        break;
      case 11:
      case 12:
        day < 22 ? ((month -= 3), (day += 9)) : ((month -= 2), (day -= 21));
        break;
      default:
        break;
    }
  }
  if (y == 2) {
    year -= month < 3 || (month == 3 && day < 20) ? 622 : 621;
    switch (month) {
      case 1:
        day < 21 ? ((month = 10), (day += 10)) : ((month = 11), (day -= 20));
        break;
      case 2:
        day < 20 ? ((month = 11), (day += 11)) : ((month = 12), (day -= 19));
        break;
      case 3:
        day < 20 ? ((month = 12), (day += 10)) : ((month = 1), (day -= 19));
        break;
      case 4:
        day < 20 ? ((month = 1), (day += 12)) : ((month = 2), (day -= 19));
        break;
      case 5:
        day < 21 ? ((month = 2), (day += 11)) : ((month = 3), (day -= 20));
        break;
      case 6:
        day < 21 ? ((month = 3), (day += 11)) : ((month = 4), (day -= 20));
        break;
      case 7:
        day < 22 ? ((month = 4), (day += 10)) : ((month = 5), (day -= 21));
        break;
      case 8:
        day < 22 ? ((month = 5), (day += 10)) : ((month = 6), (day -= 21));
        break;
      case 9:
        day < 22 ? ((month = 6), (day += 10)) : ((month = 7), (day -= 21));
        break;
      case 10:
        day < 22 ? ((month = 7), (day += 9)) : ((month = 8), (day -= 21));
        break;
      case 11:
        day < 21 ? ((month = 8), (day += 10)) : ((month = 9), (day -= 20));
        break;
      case 12:
        day < 21 ? ((month = 9), (day += 10)) : ((month = 10), (day -= 20));
        break;
      default:
        break;
    }
  }
  if (y == 3) {
    year -= month < 3 || (month == 3 && day < 21) ? 622 : 621;
    switch (month) {
      case 1:
        day < 20 ? ((month = 10), (day += 11)) : ((month = 11), (day -= 19));
        break;
      case 2:
        day < 19 ? ((month = 11), (day += 12)) : ((month = 12), (day -= 18));
        break;
      case 3:
        day < 21 ? ((month = 12), (day += 10)) : ((month = 1), (day -= 20));
        break;
      case 4:
        day < 21 ? ((month = 1), (day += 11)) : ((month = 2), (day -= 20));
        break;
      case 5:
      case 6:
        day < 22 ? ((month -= 3), (day += 10)) : ((month -= 2), (day -= 21));
        break;
      case 7:
      case 8:
      case 9:
        day < 23 ? ((month -= 3), (day += 9)) : ((month -= 2), (day -= 22));
        break;
      case 10:
        day < 23 ? ((month = 7), (day += 8)) : ((month = 8), (day -= 22));
        break;
      case 11:
      case 12:
        day < 22 ? ((month -= 3), (day += 9)) : ((month -= 2), (day -= 21));
        break;
      default:
        break;
    }
  }
  if (format === null || format === undefined)
    return `${week[d]} ${day.toLocaleString("fa-ir")} ${
      months[month - 1]
    } ${year.toLocaleString("fa-ir").replace(/\٬/g, "")}`;
  if (format === "y/m/d") return `${year}/${month}/${day}`;
  if (format === "d/m/y") return `${day}/${month}/${year}`;
};
//   console.log(getPersianDate());
//   console.log(getPersianDate("y/m/d"));
//   console.log(getPersianDate("d/m/y"))
let today = new Date().toLocaleDateString("fa-IR");
console.log(today);
document.querySelector(".date").innerHTML = getPersianDate();

$(function () {
  // menu
  $(".slide-menu").click(function (e) {
    e.preventDefault();
  });

  // menu sections slides
  const sections = Array.from($(".section"));
  const slideMenus = Array.from($(".slide-menu"));
  for (section of sections) {
    $(section).hide();
  }
  slideMenus.forEach(function (slideMenu, i) {
    slideMenu.addEventListener("click", function () {
      $(this).siblings().removeClass("down-arrow");
      $(this).toggleClass("down-arrow");
      $(sections[i]).siblings(".section").slideUp(300);
      $(sections[i]).slideToggle(300);
    });
  });

  // submenu handler
  const hasSubMenu = Array.from($(".has-submenu"));
  const nullSubMenues = Array.from($(".submenu-null"));
  // console.log(nullSubMenu)
  const subMenu2 = Array.from($(".sub-menu-2"));

  subMenu2.forEach((submenu) => {
    $(submenu).hide();
  });
  hasSubMenu.forEach((menu, i) => {
    $(menu).hover(function () {
      $(subMenu2[i]).siblings().hide();
      $(subMenu2[i]).show();
    });
  });

  nullSubMenues.forEach((nullSubMenu) => {
    $(nullSubMenu).hover(function () {
      subMenu2.forEach((submenu) => {
        $(submenu).hide();
      });
    });
  });

  // slider

  $(".owl-carousel").owlCarousel({
    loop: true,
    items: 1,
    nav: false,
    rtl: true,
    autoplay: true,
    // autoWidth: true,
    responsive: {
      0: {
        items: 1,
      },
      600: {
        items: 1,
      },
      1000: {
        items: 1,
      },
    },
    navText: ["", ""],
  });

  // Tab Menu

  $(function () {
    $(".tabs li").removeClass(".active");
    const tabs = [...$(".tabs li")];
    const sections = [...$(".part")];
    tabs.forEach(function (elm, i) {
      $(elm).click(function () {
        $(this).siblings("li").removeClass("active");
        $(this).addClass("active");
        $(sections[i]).siblings(".part").hide();
        $(".first").hide();
        $(sections[i]).show();
      });
    });
  });
});

// BUTTOM-SLISDER

$(".owl-two").owlCarousel({
  loop: true,
  items: 5,
  nav: false,
  rtl: true,
  dots: false,
  autoplay: true,
  responsive: {
    0: {
      items: 1,
    },
    600: {
      items: 3,
    },
    1000: {
      items: 5,
    },
  },
});
