import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

const tl = gsap.timeline({ scrollTrigger: { trigger: 'body' } });
console.log(!!tl.scrollTrigger);
tl.kill();
console.log(!!tl.scrollTrigger);
