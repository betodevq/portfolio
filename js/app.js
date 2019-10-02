const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");
const links = document.querySelectorAll(".nav-links li");
const navBar = document.querySelector(".nav-bar");
const sticky = navBar.offsetTop;
var navHeight = $('.nav-bar').outerHeight();

function toggleHamburger(){
    navLinks.classList.toggle("open");
    links.forEach(link => {
        link.classList.toggle('fade');
    });
}

hamburger.addEventListener('click',toggleHamburger);

$('.smooth').click(function(){
    toggleHamburger();
    $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top - navHeight
    }, 500);
    return false;
});