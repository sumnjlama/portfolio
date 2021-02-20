// // init controller

// SCROLLMAGIC JS
// init controller

var controller = new ScrollMagic.Controller();

// BIO SECTION SCROLL TRIGGER
new ScrollMagic.Scene ({ 
    triggerElement: "#bio-section",
    triggerHook: 0.8,
    offset: 50,
    reverse: true
})
.setClassToggle("#bio-profile-image-wrapper", "slide-left")
.addTo(controller); //PROFILE IMAGE SLIDE LEFT


new ScrollMagic.Scene ({
    triggerElement: "#bio-section",
    triggerHook: 0.8,
    offset: 50,
    reverse: true
})
.setClassToggle("#bio-wrapper", "slide-right")
.addTo(controller); //BIO PARAGRAPH SLIDE RIGHT


// SKILLS SECTION
new ScrollMagic.Scene ({
    triggerElement: "#skills-section",
    triggerHook: 0.8,
    offset: 50,
    reverse: true
})
.setClassToggle("#skills-text", "reveal-self")
.addTo(controller); //SKILLS TEXT FADE IN

new ScrollMagic.Scene ({
    triggerElement: "#skills-section",
    triggerHook: 0.8,
    offset: 50,
    reverse: true
})
.setClassToggle("#skills-wrapper", "reveal-self")
.addTo(controller); //SKILLS TEXT FADE IN


// PORTFOLIO SECTION
new ScrollMagic.Scene ({
    triggerElement: "#works-section",
    triggerHook: 0.8,
    offset: 50,
    reverse: true
})
.setClassToggle("#works-header", "reveal-self")
.addTo(controller); //PORTFOLIO TEXT FADE IN

new ScrollMagic.Scene ({
    triggerElement: "#works-section",
    triggerHook: 0.9,
    offset: 50,
    reverse: true
})
.setClassToggle("#works-wrapper", "reveal-self")
.addTo(controller); //PORTFOLIO TEXT FADE IN

new ScrollMagic.Scene ({
    triggerElement: "#works-section",
    triggerHook: 0.2,
    offset: 50,
    reverse: true
})
.setClassToggle("#icons-wrapper", "slide-left")
.addTo(controller); //PORTFOLIO TEXT FADE IN

new ScrollMagic.Scene ({
    triggerElement: "#contact-section",
    triggerHook: 0.9,
    offset: 50,
    reverse: true
})
.setClassToggle("#form-wrapper", "slide-right")
.addTo(controller);

