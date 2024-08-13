import { attr } from './utilities';
import { accordion } from './interactions/accordion';
import { hoverActive } from './interactions/hoverActive';
import { horizontalScroll } from './interactions/horizontalScroll';
import { scrollIn } from './interactions/scrollIn';
import { cursor } from './interactions/cursor';
import Splide from '@splidejs/splide';

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
  const teamSlider = function () {
    //Swiper selectors
    const SLIDER = '.team_slider';
    //Button selectors
    const NEXT_BUTTON = '.splide__arrow--prev';
    const PREVIOUS_BUTTON = '.splide__arrow--next';

    document.querySelectorAll(SLIDER).forEach(function (slider) {
      if (!slider) return;
      const nextButtonEl = slider.querySelector(NEXT_BUTTON);
      const previousButtonEl = slider.querySelector(PREVIOUS_BUTTON);
      if (!nextButtonEl || !previousButtonEl || !slider) return;

      const splide = new Splide(slider, {
        type: 'loop', //slide or loop
        speed: 800, // transition speed in miliseconds
        dragAngleThreshold: 60, // default is 30
        autoWidth: false, // for cards with differing widths
        rewind: false, // go back to beginning when reach end
        gap: '2rem',
        perPage: 3,
        perMove: 1,
        pagination: false,
        breakpoints: {
          991: {
            // Tablet
            perPage: 2,
            gap: '3vw',
          },
          767: {
            // Mobile Landscape
            perPage: 2,
            gap: '3vw',
          },
          479: {
            // Mobile Portrait
            perPage: 1,
            gap: '0vw',
          },
        },
        arrows: { prev: previousButtonEl, next: nextButtonEl },
        classes: {
          // Add classes for arrows.
          prev: PREVIOUS_BUTTON,
          next: NEXT_BUTTON,
        },
      });
      splide.mount();
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
        scrollIn(gsapContext);
        cursor(gsapContext);
        //conditional interactions
        if (!reduceMotion) {
          scrollIn(gsapContext);
        }
        if (isDesktop) {
          horizontalScroll();
        }
        if (isDesktop || isTablet) {
          teamScroll(gsapContext);
        }
        if (isMobile) {
          teamSlider();
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
