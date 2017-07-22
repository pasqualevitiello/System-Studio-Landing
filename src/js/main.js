(function ($) {
    "use strict";

    window.sys = {};
    sys.modules = {};

    sys.window = $(window);
    sys.document = $(document);
    sys.windowWidth = $(window).width();
    sys.windowHeight = $(window).height();
    sys.body = $('body');
    sys.html = $('html, body');
    sys.htmlEl = $('html');
    sys.header = $('header');
    sys.headerHeight = sys.header.outerHeight(true);
    sys.landing = $('.landing-wrapper');
    sys.landingHeight = sys.landing.outerHeight(true);
    sys.videoContainer = $('.video-container');
    sys.videoBg = sys.videoContainer.find('.landing-bg');
    sys.videoBgWOrig = 1920;
    sys.videoBgHOrig = 1080;
    sys.posterBg = $('.poster');

    sys.sysOnDocumentReady = sysOnDocumentReady;
    sys.sysOnWindowLoad = sysOnWindowLoad;
    sys.sysOnWindowResize = sysOnWindowResize;
    sys.sysOnWindowScroll = sysOnWindowScroll;

    $(document).ready(sysOnDocumentReady);
    $(window).load(sysOnWindowLoad);
    $(window).resize(sysOnWindowResize);
    $(window).scroll(sysOnWindowScroll);

    /* 
     *  All functions to be called on $(document).ready() should be in this function
     */
    function sysOnDocumentReady() {
        console.log('ready');
        sys.body.removeClass('is-loading');
        systemLoader();
        landingCalcHeights();
    }

    /* 
     *  All functions to be called on $(window).load() should be in this function
     */
    function sysOnWindowLoad() {
        console.log('loaded');
        videoBgSize();
    }

    /* 
     *  All functions to be called on $(window).resize() should be in this function
     */
    function sysOnWindowResize() {
        sys.windowWidth = $(window).width();
        sys.windowHeight = $(window).height();
        sys.headerHeight = sys.header.outerHeight(true);
        sys.landingHeight = sys.landing.outerHeight(true);
    }

    /* 
     *  All functions to be called on $(window).scroll() should be in this function
     */
    function sysOnWindowScroll() {
        sys.scroll = $(window).scrollTop();
    }

    /* 
     *  The Loader
     */
    function systemLoader() {
        sys.loaderLogo = $('.system-loader-logo');
        sys.loaderLeft = sys.loaderLogo.children('.block-left');
        sys.loaderRight = sys.loaderLogo.children('.block-right');
        sys.loaderMiddle = sys.loaderLogo.children('.block-middle');
        sys.staggeringEls = sys.landing.find('.staggering-elem');
        sys.loaderLogo.addClass('is-ready');
        sys.body.addClass('is-intro-animation-running');
        logoIntroAnimation();
    }

    // Define animation
    function logoIntroAnimation() {
        var logoIntro = new TimelineMax();

        // Set initial state
        logoIntro
            .set( sys.loaderLogo,
            {
                scale: 0,
                rotation: 315,
                y: 0,
                opacity: 1,
            }) 
            .set( sys.staggeringEls,
            {
                display: 'none',
                y: sys.windowHeight,
                opacity: 0,
            }) 
            .set( sys.loaderLeft,
            {
                right: 40,
            })
            .set( sys.loaderRight,
            {
                left: 40,
            })  

        logoIntro
            .to( sys.loaderLogo, .6,
            {
                scaleY: .4,
                scaleX: 1,
                rotation: 0,
                ease: Expo.easeOut,
                delay: .5,
            })
            .to( sys.loaderLogo, 0,
            {
                onComplete: logoInAnimation
            }, '-=.2' )
    }

    function logoInAnimation() {
        var logoAnim = new TimelineMax();

        // Progressive states
        logoAnim
        .to( sys.loaderLogo, 1,
        {
            scale: 1,
            ease: Elastic.easeOut.config( 1, .5 ),
        })
        .to( sys.loaderLogo, 1,
        {
            rotation: '+=315',
            ease: Expo.easeOut,
        }, '-=.6' )
        .to( sys.loaderLeft, .8,
        {
            right: 72,
            opacity: 1,
            ease: Expo.easeOut,
        }, '-=.8' )
        .to( sys.loaderRight, .8,
        {
            left: 72,
            opacity: 1,
            ease: Expo.easeOut,
            onComplete: logoOutAnimation
        }, '-=.8' )
    }

    function logoOutAnimation() {
        var logoOut = new TimelineMax();

        // Progressive states
        logoOut
            .to( sys.loaderLogo, 1.5,
            {
                y: -sys.windowHeight,
                opacity: 0,
                ease: Expo.easeInOut,
                onStart: landingInAnimation,
            })
    }

    function landingInAnimation() {
        var landingIn = new TimelineMax();

        // Stagger from
        landingIn
            .staggerTo( sys.staggeringEls, 1.5,
            {
                display: 'block',
                y: 0,
                opacity: 1,
                ease: Expo.easeInOut,
            }, .1, 0, handleAnimClasses )
    }

    function handleAnimClasses() {
        sys.body.removeClass('is-intro-animation-running').addClass('is-intro-animation-complete');
    }


    /* 
     *  Handle the hero position
     */
    function landingCalcHeights() {
        if ( sys.landing ) {
            if( sys.landingHeight < sys.windowHeight ) { // da fixare: prova il resize verticale e capisci perché
                sys.landing.css( 'top', ( ( sys.windowHeight - sys.landingHeight ) / 2 ) - ( sys.headerHeight / 2 ) );
            } else {
                sys.landing.css( 'top', 0 );
            }
        }
    }

    /* 
     *  Scale background video
     */
    function videoBgSize() {
        if ( sys.landing ) {

            // use largest scale factor of horizontal/vertical
            var scale_w = sys.windowWidth / sys.videoBgWOrig;
            var scale_h = sys.windowHeight / sys.videoBgHOrig;
            var scale = scale_w > scale_h ? scale_w : scale_h;
              
            // scale video and poster
            sys.videoBg.width( scale * sys.videoBgWOrig );
            sys.videoBg.height( scale * sys.videoBgHOrig );

            var video = document.getElementById('bg-video');
            video.onloadedmetadata = function() {
                console.log('yep');
                sys.videoContainer.addClass('has-loaded');
            };
        }
    }

})(jQuery);