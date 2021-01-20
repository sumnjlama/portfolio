
$(window).on("scroll", function () {

    if ($(window).scrollTop() > 500) { // ON SCROLL
        $("#up-button").removeClass("hide-self");
        $("#up-button").addClass("show-self");
    }
    if ($(window).scrollTop() < 500) {
        $("#up-button").removeClass("show-self");
        $("#up-button").addClass("hide-self");
    }

}); 



// SHOW MOBILE NAV ON CLICK
function showNav() {
    $("#topbar-contents-mobile-navs-wrapper ").removeClass("mobile-nav-hide");
    $("#topbar-contents-mobile-navs-wrapper ").removeClass("mobile-nav-close");
    $("#topbar-contents-mobile-navs-wrapper ").addClass("mobile-nav-show");
}
// HIDE MOBILE NAV ON CLICK
function closeNav() {
    setTimeout(function () {
        $("#topbar-contents-mobile-navs-wrapper ").addClass("mobile-nav-hide");
    }, 700)
    $("#topbar-contents-mobile-navs-wrapper ").removeClass("mobile-nav-show");
    $("#topbar-contents-mobile-navs-wrapper ").addClass("mobile-nav-close");
}

// ANCHOR SCROLL WITH NAV
$('#topbar-contents-mobile-navs-wrapper #mobile-navs-menu a').on('click', function (event) {

    var $anchor = $(this);
    
        $('html, body').animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500);

    setTimeout(function () {
        $("#topbar-contents-mobile-navs-wrapper ").addClass("mobile-nav-hide");

    }, 700);
    $("#topbar-contents-mobile-navs-wrapper ").removeClass("mobile-nav-show");
    $("#topbar-contents-mobile-navs-wrapper ").addClass("mobile-nav-close");
    event.preventDefault();
});

$('#intro-section #intro-about-button a, #bio-section #to-skills-button-wrapper a').on('click', function (event) {

            var $anchor = $(this);
            $('html, body').animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 800);

    });