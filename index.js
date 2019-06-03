function scuberGreetingForFeet(ride){
    let response;
    if (ride <= 400) {
      response = "This one is on me!"
  } else if (ride > 2000 && ride < 2500) {
      response = "I will gladly take your thirty bucks."
  } else if (ride > 2500) {
      response = "No can do."
    }
    return response
}

function ternaryCheckCity(city){
  // Write your code here!
  // return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
      if (city === 'NYC'){
      return 'Ok, sounds good.'
    } else {
      return 'No go.'
    }
}


function switchOnCharmFromTip(tip){
  // Write your code here!
      let response;
      // this is kind of case menu in ruby
     switch (tip) {
       case 'generous':
         response = 'Thank you so much.';
         break;
       case 'not as generous':
         response = 'Thank you.';
         break;
       default:
         response = 'Bye.';
         break;
     }
     return response;
}
