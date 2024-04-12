import { attr, checkBreakpoints } from '../utilities';

/*
CSS to include
can also use pointer to check for non fine pointers
@media not all and (pointer: fine) {

@media (hover: none) {
 .cursor {
    pointer-events: none;
    display: none;
  }
}
*/

export const cursor = function (gsapContext) {
  //animation ID
  const ANIMATION_ID = 'cursor';
  //elements
  const WRAP = '[data-ix-cursor="wrap"]';
  const INNER = '[data-ix-cursor="inner"]';
  const DOT = '[data-ix-cursor="dot"]';
  const HOVER = '[data-ix-cursor="hover"]';
  const NO_HOVER = '[data-ix-cursor="no-hover"]';
  //classes
  const HOVER_CLASS = 'is-hover';
  // select the items
  const cursorWrap = document.querySelector(WRAP);
  const cursorInner = document.querySelector(INNER);
  const cursorDot = document.querySelector(DOT);

  // return if items are null
  if (!cursorWrap || !cursorInner) return;
  //check if the device has a touch screen
  if ('ontouchstart' in window || navigator.maxTouchPoints) return;

  //check breakpoints and quit function if set on specific breakpoints
  let runOnBreakpoint = checkBreakpoints(cursorWrap, ANIMATION_ID, gsapContext);
  if (runOnBreakpoint === false) return;

  const cursorHover = function () {
    // get all links without a no-hover attribute and any other elements with a hover attribute into an array
    const hoverElements = gsap.utils.toArray(`${HOVER}, :is(a, button):not(${NO_HOVER})`);
    hoverElements.forEach((item) => {
      if (!item || !cursorDot) return;
      item.addEventListener('mouseover', function (e) {
        cursorDot.classList.add(HOVER_CLASS);
      });
      item.addEventListener('mouseleave', function (e) {
        cursorDot.classList.remove(HOVER_CLASS);
      });
    });
  };
  cursorHover();
  const cursorClick = function () {
    if (!cursorDot) return;
    document.addEventListener('click', function (e) {
      let tl = gsap.timeline({});
      tl.fromTo(cursorDot, { rotateZ: -45 }, { rotateZ: 45, ease: 'power1.out', duration: 0.3 });
    });
  };
  cursorClick();

  //handle cursor movement
  const cursorMove = function () {
    // object that stores the value of the progress so it can be animated
    let progressObject = { x: 0, y: 0 };

    // Create X timeline
    let cursorXTimeline = gsap.timeline({ paused: true, defaults: { ease: 'none' } });
    cursorXTimeline.fromTo(cursorInner, { x: '-50vw' }, { x: '50vw' });
    // Create Y Timeline
    let cursorYTimeline = gsap.timeline({ paused: true, defaults: { ease: 'none' } });
    cursorYTimeline.fromTo(cursorInner, { y: '-50vh' }, { y: '50vh' });

    // Function to update timeline progress based on an inputted value
    function setTimelineProgress(xValue, yValue) {
      // animate the timeline progress value and keep the timeline in sync onUpdate
      gsap.to(progressObject, {
        x: xValue,
        y: yValue,
        ease: 'none',
        duration: 0,
        onUpdate: () => {
          cursorXTimeline.progress(progressObject.x);
          cursorYTimeline.progress(progressObject.y);
        },
      });
      // an alternate option if you want the timeline progress to jump immediately without easing (will be choppier)
      // tl.progress(progressValue)
    }

    // Mouse events
    document.addEventListener('mousemove', function (e) {
      // getting the horizontal and vertical positions of the mouse and dividing it by the total screen width
      let mousePercentX = e.clientX / window.innerWidth;
      let mousePercentY = e.clientY / window.innerHeight;
      // call function to animate the timeline progress
      setTimelineProgress(mousePercentX, mousePercentY);
    });
  };
  cursorMove();
};
