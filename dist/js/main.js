(function(s){"use strict";window.sys={};sys.modules={};sys.window=s(window);sys.document=s(document);sys.windowWidth=s(window).width();sys.windowHeight=s(window).height();sys.body=s("body");sys.html=s("html, body");sys.htmlEl=s("html");sys.header=s("header");sys.headerHeight=sys.header.outerHeight(true);sys.landing=s(".landing-wrapper");sys.landingHeight=sys.landing.outerHeight(true);sys.videoContainer=s(".video-container");sys.videoBg=sys.videoContainer.find(".landing-bg");sys.videoBgWOrig=1920;sys.videoBgHOrig=1080;sys.posterBg=s(".poster");sys.sysOnDocumentReady=e;sys.sysOnWindowLoad=o;sys.sysOnWindowResize=i;sys.sysOnWindowScroll=n;s(document).ready(e);s(window).load(o);s(window).resize(i);s(window).scroll(n);function e(){console.log("ready");sys.body.removeClass("is-loading");t();r()}function o(){console.log("loaded");w()}function i(){sys.windowWidth=s(window).width();sys.windowHeight=s(window).height();sys.headerHeight=sys.header.outerHeight(true);sys.landingHeight=sys.landing.outerHeight(true)}function n(){sys.scroll=s(window).scrollTop()}function t(){sys.loaderLogo=s(".system-loader-logo");sys.loaderLeft=sys.loaderLogo.children(".block-left");sys.loaderRight=sys.loaderLogo.children(".block-right");sys.loaderMiddle=sys.loaderLogo.children(".block-middle");sys.staggeringEls=sys.landing.find(".staggering-elem");sys.loaderLogo.addClass("is-ready");sys.body.addClass("is-intro-animation-running");d()}function d(){var s=new TimelineMax;s.set(sys.loaderLogo,{scale:0,rotation:315,y:0,opacity:1}).set(sys.staggeringEls,{display:"none",y:sys.windowHeight,opacity:0}).set(sys.loaderLeft,{right:40}).set(sys.loaderRight,{left:40});s.to(sys.loaderLogo,.6,{scaleY:.4,scaleX:1,rotation:0,ease:Expo.easeOut,delay:.5}).to(sys.loaderLogo,0,{onComplete:a},"-=.2")}function a(){var s=new TimelineMax;s.to(sys.loaderLogo,1,{scale:1,ease:Elastic.easeOut.config(1,.5)}).to(sys.loaderLogo,1,{rotation:"+=315",ease:Expo.easeOut},"-=.6").to(sys.loaderLeft,.8,{right:72,opacity:1,ease:Expo.easeOut},"-=.8").to(sys.loaderRight,.8,{left:72,opacity:1,ease:Expo.easeOut,onComplete:y},"-=.8")}function y(){var s=new TimelineMax;s.to(sys.loaderLogo,1.5,{y:-sys.windowHeight,opacity:0,ease:Expo.easeInOut,onStart:l})}function l(){var s=new TimelineMax;s.staggerTo(sys.staggeringEls,1.5,{display:"block",y:0,opacity:1,ease:Expo.easeInOut},.1,0,g)}function g(){sys.body.removeClass("is-intro-animation-running").addClass("is-intro-animation-complete")}function r(){if(sys.landing){if(sys.landingHeight<sys.windowHeight){sys.landing.css("top",(sys.windowHeight-sys.landingHeight)/2-sys.headerHeight/2)}else{sys.landing.css("top",0)}}}function w(){if(sys.landing){var s=sys.windowWidth/sys.videoBgWOrig;var e=sys.windowHeight/sys.videoBgHOrig;var o=s>e?s:e;sys.videoBg.width(o*sys.videoBgWOrig);sys.videoBg.height(o*sys.videoBgHOrig);var i=document.getElementById("bg-video");i.onloadedmetadata=function(){console.log("yep");sys.videoContainer.addClass("has-loaded")}}}})(jQuery);