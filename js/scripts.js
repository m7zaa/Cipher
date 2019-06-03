var sentence = "";

sentence = prompt("Please enter a sentence.");

function capFL(sentence) {
	return sentence.charAt(0).toUpperCase() + sentence.slice(1);
}

console.log(capFL(sentence));

var sentence2 = capFL(sentence);
var end = sentence.length - 1;

/* function capLL(sentence,end){
  return sentence.charAt(sentence.length).toUpperCase() + 		sentence.slice(sentence.length);
} */

// function capLL(sentence,end){
// 	return sentence2.charAt(0).toUpperCase() + sentence2.slice(3);
//   }
//
// confirm("continue?");
//
// console.log(capLL(sentence));

console.log(sentence2);
console.log(end);

// var letter = function(end) {
//   return sentence2.charAt(end).toUpperCase();
// }

// console.log(letter);

function LL(end) {
  console.log(sentence2);
  console.log(end);
  return sentence2.slice(0, end) + sentence2.charAt(end).toUpperCase()
};

var sentence3 = LL(end);

console.log(sentence3);
