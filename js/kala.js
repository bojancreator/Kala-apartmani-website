/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

$(window).scroll(function () {
  if ($(window).scrollTop() >= 200) {
    $('header').addClass('fixed-header');
    $('header div').addClass('visible-title');
  } else {
    $('header').removeClass('fixed-header');
    $('header div').removeClass('visible-title');
  }
});

const menuBtn = document.querySelector('.menu-btn');
const naviNav = document.querySelector('.navigation');
let menuOpen = false;
menuBtn.addEventListener('click', () => {
  if (!menuOpen) {
    menuBtn.classList.add('open');
    naviNav.classList.add('active');
    menuOpen = true;
  } else {
    menuBtn.classList.remove('open');
    naviNav.classList.remove('active');
    menuOpen = false;
  }
});

const bookBtn = document.querySelector('.book-btn');
const bookingBtn = document.querySelector('.booking');
let bookOpen = false;
bookBtn.addEventListener('click', () => {
  if (!bookOpen) {
    bookingBtn.classList.add('kliz');
    bookOpen = true;
  } else {
    bookingBtn.classList.remove('kliz');
    bookOpen = false;
  }
});
