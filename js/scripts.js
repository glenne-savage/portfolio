// Shrink-Scroll Header
shrinkScroll();

function shrinkScroll() {
    // Variables to grab elements
    var header = document.querySelector('header');
    var logo = document.querySelector('header h1 a');
    var minMenu = document.querySelector('#menu-toggle');
    
    // Listen for page scroll and animate
    window.addEventListener('scroll', function (){
        if (window.pageYOffset > 80) {
            header.classList += ' small-head';
            logo.classList += ' small-logo';
            minMenu.style.top = '22%';
        } else {
            header.classList = '';
            logo.classList = '';
            minMenu.style.top = '';
        }
    });
}

// Jquery Scrolling
$(document).ready(function () {
    var scrollLink = $('.scroll');

    // Smooth Scrolling
    scrollLink.click(function (e) {
        e.preventDefault();
        $('body, html').animate({
            scrollTop: $(this.hash).offset().top
        }, 750);
    });

    // Active Link Switching
    $(window).scroll(function () {
        var scrollbarLocation = $(this).scrollTop();

        scrollLink.each(function () {
            var sectionOffset = $(this.hash).offset().top -65;

            if (sectionOffset <= scrollbarLocation) {
                $(this).parent().addClass('active');
                $(this).parent().siblings().removeClass('active');
            }
        });
    });

});



// Mobile Menu Animation
mobMenu();

function mobMenu() {
    // Variables to grab elements
    var menuToggle = document.querySelector('#menu-toggle');
    var navUl = document.querySelector('.flex-nav ul');
    var navLi = document.querySelectorAll('.flex-nav ul li');
   
    // Listen for click on menu
    menuToggle.addEventListener('click', openCloseMenu(), false);
    
    // Loop through menu list and listen for click to close menu
    for (var i = 0; i < navLi.length; i++) {
        navLi[i].addEventListener('click', openCloseMenu(), false);
    }

    // Animate mobile menu toggle
    function openCloseMenu() {
        return function() {
            menuToggle.classList.toggle('menu-toggle-open');
            navUl.classList.toggle('open');
        };
    }
}


// Footer Copyright Date
var year = new Date().getFullYear();
document.getElementById('copy-year').innerHTML = year;