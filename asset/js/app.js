const navbarToggler = document.querySelector('.navbar-toggler');
const body = document.body;
const navbarCollapse = document.getElementById('collapsingNavbar');

// Remove the no-scroll class when the page loads
window.addEventListener('load', function () {
    body.classList.remove('no-scroll');
});

// Toggle the no-scroll class on the body when the navbar is toggled
navbarToggler.addEventListener('click', function () {
    // Check if the navbar is currently shown
    if (navbarCollapse.classList.contains('show')) {
        body.classList.remove('no-scroll');
    } else {
        body.classList.add('no-scroll');
    }
});

// Remove the no-scroll class when the navbar is closed
navbarCollapse.addEventListener('hidden.bs.collapse', function () {
    body.classList.remove('no-scroll');
});