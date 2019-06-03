function scuberGreetingForFeet(distance){
  // Write your code here!
  if (distance <= 400){
    return 'This one is on me!'}
  else if (distance > 2500){
    return 'No can do.'}
  else if (distance > 2000){
    return 'I will gladly take your thirty bucks.'}

}

function ternaryCheckCity(town){
  // Write your code here!
  return town === "NYC"? "Ok, sounds good.": "No go.";
}

function switchOnCharmFromTip(money){
  // Write your code here!
  switch (money) {
    case 'generous':
      return "Thank you so much.";
    case 'not as generous':
      return "Thank you.";
    default:
      return "Bye.";
  }
}
