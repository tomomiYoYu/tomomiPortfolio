const navBtn = document.getElementById("navBtn");
const header__nav = document.getElementById("header__nav");

navBtn.addEventListener(
  "click",
  function () {
    if (navBtn.innerText === "Menu") {
      navBtn.innerText = "Close";
      header__nav.classList.add("is__active");
    } else {
      navBtn.innerText = "Menu";
      header__nav.classList.remove("is__active");
      window.onresize = function () {
        let windowSize = window.innerWidth;
        if (windowSize < 600) {
          header__nav.classList.remove("is__active");
        }
      };
    }
  },
  false
);
