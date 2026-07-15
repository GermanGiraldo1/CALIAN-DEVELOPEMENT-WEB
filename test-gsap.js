import { gsap } from 'gsap';
try {
  gsap.fromTo('.not-found', { x: 0 }, { x: 100 });
  console.log("No error on empty string selector");
} catch (e) {
  console.error("String selector error:", e.message);
}
try {
  gsap.fromTo(undefined, { x: 0 }, { x: 100 });
} catch (e) {
  console.error("Undefined target error:", e.message);
}
