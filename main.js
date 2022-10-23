// NAVIGATION BAR
const menuBtn = document.querySelector('.menu-btn');
const exitBtn = document.querySelector('.exit');

let t1 = gsap.timeline({ paused: true });
t1.to('.menu', { opacity: 1, duration: 1, top: 0, ease: Power2.easeInOut });
t1.to('.nav', { opacity: 1, duration: 1, stagger: 0.1, marginTop: 0 }, '>-0.5');

menuBtn.addEventListener('click', () => {
  t1.play().timeScale(1);
});
exitBtn.addEventListener('click', () => {
  t1.timeScale(3);
  t1.reverse();
});
