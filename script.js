window.onscroll = function() {scrollHeader()}

var header = document.getElementById("header-top");
var sticky = header.clientHeight;

function scrollHeader() {
    // console.log('window.pageYOffset',window.pageYOffset, 'sticky',sticky)
    if (window.pageYOffset > sticky) {
        header.classList.add("sticky");
    } else {
        header.classList.remove("sticky");
    }
}