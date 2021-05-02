// nav  bar on scroll

let mynav = document.querySelector("nav");
let li = mynav.querySelectorAll("li");

if (window.innerWidth > 600) {
  window.onscroll = function () {
    if (
      document.body.scrollTop >= 1 ||
      document.documentElement.scrollTop >= 1
    ) {
      mynav.classList.add("black");
    } else {
      mynav.classList.remove("black");
    }
    if (
      document.documentElement.scrollTop >= 0 &&
      document.documentElement.scrollTop <= 500
    ) {
      li[0].classList.add("active");
    } else if (
      document.documentElement.scrollTop >= 600 &&
      document.documentElement.scrollTop <= 1000
    ) {
      li[1].classList.add("active");
    } else if (
      document.documentElement.scrollTop >= 1105 &&
      document.documentElement.scrollTop <= 2500
    ) {
      li[2].classList.add("active");
    } else if (
      document.documentElement.scrollTop >= 2600 &&
      document.documentElement.scrollTop <= 3300
    ) {
      li[3].classList.add("active");
    } else {
      for (let i = 0; i < li.length; i++) {
        li[i].classList.remove("active");
      }
    }
  };
}

//Mobile Nav Bar

let tog = document.querySelector(".icon");

tog.addEventListener("click", function () {
  for (let i = 0; i < li.length; i++) {
    li[i].classList.toggle("vanish");
  }
});

let ico = document.querySelector(".icon");
ico.addEventListener("click", function () {
  ico.classList.toggle("active");
});
