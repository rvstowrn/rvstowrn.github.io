$(document).ready(function(){
    $('.sidenav').sidenav();
    $('.fixed-action-btn').floatingActionButton();
    $('.carousel').carousel();
    $('.parallax').parallax();
	$('.tooltipped').tooltip();
    $('.scrollspy').scrollSpy();
});

const fab_btn = document.getElementById('fab_btn');
fab_btn.style.display = "none";
window.onscroll = ()=> {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        fab_btn.style.display = "unset";
    } else {
        fab_btn.style.display = "none";
    }
}