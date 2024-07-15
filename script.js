
window.addEventListener("mousemove",function(det){
  gsap.to(circle,{
      x:det.clientX,
      y:det.clientY,
      duration:.3,
      ease:Expo
  })
})

var tl = gsap.timeline();

tl.to(".scroll-imgs img:nth-child(1),img:nth-child(2), img:nth-child(7)",{
    scrollTrigger:{
                trigger:".scroll-imgs img",
                start:"top 90%",
                end:"bottom -300%",
                scrub:true,
                pin:".hero",
        
            },
            top:"-10%"
},"a")

tl.to(".scroll-imgs img:nth-child(3),img:nth-child(6)",{
    scrollTrigger:{
                trigger:".scroll-imgs img",
                start:"top 90%",
                end:"bottom -500%",
                scrub:true,
        
            },
            top:"20%"
},"a")

tl.to(".scroll-imgs img:nth-child(4),img:nth-child(5)",{
    scrollTrigger:{
                trigger:".scroll-imgs img",
                start:"top 90%",
                end:"bottom -1100%",
                scrub:true,
        
            },
            top:"50%"
});


gsap.from(".me-wrapper",{
    scrollTrigger:{
        trigger:".me-wrapper",
        start:"top 80%",
    },
    height:"0rem",
    duration:1,
    ease: 'power2.inOut',
});



var tl1 = gsap.timeline({
    scrollTrigger:{
        trigger:".services",
        start:"top 10%",
        scrub:2,
        pin:".services",
        endTrigger:".services",
        duration:.5,
        ease: 'power2.inOut',
    }
    
});

tl1.to(".s-card:nth-child(2)",{
    top:"58%"
})
tl1.to(".s-card:nth-child(3)",{
    top:"61%"
})
tl1.to(".s-card:nth-child(4)",{
    top:"65%"
})


var revealContainers = document.querySelectorAll(".d");

revealContainers.forEach((imgcontainer, i) => {
  var image = imgcontainer.querySelector(".img-wrapper");
  
  var tl9 = gsap.timeline({
    scrollTrigger: {
      trigger: imgcontainer,
      start:"top 80%",
      ease: 'power2.inOut',
    }
  });

  tl9.set(imgcontainer, { autoAlpha: 1});
  tl9.from(image,{
    height:"0vw",
    duration:.6,
    ease: 'power2.inOut',
  });
});

var revealContainers = document.querySelectorAll("header");
revealContainers.forEach((animcontainer, i) => {
  var anim = animcontainer.querySelector("h2");
  
  var tl9 = gsap.timeline({
    scrollTrigger: {
      trigger: animcontainer,
      start:"top 80%",
      ease: 'power2',
    }
  });

  tl9.set(animcontainer, { autoAlpha: 1});
  tl9.to(anim,{
    y:0,
    opacity:1,
    ease: 'power2',
  });
});

gsap.to(".top",{
  y:"-100%",
  duration:1,
  ease: "power4.in",
  delay:.2,
  stagger:{
    amount:0.5
},
})

gsap.to(".bottom",{
  y:"100%",
  duration:1,
  ease: "power4.in",
  delay:.2,
  stagger:{
    amount:0.5
},
})
