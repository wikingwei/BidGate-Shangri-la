//# Place all the behaviors and hooks related to the matching controller here.
//# All this logic will automatically be available in application.js.
//# You can use CoffeeScript in this file: http://jashkenas.github.com/coffee-script/


$(document).ready(function(){
    
  // use jquery datepicker for some date fields
  $('#order_deadline').datepicker();
  $('#order_deadline').datepicker('option', 'dateFormat', 'yy-m-dd');
});

  