var scrollPosition = window.scrollY;
var navHeader = document.getElementById("navbar");

window.addEventListener('scroll', () => {
    scrollPosition = window.scrollY;

    if (scrollPosition > 150) {
        navHeader.classList.add("scroll");
    } else {
        navHeader.classList.remove("scroll");
    }
});