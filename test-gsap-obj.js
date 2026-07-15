import { gsap } from 'gsap';
try {
  const scrollData = { current: { z: 5, y: 0, rotX: 0 } };
  const tl = gsap.timeline();
  tl.to(scrollData.current, { z: -10 });
  console.log("Obj target OK");
} catch(e) {
  console.log(e.message);
}
