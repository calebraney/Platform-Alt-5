import { attr, checkBreakpoints } from '../utilities';

export const horizontalScroll = function () {
  //selectors
  const SECTION = '[data-ix-horizontalscroll="wrap"]';
  const TRACK = '[data-ix-horizontalscroll="track"]';
  const STICKY = '[data-ix-horizontalscroll="sticky"]';
  //elements
  const sections = gsap.utils.toArray(SECTION);
  if (sections.length === 0) return;
  //for each section
  sections.forEach((section) => {
    const track = section.querySelector(TRACK);
    const stickyEl = section.querySelector(STICKY);
    if (!section || !track || !stickyEl) return;

    // if (matchHeight) {
    //   //set the section height to be the same size as the row
    //   let trackWidth = track.offsetWidth;
    //   section.style.height = trackWidth + 'px';
    //   ScrollTrigger.refresh();
    // }

    //main timeline
    let tl = gsap
      .timeline({
        scrollTrigger: {
          trigger: section,
          start: 'top top',
          end: '98% bottom',
          scrub: 0.5,
        },
        defaults: {
          duration: 1,
          ease: 'power1.out',
        },
      })
      .set(stickyEl, {
        overflow: 'hidden',
      })
      .to(track, {
        xPercent: -100,
        ease: 'none',
      });
  });
};
