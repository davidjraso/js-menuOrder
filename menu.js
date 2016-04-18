// begin with a blank/new order
var order = '';
var main = '';
var last = '';


// build a function to ask questions

function questionProtein(questionText) {
 var answerInput = prompt(questionText);
  protein += answerInput + ' ';
}

function questionMain(questionText) {
 var answerInput = prompt(questionText);
  main += answerInput;
}

function questionLast(questionText) {
 var answerInput = prompt(questionText);
  if ( answerInput.toUpperCase() === "YES" ) {
  last += "guac";
 } else {
  last += "no guac"
 }
}

function questionRespond(questionText, food) {
 var answerInput = prompt(questionText);
 if ( answerInput.toUpperCase() === "YES" ) {
  order += food + ' ';
 }
}

// call the QUESTION function with the order options
questionMain("What do you want to order?");
questionProtein("What protein do you want?");
questionRespond("Do you want beans? (yes or no)", "beans");
questionRespond("Do you want rice? (yes or no)", "rice");
questionRespond("Do you want vegetables? (yes or no)", "vegetables");
questionRespond("Do you want cheese? (yes or no)", "cheese");
questionRespond("Do you want lettuce? (yes or no)", "lettuce");
questionLast("Do you want guac?", "guac");

// output their order
document.write("<p>You ordered a: " + main + " with " + protein + order + " and " + last + "<p>");
document.write("<p>Have a great day!<p>");
