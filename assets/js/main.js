/*=============== SHOW SIDEBAR ===============*/
const navMenu = document.getElementById('sidebar'),
  navToggle = document.getElementById('nav-toggle'),
  navClose = document.getElementById('nav-close');
/*===== SIDEBAR SHOW =====*/
/* Validate If Constant Exists */
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-sidebar');
  });
}
/*===== SIDEBAR HIDDEN =====*/
/* Validate If Constant Exists */
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-sidebar');
  });
}
/*=============== SKILLS TABS ===============*/
const tabs = document.querySelectorAll('[data-target]'),
  tabContent = document.querySelectorAll('[data-content]');
tabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const target = document.querySelector(tab.dataset.target);
    tabContent.forEach((tabContents) => {
      tabContents.classList.remove('skills__active');
    });
    target.classList.add('skills__active');
    tabs.forEach((tab) => {
      tab.classList.remove('skills__active');
    });
    tab.classList.add('skills__active');
  });
});
/*=============== MIXITUP FILTER PORTFOLIO ===============*/
let mixerPortfolio = mixitup('.work__container', {
  selectors: {
    target: '.work__card',
  },
  animation: {
    duration: 300,
  },
});
/*===== Link Active Work =====*/
const linkWork = document.querySelectorAll('.work__item');
function activeWork() {
  linkWork.forEach((l) => l.classList.remove('active-work'));
  this.classList.add('active-work');
}
linkWork.forEach((l) => l.addEventListener('click', activeWork));
/*===== Work Popup =====*/
document.addEventListener('click', (e) => {
  if (e.target.classList.contains('work__button')) {
    togglePortfolioPopup();
    portfolioItemDetails(e.target.parentElement);
  }
});
function togglePortfolioPopup() {
  document.querySelector('.portfolio__popup').classList.toggle('open');
}
document.querySelector('.portfolio__popup-close').addEventListener('click', togglePortfolioPopup);

function portfolioItemDetails(portfolioItem) {
  document.querySelector('.pp__thumbnail img').src = portfolioItem.querySelector('.work__img').src;
  document.querySelector('.portfolio__popup-subtitle span').innerHTML = portfolioItem.querySelector('.work__title').innerHTML;
  document.querySelector('.portfolio__popup-body').innerHTML = portfolioItem.querySelector('.portfolio__item-details').innerHTML;
}
/*=============== SERVICES MODAL ===============*/
const modalViews = document.querySelectorAll('.services__modal');
modelBtns = document.querySelectorAll('.services__button');
modalClose = document.querySelectorAll('.services__modal-close');

let modal = function (modalClick) {
  modalViews[modalClick].classList.add('active-modal');
};
modelBtns.forEach((modelBtn, i) => {
  modelBtn.addEventListener('click', () => {
    modal(i);
  });
});
modalClose.forEach((modalClose) => {
  modalClose.addEventListener('click', () => {
    modalViews.forEach((modalView) => {
      modalView.classList.remove('active-modal');
    });
  });
});
/*=============== SWIPER TESTIMONIAL ===============*/
let swiper = new Swiper('.testimonials__container', {
  spaceBetween: 24,
  loop: true,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    576: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
      spaceBetween: 48,
    },
  },
});
/*=============== INPUT ANIMATION ===============*/
const inputs = document.querySelectorAll('.input');
function focusFunc() {
  let parent = this.parentNode;
  parent.classList.add('focus');
}
function blurFunc() {
  let parent = this.parentNode;
  if (this.value == '') {
    parent.classList.remove('focus');
  }
}
inputs.forEach((input) => {
  input.addEventListener('focus', focusFunc);
  input.addEventListener('blur', blurFunc);
});
/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
// Get all sections that have an id defined
const sections = document.querySelectorAll('section[id]');
// add an event listener listening for scroll
window.addEventListener('scroll', navHighlighter);
function navHighlighter() {
  // get current scroll position
  let scrollY = window.pageYOffset;
  // Now we loop through sections to get height, top and ID values for each
  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    sectionId = current.getAttribute('id');
    // - If our current scroll position enters the space where current section on screen is, add .active class tocorresponding navigation link, else remove it
    // To know which link needs an active class, we use sectionId variable we are getting while looping through sections as an selector
    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.add('active-link');
    } else {
      document.querySelector('.nav__menu a[href*=' + sectionId + ']').classList.remove('active-link');
    }
  });
}
/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-up');
  // When the scroll is higher than 560 viewport height, add the show-scroll class to the a tag with the scroll
  if (this.scrollY >= 560) scrollUp.classList.add('show-scroll');
  else scrollUp.classList.remove('show-scroll');
}
window.addEventListener('scroll', scrollUp);
/* ============== Alert ============== */

/* ============= Contact Form ================ */
const scriptURL = 'https://script.google.com/macros/s/AKfycbyTwjPYKd1iCzT3uLvhtd4py8XNRlvyJC3dotuW5ZkRhEDtS6yvrsNuWt2lofb899Xh/exec';
const form = document.forms['contact-form'];
const btnKirim = document.querySelector('.btn-kirim');
const btnLoading = document.querySelector('.btn-loading');
const myAlert = document.querySelector('.my-alert');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  //  Ketika tombol submit diklik
  btnLoading.classList.toggle('d-none');
  btnKirim.classList.toggle('d-none');
  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then((response) => {
      // tampilkan tombol kirim, hilangkan tombol loading
      console.log('Success!', response);
      btnLoading.classList.toggle('d-none');
      btnKirim.classList.toggle('d-none');
      myAlert.classList.toggle('d-none');
      form.reset();
    })
    .catch((error) => console.error('Error!', error.message));
});
// ============= Alert =================
