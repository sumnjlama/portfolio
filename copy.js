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
        }, 1800);

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
            }, 1500);

    });

let openSite = (url) => {
    let site = window.open(url);
}

var windowHeight = window.outerHeight;

function toTheTop() {
    $("html, body").animate({scrollTop:0}, 750);
    return false;
}

// CONTACT FORM

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