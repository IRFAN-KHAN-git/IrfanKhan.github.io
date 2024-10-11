const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});
function circlechapta(){
    window.addEventListener("mousemove",function(dets){
        
    });
}

function firstpageanim(){
    var tl = gsap.timeline();
    tl.from("#nav", {
        y: '-10',
        opacity: 0,
        duration: 1.5,
        ease: Expo.easeInOut
    })
    .to(".boundinglem", {
        y: 0,
        ease: Expo.easeInOut,
        duration: 2,
        delay: -1,
        stagger: .2
    })
    .from("#last", {
        y: -10,
        opacity: 0,
        duration: 1.5,
        delay: -1,
        ease: Expo.easeInOut
    })
}

function followcircle(){ 
        window.addEventListener("mousemove",function(dets){
            document.querySelector("#mincircle").style.transform = `translate(${dets.clientX}px , ${dets.clientY}px)`;
        })
    }
followcircle();
firstpageanim();