gsap.registerPlugin(ScrollTrigger, TextPlugin);


gsap.to(".main-model", {
  scale: 1,
  scrollTrigger: {
    trigger: ".main-img-wrapper",
    start: "top 80vh",
    end: "1800px 50%",
    scrub: true,
    markers: false,
    pin: true,
  },
  duration: 5,
  ease: "power4.out"
})
// ===============================================main=========================================

gsap.to(".gallery", {
  scrollTrigger: {
    trigger: ".gallery",
    start: "center center",
    end: "1000px 0",
    scrub: true,
    markers: false,
    pin: true,
  },
  y: 0,
  duration: 3,
});


gsap.to(".group1", {
  scrollTrigger: {
    trigger: ".gallery",
    start: "center center",
    scrub: true,
    markers: false,
    ease: 'none',
  },
  y: 0,
  duration: 3,
});

gsap.to(".group2", {
  scrollTrigger: {
    trigger: ".gallery",
    start: "center center",
    scrub: true,
    markers: false,
    ease: 'none',
  },
  y: 0,
  duration: 3,
});

//===============================================gallery=========================================


  gsap.utils.toArray(".write-in-text").forEach((text) => {
      gsap.fromTo(text, 
          { 
              opacity: 0, 
              text: ""
          }, 
          { 
              opacity: 1,
              duration: 2, 
              text: text.getAttribute("data-text"),
              ease: "power2.inOut",
              scrollTrigger: {
                  trigger: text,
                  start: "top bottom",
                  end: "top center",
              }
          }
      );
  });

// ================================================introduction======================================

gsap.to(".container1", {
  scrollTrigger: {
    trigger: ".container1",
    start: "top 50%",
    end: "top 60%",
    scrub: true,
    markers: false,
  },
  x: 200,
  duration: 3,
});

gsap.to(".text.text1", {
  scrollTrigger: {
    trigger: ".container1",
    start: "top 50%",
    end: "top 60%",
    scrub: true,
    markers: false,
  },
  x: -150,
  duration: 3,
});
gsap.to(".fixed2", {
  scrollTrigger: {
    trigger: ".container1",
    start: "top 50%",
    end: "top 60%",
    scrub: true,
    markers: false,
  },
  x: -200,
  duration: 3,
});


// ================================================best-collection======================================

const total = document.querySelector(".horizontal-scroll");
console.log(total.offsetWidth)

function getScrollAmount() {
  let totalWidth = total.scrollWidth;
  return -(totalWidth - window.innerWidth);
}

const tween = gsap.to(total, {
  x: getScrollAmount,
  duration: 3,
  ease: "none",
});


ScrollTrigger.create({
  trigger: ".hsWrapper",
  start: "top top",
  end: () => `+=${getScrollAmount() * -1}`,
  pin: true,
  animation: tween,
  scrub: 1,
  invalidateOnRefresh: true,//사이즈 조절시 새로고침
  markers: false
});

// ========================horizontal================================
gsap.to(".sun", {
  scrollTrigger: {
    trigger: ".product-slide",
    start: "top 50%",
    scrub: true,
    markers: false,
  },
  rotate: 360,
  duration: 3,
});

document.addEventListener("DOMContentLoaded", () => {
  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray(".fade-in-text").forEach((text) => {
      gsap.fromTo(text, 
          { opacity: 0 }, 
          { 
              opacity: 1, 
              duration: 2, 
              ease: "power2.inOut",
              scrollTrigger: {
                  trigger: text,
                  start: "top 80%",
                  end: "top 50%",
                  toggleActions: "play none none none"
              }
          }
      );
  });
});

// ========================slider================================
gsap.fromTo(
  '.gallery-group1 svg',
  {opacity: 0.2 },
  { 
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: '.gallery-group1 .first',
      start: 'bottom center',
      toggleActions: 'play none none reverse'
    },
  }
);
gsap.fromTo(
  '.gallery-group2 svg',
  {opacity: 0.2 },
  { 
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: '.gallery-group2 .first',
      start: 'bottom center',
      toggleActions: 'play none none reverse'
    },
  }
);
gsap.fromTo(
  '.gallery-group3 svg',
  {opacity: 0.2 },
  { 
    opacity: 1,
    duration: 0.5,
    scrollTrigger: {
      trigger: '.gallery-group3 .first',
      start: 'bottom center',
      toggleActions: 'play none none reverse'
    },
  }
);

gsap.utils.toArray('.rolled-over-txt').forEach((txt) => {
  gsap.timeline({
    scrollTrigger: {
      trigger: txt,
      start: '100% 100%',
      end: '100% 100%',
      scrub: 1
    }
  }).fromTo(
    txt,
    {
      y: 100,
      opacity: 0
    },
    {
      y: 0,
      opacity: 1,
      ease: 'none',
      duration: 5
    }
  );
});

// ========================gallery================================
gsap.to(".left-animation", {
  backgroundPosition: "top 0 left -20%, top 0 right -100%, bottom 0 left 50%", // Targeting the second background image to move vertically
  ease: "none", 
  scrollTrigger: {
      trigger: ".forest",
      start: "top 50%", 
      end: "top 40%", 
      scrub: true 
  },
  duration: 3,
});







// ========================forest================================


var swiper = new Swiper(".mySwiper", {
  slidesPerView: 1,
  spaceBetween: 30,
  loop: true,
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});
// ========================swiper================================

$('a[href="#"]').on('click', e => e.preventDefault());




