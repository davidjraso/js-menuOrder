// begin with a blank/new order
var order = '';
var main = '';
var last = '';


// build a function to ask questions

function question(questionText) {
 var answerInput = prompt(questionText);
  order += answerInput + ' ';
}

function questionMain(questionText) {
 var answerInput = prompt(questionText);
  main += answerInput;
}

function questionLast(questionText) {
 var answerInput = prompt(questionText);
  last += answerInput;
}

function questionRespond(questionText, food) {
 var answerInput = prompt(questionText);
 if ( answerInput.toUpperCase() === "YES" ) {
  order += food + ' ';
 }
  main += answerInput;
}

// call the QUESTION function with the order options
questionMain("What do you want to order?");
question("What protein do you want?");
questionRespond("Do you want beans?", "beans");
questionRespond("Do you want rice?", "rice");
questionRespond("Do you want vegetables?", "vegetables");
questionRespond("Do you want cheese?", "cheese");
questionRespond("Do you want lettuce?", "lettuce");
question("Which type of salsa do you want?");
questionLast("Do you want guac?", "guac");

// output their order
document.write("<p>You ordered a: " + main + " with " + order + " and " + last + "<p>");
document.write("<p>Have a great day!<p>");
