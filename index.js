// Write your code in this file!

function scuberGreetingForFeet(feet){
  
if (feet <=400)  
  return 'This one is on me!'; 
  if (feet >2500)
  return 'No can do.';
if (feet >=2000)
  return 'I will gladly take your thirty bucks.';

}
function ternaryCheckCity (city) {
 return  (city==="NYC") ? 'Ok, sounds good.': 'No go.';
}

function switchOnCharmFromTip(response) {
 switch (response) { 
   case "generous":
        response ="Thank you so much.";
        break;
    case'not as generous':
        response = 'Thank you.';
        break;
    case'thanks for everything':
        response = 'Bye';
      }

}