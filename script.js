
window.addEventListener('load', function () {
    window.location.hash = '';
    window.scrollTo(0, 0);
});


document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.querySelector('.menu-icon'); 
    const navLinks = document.querySelector('.nav-links ul'); 
    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('active'); 
    });
});

