/*
* PHOBS - online booking system (C)2011.
*/
// Default selection
var defaultDestination, defaultHotel;

// Default vars
var defaultHotelSelect = '(All accommodation)';
var errorMessageDate = 'Please select correct arrival date to proceede.';
var errorMessageDestination = 'Please select desired destination from dropdown menu.';
var errorMessageHotel = 'Please select desired accommodation from dropdown menu.';
var errorMessageObject = 'Please select desired accommodation from dropdown menu.';

var destinationDefinition = new Array();
var destinationArray = new Array();

/* Datepicker lang file mapping override*/
var datepickerLanguageArray = {
   hr: 'hr',
   en: 'en',
   de: 'de',
   fr: 'fr',
   it: 'it',
   es: 'es',
   nl: 'nl',
   ru: 'ru',
   gr: 'el',
   si: 'sl',
   rs: 'sr',
   me: 'mk',
   tr: 'tr',
   ba: 'sr-SR',
   mk: 'mk',
   pt: 'pt',
   br: 'pt-BR',
   pl: 'pl',
   hu: 'hu',
   bg: 'bg'
}

/* Language definitions */
function languageObject() {};
var languageArray = new languageObject();
var shortMonthDesc = true;

// En
languageArray.en = new languageObject();
languageArray.en.monthArray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December");
// Hr
languageArray.hr = new languageObject();
languageArray.hr.monthArray = new Array("Siječanj", "Veljača", "Ožujak", "Travanj", "Svibanj", "Lipanj", "Srpanj", "Kolovoz", "Rujan", "Listopad", "Studeni", "Prosinac");
//Si
languageArray.si = new languageObject();
languageArray.si.monthArray = new Array("Januar", "Februar", "Marec", "April", "Maj", "Junij", "Julij", "Avgust", "September", "Oktober", "November", "December");
//Rs
languageArray.rs = new languageObject();
languageArray.rs.monthArray = new Array("Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar");
//Me
languageArray.me = new languageObject();
languageArray.me.monthArray = new Array("Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar");
//Ba
languageArray.ba = new languageObject();
languageArray.ba.monthArray = new Array("Januar", "Februar", "Mart", "April", "Maj", "Jun", "Jul", "Avgust", "Septembar", "Oktobar", "Novembar", "Decembar");
//Tr
languageArray.tr = new languageObject();
languageArray.tr.monthArray = new Array("Ocak", "Şubat", "Mart", "Nisan", "Mayıs", "Haziran", "Temmuz", "Ağustos", "Eylül", "Ekim", "Kasım", "Aralık");
//Gr
languageArray.gr = new languageObject();
languageArray.gr.monthArray = new Array("Ιανουά??ιος", "Φεβ??ουά??ιος", "Μά??τιος", "Απ??ίλιος", "Μάιος", "Ιούνιος", "Ιούλιος", "Αύγου??τος", "Σεπτέμβ??ιος", "Σεπτέμβ??ιος", "Νοέμβ??ιος", "Δεκέμβ??ιος");
// De
languageArray.de = new languageObject();
languageArray.de.monthArray = new Array("Januar", "Februar", "Marz", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember");
// Fr
languageArray.fr = new languageObject();
languageArray.fr.monthArray = new Array("Janvier", "F?vrier", "Mars", "Avril", "Mai", "Juin", "Juillet", "Aout", "Septembre", "Octobre", "Novembre", "D?cembre");
// It
languageArray.it = new languageObject();
languageArray.it.monthArray = new Array("Gennaio", "Febbraio", "Marzo", "Aprile", "Maggio", "Giugno", "Luglio", "Agosto", "Settembre", "Ottobre", "Novembre", "Dicembre");
// Ru
languageArray.ru = new languageObject();
languageArray.ru.monthArray = new Array("Январь", "Февраль", "Март", "??прель", "Май", "??юнь", "??юль", "??вг????т", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь");
//Es
languageArray.es = new languageObject();
languageArray.es.monthArray = new Array("enero", "febrero", "marzo", "abril", "mayo", "junio", "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre");
//Nl
languageArray.nl = new languageObject();
languageArray.nl.monthArray = new Array("Januari", "Februari", "Maart", "April", "Mei", "Juni", "Juli", "Augustus", "September", "Oktober", "November", "December");
//Mk
languageArray.mk = new languageObject();
languageArray.mk.monthArray = new Array("??ан??ари", "Февр??ари", "Март", "??прил", "Ма??", "????ни", "????ли", "??вг????т", "Септември", "Октомври", "Ноември", "Декември");
//Pt
languageArray.pt = new languageObject();
languageArray.pt.monthArray = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
//Br
languageArray.br = new languageObject();
languageArray.br.monthArray = new Array("Janeiro", "Fevereiro", "Março", "Abril", "Maio", "Junho", "Julho", "Agosto", "Setembro", "Outubro", "Novembro", "Dezembro");
//Pl
languageArray.pl = new languageObject();
languageArray.pl.monthArray = new Array("Styczeń", "Luty", "Marzec", "Kwiecień", "Maj", "Czerwiec", "Lipiec", "Sierpień", "Wrzesień", "Październik", "Listopad", "Grudzień");
//Hu
languageArray.hu = new languageObject();
languageArray.hu.monthArray = new Array("Január", "Február", "Március", "??prilis", "Május", "Június", "Július", "Augusztus", "Szeptember", "Október", "November", "December");
//BG
languageArray.bg = new languageObject();
languageArray.bg.monthArray = new Array("Януари", "Февруари", "Март", "Април", "Май", "Юни", "Юли", "Август", "Септември", "Октомври", "Ноември", "Декември");


/*
* DEFAULT LIST
*
*/
// Destinations...
destinationDefinition[0] = new Array('85310','Budva');

// Array init
for (var i = 0; i<destinationDefinition.length; i++) {destinationArray[i] = new Array();}

// Hotels...
destinationArray[0][0] = new Array('f6e540ff6a059c219039032332881124', 'Kala Rooms & Suites');

/*
***************************************************************************
*                                     Functions
*
*/
// Set hotel list
function setHotelList() {
   var forma = document.forms['phobs_book'];
   var myDestination = forma.elements['destination'];
   var myHotels = forma.elements['hotel'];

   // Reset hotel list
   for (var t = 0; t < myHotels.length; t++) {
      while (myHotels.options[t] != null) {
         myHotels.options[t] = null;
      }
   }
   if (myDestination.options[myDestination.selectedIndex].value == '-') {
      myHotels.options[myHotels.length] = new Option(defaultHotelSelect, '-');
      if (destinationArray.length) {
         var newDestination;
         for (var a = 0; a < destinationArray.length; a++) {
            for (b = 0; b < destinationArray[a].length; b++) {
               newDestination = destinationArray[a][b];
               myHotels.options[myHotels.length] = new Option(newDestination[1], newDestination[0]);
            }
         }
      }
   } else {
      // Pick
      var destinationPick;
      for (var i = 0; i<destinationDefinition.length; i++) {
         if (destinationDefinition[i][0] == myDestination.options[myDestination.selectedIndex].value) {
            destinationPick = i;
            break;
         }
      }
      // Hotels
      var hotelList = destinationArray[destinationPick];
      myHotels.options[myHotels.length] = new Option(defaultHotelSelect, '-');
      for (var i = 0; i < hotelList.length; i++) {
         myHotels.options[myHotels.length] = new Option(hotelList[i][1], hotelList[i][0]);
      }
   }
}

   // Setup
   function phobsSetupForm() {
      var forma = document.forms['phobs_book'];
      var myDestination = forma.elements['destination'];
      var myHotels = forma.elements['hotel'];
      var myLang = forma.elements['lang'];
      var danSelect = forma.elements['check_in_day'];
      var mjesecSelect = forma.elements['check_in_month'];
      var godinaSelect = forma.elements['check_in_year'];

      // Set date
      var arrivalDate = new Date();
      arrivalDate = new Date(arrivalDate.getYear(), arrivalDate.getMonth(), arrivalDate.getDate());
      var dan = arrivalDate.getDate();
      var mjesec = arrivalDate.getMonth();
      var godina = arrivalDate.getFullYear();
      if (godina<999) {godina += 1900;}
      
      

      
      // Language config
      if (myLang &&  myLang.value) {
         var myLangObject = eval('languageArray.' + myLang.value.toLowerCase());
         for (var i=0; i < mjesecSelect.length; i++) {
            var mothText = (shortMonthDesc) ? myLangObject.monthArray[i].substr(0, 3) : myLangObject.monthArray[i];
            mjesecSelect[i].text = mothText;
         }
      }

      // Fix godina
      for (var t = 0; t < godinaSelect.length; t++) {
         while (godinaSelect.options[t] != null) {
            godinaSelect.options[t] = null;
         }
      }
      godinaSelect.options[godinaSelect.length] = new Option(godina, godina);
      godinaSelect.options[godinaSelect.length] = new Option((parseInt(godina)+1), (parseInt(godina)+1));
      // date...
      for (var i=0; i < danSelect.length; i++) {
         if (parseInt(danSelect[i].value) == parseInt(dan)) {
            danSelect[i].selected = true;
         }
      }
      for (var i=0; i < mjesecSelect.length; i++) {
         if (parseInt(mjesecSelect[i].value) == (parseInt(mjesec)+1)) {
            mjesecSelect[i].selected = true;
         }
      }

      
      /*
      * Default selection...
      */
      // Destination
      if (myDestination) {
         if (defaultDestination && defaultDestination.length && myDestination.length) {
            var myDestinationSelection = false;
            for (var i = 0; i < myDestination.length; i++) {
               if (myDestination[i].value == defaultDestination) {
                  myDestination[i].selected = true;
                  myDestinationSelection = true;
                  break;
               }
            }
            if (myDestinationSelection) {
               setHotelList();
            }
         }
      }
      // Hotel
      if (defaultHotel && defaultHotel.length && myHotels && myHotels.length) {
         var toBreak = false;
         for (var x = 0; x < destinationArray.length; x++) {
            for (var y = 0; y < destinationArray[x].length; y++) {
               if (defaultHotel == destinationArray[x][y][0]) {
                  // Get destination
                  if (myDestination) {
                     if (destinationDefinition && destinationDefinition.length && myDestination.length) {
                        for (var i = 0; i < myDestination.length; i++) {
                           if (myDestination[i].value == destinationDefinition[x][0]) {
                              myDestination[i].selected = true;
                              break;
                           }
                        }
                        setHotelList();
                     }
                  }
                  // Set hotel
                  for (var i = 0; i < myHotels.length; i++) {
                     if (myHotels[i].value == defaultHotel) {
                        myHotels[i].selected = true;
                        toBreak = true;
                        break;
                     }
                  }
                  toBreak = true;
                  break;
               }
            }
            if (toBreak) {
               break;
            }
         }
      }
   }
   