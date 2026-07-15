import { gsap } from 'gsap';
try {
  gsap.context(() => {
    gsap.fromTo('.char', {x:0}, {x:100});
  }, { current: undefined });
} catch(e) { console.log(e.message); }
