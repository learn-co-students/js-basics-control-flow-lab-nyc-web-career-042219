function scuberGreetingForFeet(feet){
  // Write your code here!
  let response;
  if (feet <= 400){
      response = "This one is on me!";
  } else if (feet > 2000 && feet <= 2500){
      response = "I will gladly take your thirty bucks."
  } else {
      response = "No can do."  
  }
  return response;
}
 

function ternaryCheckCity(city){
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.': 'No go.';
}

function switchOnCharmFromTip(tip){
  // Write your code here!
  let response;
  switch(tip){
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