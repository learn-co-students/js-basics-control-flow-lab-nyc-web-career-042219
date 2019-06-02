function scuberGreetingForFeet(distance) {
  // Write your code here!
  let res;
  if (distance < 400) {
    res = 'This is on me!';
  } else if (distance > 2000 && distance <= 2500) {
    res = 'I will gladly take your thirty bucks.';
  } else {
    res = 'No can do.';
  }
  return res;
}

function ternaryCheckCity(city) {
  // Write your code here!
  return city === 'NYC' ? 'Ok, sounds good.' : 'No go.';
}

function switchOnCharmFromTip(tip) {
  // Write your code here!
  let res;
  switch (tip) {
    case 'generous':
      res = 'Thank you so much.';
      break;
    case 'not as generous':
      res = 'Thank you.';
      break;
    default:
      res = 'Bye.';
      break;
  }
  return res;
}
