(function(e){"use strict";window.sys={};sys.modules={};sys.window=e(window);sys.document=e(document);sys.windowWidth=e(window).width();sys.windowHeight=e(window).height();sys.body=e("body");sys.html=e("html, body");sys.htmlEl=e("html");sys.header=e("header");sys.headerHeight=sys.header.outerHeight(true);sys.landing=e(".landing-wrapper");sys.landingHeight=sys.landing.outerHeight(true);sys.sysOnDocumentReady=s;sys.sysOnWindowLoad=n;sys.sysOnWindowResize=i;sys.sysOnWindowScroll=t;e(document).ready(s);e(window).load(n);e(window).resize(i);e(window).scroll(t);function s(){o()}function n(){}function i(){sys.windowWidth=e(window).width();sys.windowHeight=e(window).height();sys.headerHeight=sys.header.outerHeight(true);sys.landingHeight=sys.landing.outerHeight(true);o()}function t(){sys.scroll=e(window).scrollTop()}function o(){if(sys.landing){if(sys.landingHeight<sys.windowHeight){sys.landing.css("top",(sys.windowHeight-sys.landingHeight)/2-sys.headerHeight/2)}else{sys.landing.css("top",0)}}}})(jQuery);particlesJS("particles",{particles:{number:{value:8,density:{enable:false,value_area:550}},color:{value:["#00AEEF","#2F71E4","#FC5B71","#FBC572","#58E2B3"]},shape:{type:["circle","edge","triangle","polygon"],stroke:{width:0,color:"#000000"},polygon:{nb_sides:6}},opacity:{value:.8,random:true,anim:{enable:false,speed:1,opacity_min:1,sync:false}},size:{value:8,random:true,anim:{enable:false,speed:40,size_min:.1,sync:false}},line_linked:{enable:false,distance:150,color:"#000000",opacity:.4,width:1},move:{enable:true,speed:1,direction:"none",random:true,straight:false,out_mode:"out",bounce:false,attract:{enable:false,rotateX:600,rotateY:1200}}},interactivity:{detect_on:"window",events:{onhover:{enable:true,mode:"bubble"},onclick:{enable:true,mode:"push"},resize:true},modes:{grab:{distance:400,line_linked:{opacity:1}},bubble:{distance:500,size:9,duration:2},repulse:{distance:200,duration:.4},push:{particles_nb:1},remove:{particles_nb:2}}},retina_detect:true});