for (var i = 1; i < 100; i++) {
  
 if ((i % 5 == 0) && (i % 3 == 0)) {
    $('div').append("<br>fizzbuzz"); 
  }
  else if (i % 3 == 0) {
    $('div').append("<br>fizz");
  }
  else if (i % 5 == 0) {
    $('div').append("<br>buzz");
  }
  else {
      $('div').append('<br>'+i);
  }
};