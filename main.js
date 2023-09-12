$(document).ready(function() {
    $("#menu-toggle").click(function() {
        $("#sidebar").animate({
            right: '0px'
        }, 200);
    });

    $("#sidebar").click(function() {
        $("#sidebar").animate({
            right: '-250px'
        }, 200);
    });
});