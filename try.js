// FLOATING NAV FOR SMALL DEVICES TOGGLE ON SCROLL
// function hideTopSect() {

//     if (window.innerHeight < 992) {
//         if (window.scrollTop > 20) { // ON SCROLL
//             document.getElementById("topbar-contents-ham-wrapper").setAttribute("style", "position: fixed; z-index: 3000;"); //NAV CSS
//             // $("#topbar-contents-ham-wrapper").css({
//             //     "position": "fixed",
//             //     "z-index": "3000",
//             // });
//             document.getElementById("logo").setAttribute("style", "display:none;");
//             // $("#logo").css({
//             //     "display": "none",

//             // });
//             console.log("works");

//         } else if (window.scrollTop < 100) {
//             document.getElementById("topbar-contents-ham-wrapper").setAttribute("style", "position: relative; z-index: 3000;");// ON SCROLL //NAV CSS
//             // $("#topbar-contents-ham-wrapper").css({ 
//             //     "position": "relative",
//             // }); 
//             document.getElementById("logo").setAttribute("style", "display:block;");
//             // $("#logo").css({
//             //     "display": "block",
//             // })
//             console.log("doesn't works");

//         }
//     };
// };

// $(window).scroll (hideTopSect());
$(window).on("scroll", function () {

    if ($(window).scrollTop() > 500) { // ON SCROLL
        $("#up-button").removeClass("hide-self");
        $("#up-button").addClass("show-self");
    }
    if ($(window).scrollTop() < 500) {
        $("#up-button").removeClass("show-self");
        $("#up-button").addClass("hide-self");
    }

}); //{{

//     if (window.innerHeight < 992) {
//         if ($(window).scrollTop() > 20) { // ON SCROLL
//             $("#topbar-contents-ham-wrapper").css({ //NAV CSS
//                 "position": "fixed",
//                 "z-index": "3000",
//             });
//             $("#logo").css({
//                 "display": "none",

//             });
//             // console.log("works");

//         } else if ($(window).scrollTop() < 100) {
//             $("#topbar-contents-ham-wrapper").css({ //NAV CSS
//                 "position": "relative",
//             }); // ON SCROLL
//             $("#logo").css({
//                 "display": "block",
//             })
//             // console.log("doesn't works");

//         }
//     }

// });



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
    if ($anchor.attr('href') === "#works-section") {
        $('html, body').animate({
            scrollTop: $($anchor.attr('href')).offset().top - 75
        }, 1500);
    }
    if ($anchor.attr('href') === "#contact-section") {
        $('html, body').animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500);
    }

    setTimeout(function () {
        $("#topbar-contents-mobile-navs-wrapper ").addClass("mobile-nav-hide");

    }, 700);
    $("#topbar-contents-mobile-navs-wrapper ").removeClass("mobile-nav-show");
    $("#topbar-contents-mobile-navs-wrapper ").addClass("mobile-nav-close");
    event.preventDefault();
});

$('#intro-section #intro-about-button a, #bio-section #to-skills-button-wrapper a').on('click', function (event) {

            var $anchor = $(this);
            // if ($anchor.attr('href') === "#bio-section") {
            $('html, body').animate({
                scrollTop: $($anchor.attr('href')).offset().top
            }, 1500);

        // }
    });