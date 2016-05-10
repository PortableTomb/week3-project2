// More Function Exercises!

// 1. Without using Math.min(), write a function called minimum() that takes two numbers
//    and outputs the smallest one to the console.
function minimum(a,b) {
 // Lowest number to be counted

if( a < b){
	return a;
} else {
	return b;
	}
}
console.log(minimum(12,27) + " is the smaller number.");

// 2. Create a new function called minimum3() to find the smallest of three numbers
function minimum3(a,b,c) {
 // Lowest number to be counted

if( a < b && a < c){
	return a;
		} else if ( b < a && b < c){
	return b;
		} else {
	return c;
		}
}
console.log(minimum3(12,9,13) + " is the smallest number.");

// 3. Declare a function called sum() that takes an array of numbers as an argument adds them.
//    i.e. sum([1, 2, 3, 4]) should return 10.
var sum = [1, 2, 3, 4].reduce(add, 0);
function add(a, b) {
	return a + b;
}
console.log("The total sum of the added array is: " + sum);

// 4. Declare a function called multiply() that takes an array of numbers and multiplies them together i.e. multiply([1, 2, 3, 4]) should return 24.

var sum = [1, 2, 3, 4].reduce(function multiply(a,b) {
	return a * b; });
console.log("The total sum of the multiplied array is: " + sum);

function multiplies() {
	var numbers = [1, 2, 3, 4];  // numbers array
	var sum = 1;				// stores sum
	for(var i=0; i < numbers.length; i++) {  	//loops through numbers array
		var current = parseFloat(numbers[i]);  // float changes arr[i] str to number
		sum = sum *= current; 	// multiplies sum * cuurent
   }
   return sum; // returns sum
}
console.log(multiplies()); //logs/calls function

// 5. Write a function called filterSixPlus() that takes the following array and removes words
//    that are less than six characters.
var words = ["window", "table", "cup", "knife", "barstool", "glass", "charger", "outlet"];

function filterSixPlus(words) { 	//declares function filterSixPlus w/ words parameter
	var tooShortWords = [];     // empty array to push to
	for(var i=0; i < words.length; i++) {  	//loops through words
		console.log(words[i]);		//logs words arrayy values
		if( words[i].length < 6) {   // if words are shorter than 6
			tooShortWords.push(words[i]);  	// push to tooShortWords array
		} 
	} 
	return tooShortWords; 	//returns tooShortWords array
}
console.log( filterSixPlus(words) ); //logs filterSixPlus(words)
// Modify Array or make new // splice
// Make sure reutrn is in right place

// 6. Use a function to ask a user for a temperature in Celsius and converts it to Fahrenheit.HINT: You may need to use parseFloat to convert the user's string input to a float.
// 7. Adding to the code in #6, prompt the user a second time to determine whether they'd like to convert from Fahrenheit to Celsius or from Celsius to Fahrenheit. To keep it simple, instruct them to use "F to C" or "C to F". Alert them with an error if they do not follow the rules.

function tempConverter() {		//declares function 
	var value = prompt("Enter C to F, For Celsius to Fahrenheit conversion. Enter F to C, For Fahrenheit to Celsius conversion.", "Enter C to F, or F to C.");  //prompt and input value
    
    if( value === "C to F"){	//if C to F 
	return tempCel();			// run function
	}	else if( value === "F to C"){	//if F to C
	return tempFahr();					// run function
	}	else {
	alert("You didn't choose C to F, or F to C."); // Stoopid alert
	}
};
console.log( tempConverter() ); //logs calls tempConverter()

// c = (f - 32)*(5/9); f = c *(9/5) + 32;
function tempCel() {  	//C to F Converter
	var value =  parseFloat(prompt("Enter a temperature in Celsius","0")); 	//?prompt input value
    var fahrNum = value *(9/5) + 32;											//temp maths
 	return "The temperature is " + fahrNum.toFixed(1) + " degrees, Fahrenheit.";	//return value
}

function tempFahr() {
	var value =  parseFloat(prompt("Enter a temperature in Fahrenheit","0")); //?prompt input value
    var celNum = (value - 32)*(5/9);											//temp maths
 	return "The temperature is " + celNum.toFixed(1) + " degrees, Celsius.";   //return value
}

// 8. Write a function countBs() that takes a string as its only argument and returns a number that indicates how many uppercase “B” characters are in the string. HINT: Google charAt()

var bB = "Bbo0bBoBbo0bBoBbo0bBoBbo0b";  //Str w/ lots of B's
function countBs() {		//declare function
	var count = 0;		//counts each B in loop
	
	for(var i = 0; i <=bB.length; i++) { 	//loop through bB string
		var char = bB.charAt(i);			//names char var for bB str characters at each loop 
			if(char === "B") {			//If str character is B count it
			count++; 
				} 
			}
		 return count; // Returns B Count
	};
 console.log("There are " + countBs() + " B's in this string."); //Logs count

// 9. Write a function called countChars() that behaves like countBs(), except it takes a
//    second argument that indicates what character is to be counted.

function countChars(){		//declares function
var count = 0;			//counts found char

	for(var i = 0; i <=bB.length; i++) { 	//loop through bB string
		var char = bB.charAt(i);			//names char var for bB str characters at each loop 
			if(char) {						//If str character count it
			count++; 							//count
//			console.log(bB.charAt(i) + " " +count);
			console.log(bB[i] + " " + count); // logs character and count
				} 
			}
 		return count; //returns count
	};
 console.log("There are " + countChars() +  " in this string."); // logs and calls function

// 10. Declare a function called ohZero that replaces all of the o's in a string with 0's.

function ohZero() {
var zer0 = "My oh my, get a load of those bazoookas!"; //original string
var newZer0 = zer0.replace(/o/g , "0"); //creates new string - replaces 0 for o
return newZer0; // returns replaced string
}
console.log(ohZero());

// 11. Write a function that prints out the entire "99 Bottles of Beer on the Wall" song lyrics.


// var list = []; // Creates empty array 
// for (var i = 0; i < 100 ; i++) { // Iterates thru 0 - 99
//     list.push(i); // Pushes numbers to list array
// }
// list.reverse(); // reverses order of list
// console.log(list); // logs list array

function ninetyNine (){
var bottlesOf;

for(beer = 99; beer >= 1; beer = beer -1){  // Beer Loop :)
	if(beer === 1){
		bottlesOf = "bottle"; //single bottle
	} else {
		bottlesOf = "bottles"; //plural bottles
	}

	console.log(beer+ " " + bottlesOf + " of beer on the wall."); 
	// Beer is number, bottlesOf defined above, rest logs song...
	if (beer < 99) { // If less than 99...
		console.log(" "); // Space...
		console.log(beer+ " " + bottlesOf + " of beer on the wall."); // Same as above
	}

	console.log(beer+ " " + bottlesOf + " of beer."); // And still more lyrics
	console.log("Take one down; Pass it around."); // repeats all the way to 1
}

	console.log(" "); // Last bit
	console.log("No more bottles of beer on the wall." );
	console.log("No more bottles of beer...");
	return ""; // Return needed for function 
}
console.log( ninetyNine() );

// 12. Create a 'Guessing Game'. The game starts by picking a random number.
//    It then prompts the user to guess the number. If the user's number is lower/higher,
//    it will prompt the user to enter another guess and tell the user if the guess was
//    too high or too low. This continues until the correct guess is entered.
//    When the correct guess is entered the user is given a success message w/ the correct number.
function guessingGame() {

var randomNumber = Math.floor(Math.random() * 10 ) + 1;  //Random num maths
var guess1 = parseFloat(prompt("I am thinking of a random number between 1 and 10. What is it?")); // guess prompt and user input value

  if (guess1 === randomNumber) { // if guess is right
  	 console.log("You guessed right! The number was " +value+ "!");
}  
	if( guess1 !== randomNumber) {  // if guess is wrong 
		if (guess1 > randomNumber) {   // promot too low or high & guess again
			var guess2 = parseFloat(prompt("Too high. Guess again."));
			} else {
			var guess2 = parseFloat(prompt("Too low. Guess again."));	
			}
	}

  if (guess2  === randomNumber) { // if second guess is right
	 console.log("You guessed right! The number was " +guess2+ "!");
} 
	if( guess2 !== randomNumber) {	  // if guess is wrong
		if (guess2  > randomNumber) {	// promot too low or high & guess again
			var guess3 = parseFloat(prompt("Still too high. Last guess."));
			} else {
			var guess3 = parseFloat(prompt("Still too low. Last guess."));	
			}
	}
  
  if (guess3  === randomNumber) {	// if third guess is right
	  alert("You guessed right! The number was " +randomNumber+ "!");
	} else {									// if third guess is wrong
	 	alert("Nope! The number was " +randomNumber+ "!");
	}
		return randomNumber; // returns rendomNumber answer
}
console.log(guessingGame()); // Logs & calls game



// 13. http://games.usvsth3m.com/javascript-under-pressure/
