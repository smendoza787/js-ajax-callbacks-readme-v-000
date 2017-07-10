$(document).ready(function(){
  $.get("doesntexist.html", function(data) {
    doSomethingGood();
  }).fail(function(error) {
    console.log('Something went wrong: ' + error);
  });
});
