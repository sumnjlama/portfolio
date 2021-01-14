


let openSite = (url) => {
    let site = window.open(url);
}

var windowHeight = window.outerHeight;

let upbuttonShow = () => {

    if (window.innerHeight > document.body.clientHeight) {
        document.getElementById("up-button-div").style.display = "none";
        document.getElementById("contact-card").style.display = "none";
    }
    window.addEventListener('resize', function () {
        if (window.innerHeight < document.body.clientHeight) {
            document.getElementById("up-button-div").style.display = "block";
            document.getElementById("contact-card").style.display = "block";
        } else {
            document.getElementById("up-button-div").style.display = "none";
        }

    })
}
upbuttonShow();

function toTheTop() {
    $("html, body").animate({scrollTop:0}, 750);
    return false;

}




// Wrap every letter in a span
// document.getElementById("welcoming-text").innerHTML = "Hello, I am Suman Lama.";
// var textWrapper = document.querySelector('.ml11 .letters');
// textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

// anime.timeline({
//         loop: false
//     })
//     .add({
//         targets: '.line',
//         opacity: [0, 1],
//         easing: "easeOutExpo",
//         duration: 100
//     })
//     .add({
//         targets: '.ml11 .line',
//         scaleY: [0, 1],
//         opacity: [0.7, 1],
//         easing: "easeOutExpo",
//         duration: 1000
//     })
//     .add({
//         targets: '.ml11 .letter',
//         opacity: [0, 1],
//         easing: "easeOutExpo",
//         duration: 800,
//         offset: '-=175',
//         delay: (el, i) => 44 * (i + 1)
//     })
    // .add({
    //     targets: '.ml11',
    //     opacity: 0,
    //     duration: 600,
    //     easing: "easeOutExpo",
    //     delay: 1500
    // });

// var p;
// let fadeInd = () => {
//     if (window.location.href.indexOf("index.html")) {
//         p = setTimeout(function () {
//             window.location.href = "home.html"
//         }, 4500);
//     }
//     return;
// }
// fadeInd();

// Place this script at the end of the body tag 

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