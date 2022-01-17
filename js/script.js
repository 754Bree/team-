//When user scrolls page, execute myFunction
window.onscroll = function() {myFunction()};

//Get Navbar
var navbar = document.getElementById("navbar");

//Offset position of navbar
var sticky = navbar.offsetTop;

//Add sticky class to navbar when you reach its scroll position
function myFunction() {
    if (window.pageYOffset >= sticky) {
        navbar.classList.add("sticky")
    } else {
       navbar.classList.remove("sticky");
    }
}