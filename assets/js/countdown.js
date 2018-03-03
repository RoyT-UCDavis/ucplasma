

var countDownDate = new Date("April 28, 2018 16:50:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get todays date and time
  var now = new Date().getTime();

  // Find the distance between now an the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  
    
    var secondss = String(seconds);
    var minutess = String(minutes);
    var hourss = String(hours);
    var dayss = String(days);
    if(seconds<10){
            secondss = "0"+secondss; 
    }
    if(minutes<10){
        minutess = "0" + minutess; 
    }
    if(hours<10){
        hourss = "0"+hourss;
    }
    if(days<10){
        dayss = "0" + dayss;
    }
  // Display the result in the element with id="demo"
  document.getElementById("countdown").innerHTML = dayss + " " + hourss + " "
  + minutess + " " + secondss + " ";
  
  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("countdown").innerHTML = "EXPIRED";
  }
}, 1000);