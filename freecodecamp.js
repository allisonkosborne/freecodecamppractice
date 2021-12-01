//var myName = "Allison"
//myName = 10

//let ourName = "Allison Osborne" //within the scope from where you declared it

//const pi = 3.14 //never changes

//const a //declaring a variable - different than assigning
//const b = 2; //equal sign is the assignment operator - two is being assigned to be, not checking
const a = 5;
const b = 15;
const c = "I am a"; //initalized variables

//myVar--; minus one

let firstName = "Allison";
let lastName = "Osborne";
let myString = 'This is called a "String".';
let ourStr = "I come first." + "I come second.";

let someAdjective = "vegan.";
let myStr = "I am a ";
myStr += someAdjective;

let firstName = "Allison";
let lastLetterOfFirstName =
  firstName[firstName.length - 1]; /*how to get the last letter
of the string*/

const wordBlanks = (myNoun, myAdjective, myVerb, myAdverb) => {
  const result = "";
  return result;
}; //a function - passing arguments into the function when you CALL IT; parameters beforehand

let ourArray = [50, 60, 70];
let ourData = ourArray[0]; //50

let ourArray = [18, 64, 99];
ourArray[0] = 45; //new array equals [18,45,99]
//console.log(ourArray)

let ourArray = ["Vegans", "Animals", "Strength Training"];
ourArray.push(["Programmer", "Gardender"]); //add items onto an array

let myArray = [
  ["Liz", 30],
  ["Rob", 35],
];
myArray.push(["cats", 3]); //add items onto an array

let ourArray = [1, 2, 3];
let removalFromArray =
  ourArray.pop(); /*removes the last element, 3, and assigns it
to removalFromArray, leaving the rest of the array as [1,2]*/

let OurArray = ["Leaf", "Nala", "Shiva", "Louie"];
let removalFromArray =
  ourArray.shift(); /*removes first element so Leaf is assigned
to removalFromArray and the array of strings is just the last three pets*/

let ourArray = ["Leaf", "Shiva", "Louie", "Nala"];
ourArray.shift(); //not assigning anything - just letting the first element go
ourArray.unshift("Wonderful"); //adding a new elemenet at the beginning of the array

const ourReusableFunction = () => {
  console.log.apply("Heyya, World");
};
ourReusableFunction(); /* the inside of the function is used every time the function is
called - you could console.log this multiple times to get it to say that 3x if you wanted*/

const functionwithArgs = (a, b) => {
  console.log(a + b);
};
functionwithArgs(10, 6);

const minusSeven = (num) => {
  return num - 7;
};
console.log(minusSeven(10)); //returning a value from a function

const timeFive = (num) => {
  return num * 5;
};
console.log(timesFive(5)); //returning a value from a function

/*If you DON'T SPECIFY the return value, the return value is undefined.*/

var changed = 0;
const change = (num) => {
  return (num + 5) / 3;
};

changed = change(10); /*assigning a return value to a variable - changed equals 
the return value of this function */

const welcomeToBooleans = () => {
  return false;
}; //booleans

const ourTrueorFalse = (isItTrue) => {
  //IF STATEMENTS
  if (isItTrue) {
    return "Yes, it's true";
  }
  return "No, it's false";
};
const ourTrueorFalse = (wasThatTrue) => {
  if (wasThatTrue) {
    return "Yes, that was true";
  }
  return "No, that was false";
};
console.log(ourTrueorFalse(true));

const testEqual = (val) => {
  if (varl == 12) {
    /* two equal signs because we aren't 
    assigning a value - we are checking if the value equals that number, 12 */
    return "Equal";
  }
  return "Not Equal";
};
console.log(10);

3 === "3"; //false - not equal
3 == "3"; //true - equal

const testNotEqual = (val) => {
  //comparison with the inequality operator
  if (val != 99) {
    // !== is the strict inequality operator - doesn't convert types
    return "Not Equal";
  }
  return "Equal";
};
console.log(testNotEqual(10)); //not equal to 99

const testGreaterThan = (val) => {
  //greater than
  if (val > 100) {
    return "Over 100";
  }
  if (val >= 10) {
    //greater than or equal to
    return "Over 10";
  }
  return "10 or Under";
};
console.log(testGreaterThan(10));

const testLessThank = (val) => {
  //less than operator
  if (val < 25) {
    return "Under 25";
  }
  if (val <= 55) {
    //less than or equal
    return "Under 55";
  }
  return "55 or Over";
};

const testLogicalAnd = (val) => {
  // OR  if (val <= 50 && val >= 25) - using two statements at the same time
  if (val <= 50) {
    if (val >= 25) {
      return "Yes!";
    }
  }
  return "No!";
};

//   || is the symbol for OR when using two statements

const testElse = (val) => {
  var result = "";
  if (val > 5) {
    result = "Bigger than 5";
  }
  if (val <= 5) {
    result = "5 or Smaller"; /* use Else Statement instead: else {result...*/
  }
  return result;
};

const orderMyLogic = () => {
  if (val < 5) {
    return "Less Than 5";
  } else if (val < 10) {
    return "Less Than 10";
  } else {
    return "Greater than or equal to 10"; //Logical Order in If Else Statements
  }
};

const testSize = (num) => {
  //ELSE IF Statements
  if (num < 5) {
    return "Tiny";
  } else if (num < 10) {
    return "Small";
  } else if (num < 15) {
    return "Medium";
  } else if (num < 20) {
    return "Large";
  } else num <= 20;
  {
    return "Huge";
  }
};

const names = [
  "Hole-in-one!",
  "Eagle",
  "Birdie",
  "Par",
  "Bogey",
  "Double Bogey",
  "Go home!",
];
const golfScore = (par, strokes) => {
  if (strokes == 1) {
    return names[0];
  } else if (strokes <= par - 2) {
    return names[1];
  } else if (strokes == par - 1) {
    return names[2];
  } else if (strokes == par) {
    return names[3];
  } else if (strokes == par + 1) {
    return names[4];
  } else if (strokes == par + 2) {
    return names[5];
  } else if (strokes >= par + 3) {
    return names[6];
  }
  return "Change Me";
};
console.log(golfScore(5, 4));

/*Learned about Switch Statements - come back */

const isLess = (a, b) => {
  /*Returning a true or false value/boolean in a function*/
  if ((a, b)) {
    return true;
  } else {
    return false;
  }
};
isLess(10, 15);

/* Write it like this instead*/
const isLess = (a, b) => {
  return a < b;
};
console.log(isLess(10.15));

/*Return EARLY PATTERN FOR FUNCTIONS*/
const abTest = (a, b) => {
  if (a < 0 || b < 0) {
    return undefined;
  }
};

/*DOT NOTATION!!!!*/
const testObj = {
  hat: "ballcap",
  shirt: "jersey",
  shoes: "cleats",
};

const hatValue = testObj;
const shirtValue = testObj;
