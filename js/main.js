(function ($) {
  'use strict';

  /*Document is Raedy */
  $(document).ready(function () {
    /*========== DATE PICKER ==========*/
    $('.datepicker').datepicker({
      format: 'dd/mm/yyyy', //Set Date Format
      startDate: new Date(), //Set Min Date Today
      endDate: '18/12/2020', //Set Max Date
      datesDisabled: ['16/01/2017', '17/01/2017', '30/01/2017'], //Set Disabled Dates
      autoclose: true,
      todayHighlight: true,
    });
  });
})(jQuery);
