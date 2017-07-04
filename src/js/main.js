(function($) {
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
  sys.landing = $('.landing-wrapper');
  sys.landingHeight = sys.landing.outerHeight(true);

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
    landingCalcHeights();
  }

  /* 
   *  All functions to be called on $(window).load() should be in this function
   */
  function sysOnWindowLoad() {
  }

  /* 
   *  All functions to be called on $(window).resize() should be in this function
   */
  function sysOnWindowResize() {
    sys.windowWidth = $(window).width();
    sys.windowHeight = $(window).height();
    landingCalcHeights();
  }

  /* 
   *  All functions to be called on $(window).scroll() should be in this function
   */
  function sysOnWindowScroll() {
    sys.scroll = $(window).scrollTop();
  }

  /* 
   *  Handle the hero position
   */
  function landingCalcHeights() {
    if ( sys.landing ) {
      if( sys.landingHeight < sys.windowHeight ) { // da fixare: prova il resize verticale e capisci perché
        sys.headerHeight = $('header').height();
        sys.landing.css( 'top', ( ( sys.windowHeight - sys.landingHeight ) / 2 ) - sys.headerHeight );
      } else {
        sys.landing.css( 'top', 0 );
      }
    }
  }

})(jQuery);


/* ---- particles.js config ---- */

particlesJS("particles", {
  "particles": {
    "number": {
      "value": 8,
      "density": {
        "enable": false,
        "value_area": 550
      }
    },
    "color": {
      "value": ["#00AEEF", "#2F71E4", "#FC5B71", "#FBC572", "#58E2B3"]
    },
    "shape": {
      "type": ["circle", "edge", "triangle", "polygon"],
      "stroke": {
        "width": 0,
        "color": "#000000"
      },
      "polygon": {
        "nb_sides": 6
      }
    },
    "opacity": {
      "value": 0.8,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 1,
        "opacity_min": 1,
        "sync": false
      }
    },
    "size": {
      "value": 8,
      "random": true,
      "anim": {
        "enable": false,
        "speed": 40,
        "size_min": 0.1,
        "sync": false
      }
    },
    "line_linked": {
      "enable": false,
      "distance": 150,
      "color": "#000000",
      "opacity": 0.4,
      "width": 1
    },
    "move": {
      "enable": true,
      "speed": 1,
      "direction": "none",
      "random": true,
      "straight": false,
      "out_mode": "out",
      "bounce": false,
      "attract": {
        "enable": false,
        "rotateX": 600,
        "rotateY": 1200
      }
    }
  },
  "interactivity": {
    "detect_on": "window",
    "events": {
      "onhover": {
        "enable": true,
        "mode": "bubble"
      },
      "onclick": {
        "enable": true,
        "mode": "push"
      },
      "resize": true
    },
    "modes": {
      "grab": {
        "distance": 400,
        "line_linked": {
          "opacity": 1
        }
      },
      "bubble": {
        "distance": 500,
        "size": 9,
        "duration": 2,
        //"speed": 3
      },
      "repulse": {
        "distance": 200,
        "duration": 0.4
      },
      "push": {
        "particles_nb": 1
      },
      "remove": {
        "particles_nb": 2
      }
    }
  },
  "retina_detect": true
});