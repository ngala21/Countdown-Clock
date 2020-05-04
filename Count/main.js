var count = newDate("may 10,2020 00:00:00").getTime();
var x = setInterval(function(){
  var now = newDate().getTime();
  var d = count - now;

  var days = Math.floor(d/(1000*60*60*24));
  var hours = Math.floor((d%(1000*60*60*24))/(1000*60*60));
  var minutes = Math.floor((d%(1000*60*60))/(1000*60));
  var seconds = Math.floor((d%(1000*60))/1000);

  document.getElementById("days").innerHTML = days;

},1000);