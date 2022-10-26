const tl = gsap.timeline({defaults:{ease :"power1.out"}});
tl.to('.Text',{y:"0" , duration:1 , stagger:0.25}); //floating the text up
tl.to('.slider' , {y:"-100%" , duration:1.5,delay:0.5});
tl.to('.intro',{y:"-100%" ,duration:1},"-=1");
// "-=1"->idicates to start 1% faster
tl.fromTo('nav',{opacity:0},{opacity:1,duration:1});
tl.fromTo('.bigText',{opacity:0},{opacity:1,duration:1},"-=1");
