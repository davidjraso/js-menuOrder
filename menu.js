// begin with a blank/new order
var order = '';


// build a function to ask questions

function question(questionText) {
 var answerInput = prompt(questionText);
  order += answerInput;
}

// call the QUESTION function with the order options
question("What do you want to order?");
question("What protein do you want?");
question("What salsa do you want?");

// output their order
document.write("<p>You ordered: " + order + "<p>");
