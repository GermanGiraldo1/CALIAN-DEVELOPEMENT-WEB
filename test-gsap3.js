import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);
try {
  gsap.to({}, {
    scrollTrigger: {
      trigger: undefined,
    }
  });
} catch(e) { console.log(e.message); }
