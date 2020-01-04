EE_ANIMATION = {};

jQuery(document).ready(function ($) {
    let $window = $(window), $body = $("body"), $html = $('html');

    EE_ANIMATION.decorImages = function () {
        let controller = new ScrollMagic.Controller();
        $('.ee-decor-img').each(function () {
            let $decor = $(this), animation = $decor.data('anim');

            // animation
            let timeline = new TimelineMax();
            switch (animation) {
                case "scale-up":
                    timeline.from($decor, .5, {opacity: 0, scale: ".7"}, 0);
                    break;
                case "from-left":
                    timeline.from($decor, .5, {opacity: 0, x: "-100%", rotation: "-50deg"}, 0);
                    break;
                case "from-right":
                    timeline.from($decor, .5, {opacity: 0, x: "100%", rotation: "50deg"}, 0);
                    break;
            }
            timeline.pause();

            // Init scroll magic
            var scene = new ScrollMagic.Scene({
                triggerElement: this,
                duration: $decor.outerHeight(),
                triggerHook: .6
            })
                .addTo(controller)
                .on("enter", function (e) {
                    timeline.play();
                });
        });
    };

    /**
     * INIT FUNCTIONS
     */
    EE_ANIMATION.loadFunctions = function () {
        EE_ANIMATION.decorImages();
    };

    EE_ANIMATION.loadFunctions();
});