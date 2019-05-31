function scuberGreetingForFeet(feet){
  if (feet <= 400) {
    let response = "This one is on me!";
    return response;
  } 
  else if (feet > 2000) {
    if (feet < 2500) {
      let response = "I will gladly take your thirty bucks."
      return response; }
    else if (feet > 2500) {
      let response  = "No can do."
      return response;}
  }
}

function ternaryCheckCity(city){
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip){
  switch (tip) {
    case 'generous':
      return 'Thank you so much.';
      break;
    case 'not as generous':
      return 'Thank you.'
      break;
    default:
      return 'Bye.'
      break;
  }
}