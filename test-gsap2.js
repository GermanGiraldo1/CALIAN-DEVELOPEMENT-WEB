import { gsap } from 'gsap';
try {
  const tl = gsap.timeline();
  tl.to(undefined, {x: 100});
} catch(e) { console.log(e.message); }
