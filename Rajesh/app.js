const time= gsap.timeline({defaults:{ease:'power1.out'}})

time.to('.text',{y:'0%', duration:1,stagger:0.25})
time.to('.slider',{y:"-100%",duration:1.5,delay:0.5})
time.to('.intro',{y:"-100%",duration:1},"-=1")
time.fromTo('nav',{opacity:0},{opacity:1,duration:1})
time.fromTo('.big-text',{opacity:0},{opacity:1,duration:1},"-=1")
