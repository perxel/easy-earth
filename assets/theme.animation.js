EE_ANIMATION = {};

jQuery(document).ready(function ($) {
    let $window = $(window), $body = $("body"), $html = $('html');

    EE_ANIMATION.pageTransition = function () {
        let timeline = new TimelineMax(),
            $header = $('.ee-header');
        timeline.to($body, .5, {opacity: 1, autoAlpha: 1}, 0);
        timeline.from($header, .5, {opacity: 0, y: "-50%"});
    };

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

    EE_ANIMATION.featuredRow = function () {
        let controller = new ScrollMagic.Controller();
        $('.ee-feature-row').each(function () {
            let $wrapper = $(this), timeline = new TimelineMax(),
                $items = $wrapper.find('.ee-feature-row__item');

            timeline.staggerFrom($items, .5, {opacity: 0, y: "30%", scaleY: "1.3"}, .2, 0);
            timeline.pause();

            // Init scroll magic
            var scene = new ScrollMagic.Scene({
                triggerElement: this,
                duration: $wrapper.outerHeight(),
                triggerHook: .6
            })
                .addTo(controller)
                .on("enter", function (e) {
                    timeline.play();
                });
        });
    };

    EE_ANIMATION.simpleFadeIn = function () {
        let controller = new ScrollMagic.Controller(),
            elements = ', .ee-box-text__content';
        $('.ee-animation-fade-in' + elements).each(function () {
            let $this = $(this), timeline = new TimelineMax();

            timeline.from($this, .5, {opacity: 0}, 0);
            timeline.pause();

            // Init scroll magic
            var scene = new ScrollMagic.Scene({
                triggerElement: this,
                duration: $this.outerHeight(),
                triggerHook: .6
            })
                .addTo(controller)
                .on("enter", function (e) {
                    timeline.play();
                });
        });
    };

    EE_ANIMATION.staggerFadeIn = function () {
        let controller = new ScrollMagic.Controller(),
            elements = ', .ee-product-grid__inner, .ee-ksp__inner, .ee-testimonials-inner, ' +
                '.ee-box-text__txt, .ee-newsletter__inner, .ee-newsletter__content';
        $('.ee-animation-stagger-fade-in' + elements).each(function () {
            let $this = $(this), $items = $this.children('div'),
                timeline = new TimelineMax();

            timeline.staggerFrom($items, .5, {opacity: 0, y: '20%'}, .08, 0);
            timeline.pause();

            // Init scroll magic
            var scene = new ScrollMagic.Scene({
                triggerElement: this,
                duration: $this.outerHeight(),
                triggerHook: .7
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
        //EE_ANIMATION.pageTransition();
        EE_ANIMATION.decorImages();
        EE_ANIMATION.featuredRow();
        EE_ANIMATION.simpleFadeIn();
        EE_ANIMATION.staggerFadeIn();
    };

    $window.on('load', function () {
        EE_ANIMATION.loadFunctions();
    })
});