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

let openSite = (url) => {
    let site = window.open(url);
}

var windowHeight = window.outerHeight;

function toTheTop() {
    $("html, body").animate({scrollTop:0}, 750);
    return false;
}

// SCROLLMAGIC JS
// init controller

var controller = new ScrollMagic.Controller();

var slideBio = TweenMax.fromTo("#bio-wrapper", 1, {
    autoAlpha:0,
    x:-30
}, {
    autoAlpha:1,
    x:0
});

var slideBio_scene = new ScrollMagic.Scene({
        triggerElement: '#bio-section',
        triggerHook: 1,
        duration: 800,
        offset: 50,
    })
    .setTween(slideBio)
    .addTo(controller);

var slideBioImage = TweenMax.fromTo("#bio-profile-image-wrapper", 1, {
    autoAlpha:0,
    x:30
}, {
    autoAlpha:1,
    x:0
});

var slideBioImage_scene = new ScrollMagic.Scene({
    triggerElement: '#bio-section',
    triggerHook: 1,
    duration: 800,
    offset: 50,
})
.setTween(slideBioImage)
.addTo(controller);

var slideSkillsText = TweenMax.fromTo("#skills-text", 1, {
    autoAlpha:0
}, {
    autoAlpha:1

});

var slideSkillsText_scene = new ScrollMagic.Scene({
    triggerElement: '#skills-section',
    triggerHook: 1,
    duration: 300,
    offset: 500,
})
.setTween(slideSkillsText)
.addTo(controller);


$(".pop").each(function () {

    var skillsPop = TweenMax.fromTo($(this), 1, {
            autoAlpha: 0,
            scale: 0,
            y: -100
        },
        {
            autoAlpha: 1,
            scale: 1,
            y: 0

        },
    );

    var skillsPop_scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 1,
            duration: 450,
            offset: -170,
        })
        .setTween(skillsPop)
        .addTo(controller);

});

var slideWorksText = TweenMax.fromTo("#works-header", 1, {
    autoAlpha:0
}, {
    autoAlpha:1

});

var slideWorksText_scene = new ScrollMagic.Scene({
    triggerElement: '#works-section',
    triggerHook: 1,
    duration: 400,
    offset: 500,
})
.setTween(slideWorksText)
.addTo(controller);

$(".opaque").each(function () {

    var worksPop = TweenMax.fromTo($(this), 1, {
            autoAlpha: 0,
            scale: 0,
        },
        {
            autoAlpha: 1,
            scale: 1,
            y: 0

        },
    );

    var worksPop_scene = new ScrollMagic.Scene({
            triggerElement: this,
            triggerHook: 1,
            duration: 700,
            offset: 0,
        })
        .setTween(worksPop)
        .addTo(controller);

});
var slideIcons = TweenMax.fromTo("#icons-wrapper", 1, {
    autoAlpha:0,
    x:200
}, {
    autoAlpha:1,
    x:0
});

var slideIcons_scene = new ScrollMagic.Scene({
    triggerElement: '#works-section',
    triggerHook: 0,
    duration: 500,
    offset: 400,
})
.setTween(slideIcons)
.addTo(controller);


var slideForm = TweenMax.fromTo("#contact-header, #my-form", 1, {
    autoAlpha:0,
    x:-200
}, {
    autoAlpha:1,
    x:0
});

var slideForm_scene = new ScrollMagic.Scene({
    triggerElement: '#contact-section',
    triggerHook: .5,
    duration: 400,
    offset: 00,
})
.setTween(slideForm)
.addTo(controller);


// FREE FORM

window.addEventListener("DOMContentLoaded", function () {

    // get the form elements defined in your form HTML above

    var form = document.getElementById("my-form");
    // var button = document.getElementById("form-submit-button");
    var status = document.getElementById("status");

    // Success and Error functions for after the form is submitted


    function success() {
        form.reset();
        status.innerHTML = "Thank you, I will be in touch soon!";
    }

    function error() {
        status.innerHTML = "Oops! There was a problem.";
    }
    form.reset();
    // handle the form submission event

    form.addEventListener("submit", function (ev) {
        ev.preventDefault();
        var data = new FormData(form);
        ajax(form.method, form.action, data, success, error);
    });
});

// helper function for sending an AJAX request

function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
        if (xhr.readyState !== XMLHttpRequest.DONE) return;
        if (xhr.status === 200) {
            success(xhr.response, xhr.responseType);
        } else {
            error(xhr.status, xhr.response, xhr.responseType);
        }
    };
    xhr.send(data);
}