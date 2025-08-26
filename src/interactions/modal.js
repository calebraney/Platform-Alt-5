import { attr, startScroll, stopScroll } from '../utilities';

export const modal = function (gsapContext) {
  const ANIMATION_ID = 'modal';
  //Selectors
  const MODAL_WRAP = '[data-ix-modal="wrap"]'; //a modal item
  const MODAL_TRIGGER = 'data-ix-modal-trigger'; //id of element to trigger modal
  const MODAL_CLOSE_BTN = '[data-ix-modal="close"]';
  const TIMEOUT = 'data-ix-modal-timeout';
  const MODAL_TRIGGER_DEFAULT = 'blank-id';
  const DEFAULT_TIMEOUT = 3;

  //global variables
  let activeModal = false;

  //Arrays of modal and video player elements
  const modals = [...document.querySelectorAll(MODAL_WRAP)];

  if (modals.length === 0) return;
  modals.forEach((modal, index) => {
    //get the parent element of the trigger, and find the modal within that element
    const closeButtons = [...modal.querySelectorAll(MODAL_CLOSE_BTN)];
    const timeout = attr(DEFAULT_TIMEOUT, modal.getAttribute(TIMEOUT));
    const triggerID = attr(MODAL_TRIGGER_DEFAULT, modal.getAttribute(MODAL_TRIGGER));
    //if trigger id attribute is not default
    if (triggerID !== MODAL_TRIGGER_DEFAULT) {
      const trigger = document.querySelector(`#${triggerID}`);
      //find trigger and open modal on click
      if (trigger) {
        trigger.addEventListener('click', (e) => {
          // Find the closest dialog parent and close it
          openModal(modal);
        });
      }
    } else {
      //otherwise open based on timer
      setTimeout(() => {
        openModal(modal);
      }, timeout * 1000);
    }

    // process key events in the modal
    modal.addEventListener('keydown', (e) => {
      // if escape is pressed when modal is open, close lightbox
      if (e.key === 'Escape' && activeModal !== false) {
        closeModal(modal);
      }
    });

    // process click events for close buttons
    closeButtons.forEach((item) => {
      item.addEventListener('click', (e) => {
        closeModal(modal);
      });
    });
  });

  const openModal = function (modal) {
    if (!modal) return;
    //using fake modal because of the custom cursor.
    modal.classList.add('is-active');
    // modal.showModal();
    stopScroll();
    trapFocus(modal, true);
    activeModal = modal;
  };
  const closeModal = function (modal) {
    if (!modal) return;
    modal.classList.remove('is-active');
    // modal.close();
    startScroll();
    trapFocus(modal, false);

    activemodal = false;
  };
  function trapFocus(modal, activate) {
    // Store previously focused element for restoration
    if (!trapFocus.lastFocused) {
      trapFocus.lastFocused = null;
    }

    // If activating trap
    if (activate) {
      trapFocus.lastFocused = document.activeElement; // save current focus

      // Collect all focusable elements inside modal
      const focusableSelectors = [
        'a[href]',
        'button:not([disabled])',
        'textarea:not([disabled])',
        'input:not([disabled]):not([type="hidden"])',
        'select:not([disabled])',
        '[tabindex]:not([tabindex="-1"])',
      ];
      const focusableEls = modal.querySelectorAll(focusableSelectors.join(','));
      const focusables = Array.from(focusableEls);

      if (focusables.length === 0) return; // nothing to focus

      // Focus first focusable element
      focusables[0].focus();

      // Handler for looping focus
      function handleFocus(e) {
        const first = focusables[0];
        const last = focusables[focusables.length - 1];

        if (e.key === 'Tab') {
          if (e.shiftKey) {
            // Shift + Tab from first → loop to last
            if (document.activeElement === first) {
              e.preventDefault();
              last.focus();
            }
          } else {
            // Tab from last → loop to first
            if (document.activeElement === last) {
              e.preventDefault();
              first.focus();
            }
          }
        }
      }

      // Save handler so it can be removed later
      trapFocus._handler = handleFocus;
      modal.addEventListener('keydown', handleFocus);
    } else {
      // If deactivating trap
      if (trapFocus._handler) {
        modal.removeEventListener('keydown', trapFocus._handler);
        trapFocus._handler = null;
      }

      // Restore focus
      if (trapFocus.lastFocused && trapFocus.lastFocused.focus) {
        trapFocus.lastFocused.focus();
      }
    }
  }
};
