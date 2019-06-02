function scuberGreetingForFeet(rideDistance){
  // Write your code here!
  let result
  if (rideDistance <= 400) {
    result = "This one is on me!";
  }
  else if (rideDistance > 2000 && rideDistance <= 2500) {
    result = "I will gladly take your thirty bucks.";
  }
  else if (rideDistance > 2500) {
    result = "No can do.";
  }
return result
}


function ternaryCheckCity(cityName){
  // Write your code here!
  return cityName === 'NYC' ? "Ok, sounds good." : "No go.";
}

function switchOnCharmFromTip(tipAmount){
  // Write your code here!
  let result;
  if (tipAmount === 'generous') {
    result = "Thank you so much.";
  }
  else if (tipAmount === 'not as generous') {
    result = "Thank you.";
  }
  else {
    result = "Bye.";
  }
  return result
}
