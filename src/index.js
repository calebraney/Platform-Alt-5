import { attr } from './utilities';
import { accordion } from './interactions/accordion';
import { hoverActive } from './interactions/hoverActive';
import { horizontalScroll } from './interactions/horizontalScroll';
import { scrollIn } from './interactions/scrollIn';
import { cursor } from './interactions/cursor';

document.addEventListener('DOMContentLoaded', function () {
  // Comment out for production
  console.log('Local Script Loaded');

  // register gsap plugins if available
  if (gsap.ScrollTrigger !== undefined) {
    gsap.registerPlugin(ScrollTrigger);
  }
  if (gsap.Flip !== undefined) {
    gsap.registerPlugin(Flip);
  }

  //////////////////////////////
  //Global Variables
  const resetScrollTriggers = document.querySelectorAll('[data-ix-reset]');

  const teamScroll = function () {
    //selectors
    const SECTION = '[data-ix-team="wrap"]';
    const STICKY = '[data-ix-team="sticky"]';
    const TOP_LIST = '[data-ix-team="top-list"]';
    const BOTTOM_LIST = '[data-ix-team="bottom-list"]';

    //elements
    const sections = gsap.utils.toArray(SECTION);
    if (sections.length === 0) return;
    //for each section
    sections.forEach((section) => {
      const stickyEl = section.querySelector(STICKY);
      const topLists = section.querySelectorAll(TOP_LIST);
      const bottomLists = section.querySelectorAll(BOTTOM_LIST);

      if (!section || !stickyEl) return;

      //set the section height to be the same size as the row
      let rowWidth = topLists[0].offsetWidth;
      section.style.height = rowWidth + 'px';
      ScrollTrigger.refresh();

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
        .to(topLists, {
          xPercent: -50,
          ease: 'none',
        })
        .to(
          bottomLists,
          {
            xPercent: 50,
            ease: 'none',
          },
          '<'
        );
    });
  };

  //////////////////////////////
  //Control Functions on page load
  const gsapInit = function () {
    let mm = gsap.matchMedia();
    mm.add(
      {
        //This is the conditions object
        isMobile: '(max-width: 767px)',
        isTablet: '(min-width: 768px)  and (max-width: 991px)',
        isDesktop: '(min-width: 992px)',
        reduceMotion: '(prefers-reduced-motion: reduce)',
      },
      (gsapContext) => {
        let { isMobile, isTablet, isDesktop, reduceMotion } = gsapContext.conditions;
        //functional interactions
        accordion(gsapContext);
        hoverActive(gsapContext);
        teamScroll();
        cursor();
        //conditional interactions
        if (!reduceMotion) {
          scrollIn(gsapContext);
        }
        if (isDesktop) {
          horizontalScroll();
        }
      }
    );
  };
  gsapInit();

  //reset gsap on click of reset triggers
  resetScrollTriggers.forEach(function (item) {
    item.addEventListener('click', function (e) {
      ScrollTrigger.refresh();
    });
  });
});
