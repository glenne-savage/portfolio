// Shrink-Scroll Header
var header = document.querySelector('header');
var logo = document.querySelector('header h1 a');

window.addEventListener('scroll', function (){
    if (window.pageYOffset > 80) {
        header.classList += ' small-head';
        logo.classList += ' small-logo';
    } else {
        header.classList = '';
        logo.classList = '';
    }
});

// Footer Copyright Date
var year = new Date().getFullYear();
document.getElementById('copy-year').innerHTML = year;