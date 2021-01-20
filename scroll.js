// init controller

var controller = new ScrollMagic.Controller();

var slideBio = TweenMax.fromTo("#bio-wrapper", 1, {
    css: {
        right: "30%",
        opacity: 0,
    }
}, {
    css: {
        right: "0%",
        opacity: 1
    }
});

var slideBio_scene = new ScrollMagic.Scene({
        triggerElement: '#bio-section',
        triggerHook: 1,
        duration: 800,
        offset: 80,
    })
    .setTween(slideBio)
    .addTo(controller);

var slideBioImage = TweenMax.fromTo("#bio-profile-image-wrapper", 1, {
    css: {
        left: "30%",
        opacity: 0,
    }
}, {
    css: {
        left: "0%",
        opacity: 1
    }
});

var slideBioImage_scene = new ScrollMagic.Scene({
    triggerElement: '#bio-section',
    triggerHook: 1,
    duration: 700,
    offset: 80,
})
.setTween(slideBioImage)
.addTo(controller);

var slideSkillsText = TweenMax.fromTo("#skills-text", 1, {
    css: {
        opacity: 0.3,
    }
}, {
    css: {
        opacity: 1
    }
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
    css: {
        opacity: 0.3,
    }
}, {
    css: {
        opacity: 1
    }
});

var slideWorksText_scene = new ScrollMagic.Scene({
    triggerElement: '#works-section',
    triggerHook: 1,
    duration: 600,
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

