
$(document).ready(function() {
  //This is for setting dynamically the active class to sidebar links
      var url = window.location.href;
      var url = url.split("/").pop();
       console.log(url);
       $('ul.navbar-nav a[href="'+ url +'"]').parent().addClass('active');
       $('ul.navbar-nav a').filter(function() {
            return this.href == url;
       }).parent().addClass('active');



  //This is for showing the icon of the active sidebar link depending if it has the active class or not (the active class has to be added to the link of the current page)

  if ($(".nav-item.active img").hasClass("inactive")) {
    $(".nav-item.active img").removeClass("inactive");
  }
  if (!$(".nav-item img").hasClass("inactive")) {
    $(".nav-item.active img").addClass("inactive");
  }

//This is a client side validation for the register page, to check if both passwords are similar.
//I'm using "is-invalid" and "is-valid" bootstrap classes with some modifications.
  $("#btnSubmit").click(function () {
      var password = $("#password1").val();
      var confirmPassword = $("#password2").val();
      if (password != confirmPassword) {
          $("#password2").removeClass("is-valid").addClass("is-invalid");
          return false;
      }
      $("#password2").removeClass("is-invalid").addClass("is-valid");
      return true;
  });

//For the login, I've set that always shows "invalid" password, for you to see the functionality. But when
//you include the server-side validation for this one, the logic is the same as above, if it's not a valid password,
//you should add the "is invalid" class to that fields' ID.
  $("#btnLogin").click(function () {
      $("#loginPassword").removeClass("is-valid").addClass("is-invalid");
      return false;
  });
});

$("#more").click(function () {
//This function is intented to be used for mobile menu version, showing the "more menu" when the user clics on it, and disabling the page content and viceversa.
  if ($("#page-more").hasClass("active")) {
    $("#page-more").removeClass("active");
    $("#page-more").addClass("inactive");
    $("#page-content").removeClass("inactive");
    $("#page-content").addClass("active");
  } else if ($("#page-more").hasClass("inactive")) {
    $("#page-more").removeClass("inactive");
    $("#page-more").addClass("active");
    $("#page-content").removeClass("active");
    $("#page-content").addClass("inactive");
  }
});

//Date picker, this is the most 'friendly' I found, and it has two methods to see the end and start dates, so you can use them to query the database
// "start.format('MMMM D, YYYY') and end.format('MMMM D, YYYY'));"
// https://www.daterangepicker.com/

$(document).ready(function() {
  $('input[name="daterange"]').daterangepicker({
    "locale": {
      "format": "MMMM D, YYYY",
      "separator": " - ",
      "applyLabel": "Apply",
      "cancelLabel": "Cancel",
      "fromLabel": "From",
      "toLabel": "To",
      "customRangeLabel": "Custom",
      "weekLabel": "W",
      "daysOfWeek": [
          "Su",
          "Mo",
          "Tu",
          "We",
          "Th",
          "Fr",
          "Sa"
      ],
      "monthNames": [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
      ],
      "firstDay": 1
  },
  "startDate": "janu 28, 2020",
  "endDate": "janu 29, 2020",
   "applyButtonClasses": "btn-primary",
    "buttonClasses": "btn btn-primary",
    "cancelClass": "btn-outline-primary",
   "opens": "left"

  }, function(start, end, label) {
    console.log("A new date selection was made: " + start.format('MMMM D, YYYY') + ' to ' + end.format('MMMM D, YYYY'));
  });
})

// The MIT License (MIT)
//
// Copyright (c) 2012-2019 Dan Grossman
//
// Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:
//
// The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
//
// THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
