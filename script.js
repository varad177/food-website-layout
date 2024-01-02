let nav = document.querySelector(".navigation-wrapper");

if (nav) {
  window.onscroll = function () {
    if (document.documentElement.scrollTop > 20) {
      nav.classList.add("scroll-on");
    } else {
      nav.classList.remove("scroll-on");
    }
  };
} else {
  console.error("Element with ID 'navigation-wrapper' not found.");
}

let navbar = document.querySelectorAll(".nav-link");

let navCollaps = document.querySelector(".navbar-collapse.collapse");

navbar.forEach(function (a) {
  a.addEventListener("click", () => {
    navCollaps.classList.remove("show");
  });
});
