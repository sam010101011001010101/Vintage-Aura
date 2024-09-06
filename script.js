// JavaScript for hiding the header on scroll
let lastScrollTop = 0;
const header = document.querySelector('header');
const headerHeight = header.offsetHeight;

window.addEventListener('scroll', function() {
    let currentScroll = window.pageYOffset || document.documentElement.scrollTop;

    if (currentScroll > lastScrollTop) {
        // Scrolling down
        header.style.top = `-${headerHeight}px`; // Hide the header by moving it up
    } else {
        // Scrolling up
        header.style.top = "0"; // Show the header
    }

    lastScrollTop = currentScroll <= 0 ? 0 : currentScroll; // For Mobile or negative scrolling
});
