const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const navBar = document.querySelector(".nav-bar");
const sticky = navBar.offsetTop;
const navHeight = $('.nav-bar').outerHeight();
const openNav = document.querySelector(".open-nav");
var open = false;

function toggleHamburger() {
    if (open){
        openNav.style.opacity = 0;
        openNav.style.width = 0;
        navLinks.style.width = '0';
        open = false;
    } else {
        openNav.style.opacity = 1;
        openNav.style.width = '100%';
        navLinks.style.width = "250px";
        open = true;
    }
    links.forEach(link => {
        link.classList.toggle('fade');
    });
}

hamburger.addEventListener('click', toggleHamburger);
openNav.addEventListener('click', toggleHamburger);

$('.smooth').click(function () {
    toggleHamburger();
    $('html, body').animate({
        scrollTop: $($.attr(this, 'href')).offset().top - navHeight
    }, 500);
    return false;
});

function getResolution() {
    let test = document.querySelector('.text');
    test.textContent = "Your screen resolution is: " + screen.width + "x" + screen.height;
}

getResolution();