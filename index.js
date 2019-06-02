function scuberGreetingForFeet(length){
  if(length < 400) {
    return 'This one is on me!'
  }else if (length >2000 && length < 2500) {
    return 'I will gladly take your thirty bucks.'
  } else {
    return 'No can do.'
  }

}

function ternaryCheckCity(city){
  if (city === 'NYC'){
    return 'Ok, sounds good.'
  } else {
    return 'No go.'
  }
  // Write your code here!
}

function switchOnCharmFromTip(tip){
  if(tip === 'generous'){
    return 'Thank you so much.'
  } else if(tip === 'not as generous'){
    return 'Thank you.'
  } else {
    return 'Bye.'
  }
  // Write your code here!
}