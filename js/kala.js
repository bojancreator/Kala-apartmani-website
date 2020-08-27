/* ========================================== 
scrollTop() >= 300
Should be equal the the height of the header
========================================== */

$(window).scroll(function () {
  if ($(window).scrollTop() >= 134) {
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

/*========== DATE PICKER ==========*/
$(document).ready(function () {
  /*========== DATE PICKER ==========*/
  $('.datepicker').datepicker({
    format: 'dd/mm/yyyy', //Set Date Format
    startDate: new Date(), //Set Min Date Today
    endDate: '18/12/2120', //Set Max Date
    datesDisabled: ['16/01/2017', '17/01/2017', '30/01/2017'], //Set Disabled Dates
    autoclose: true,
    todayHighlight: true,
  });
});

$('.from_date .datepicker').on('changeDate', function (ev) {
  var elm = jQuery(this);

  tommorrow = ev.date;
  tommorrow.setDate(tommorrow.getDate());
  jQuery('.to_date .datepicker').datepicker('setDate', tommorrow);

  elm.parents('.from_date').find('.check_in_day').val(ev.date.getDate());
  elm
    .parents('.from_date')
    .find('.check_in_month')
    .val(ev.date.getMonth() + 1);
  elm.parents('.from_date').find('.check_in_year').val(ev.date.getFullYear());
});

$('.to_date .datepicker').on('changeDate', function (ev) {
  var elm = jQuery(this);

  elm.parents('.to_date').find('.check_out_day').val(ev.date.getDate());
  elm
    .parents('.to_date')
    .find('.check_out_month')
    .val(ev.date.getMonth() + 1);
  elm.parents('.to_date').find('.check_out_year').val(ev.date.getFullYear());
});