// Intersection observer shows every target
// element in the page when is visible on screen
let observerOptions = {
    threshold: 1,
    rootMargin: '0px'
}

var observer = new IntersectionObserver(observerCallback, observerOptions);

function observerCallback(entries, observer) {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.toggle("is-visible")
            observer.unobserve(entry.target);
        }
    });
}

let target = ".observed";

document.querySelectorAll(target).forEach(i => {
    if (i) {
        observer.observe(i);
    }
})