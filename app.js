console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1 Guessing Game

let randomNumber = Math.floor(Math.random() * 10) + 1;

let guess = +prompt("Please enter a number between 1 and 10: ");

if (isNaN(guess) || guess < 1 || guess > 10) {
  console.log("Please enter a valid number between 1 and 10.");
} else if (guess < randomNumber) {
  console.log("too low");
} else if (guess > randomNumber) {
  console.log("too high");
} else {
  console.log("Congratulations!!!");
}

// Exercise 2

let birthMonth = window.prompt("What is your birth month? ");

try {
  if (
    birthMonth === null ||
    birthMonth === undefined ||
    birthMonth.trim() === ""
  ) {
    throw new Error("Please enter a valid month.");
  }

  birthMonth = birthMonth.trim();
  birthMonth =
    birthMonth.charAt(0).toUpperCase() + birthMonth.slice(1).toLowerCase();

  switch (birthMonth) {
    case "January":
    case "February":
    case "December":
      console.log("You were born in the winter.");
      break;
    case "March":
    case "April":
    case "May":
      console.log("You were born in the spring.");
      break;
    case "June":
    case "July":
    case "August":
      console.log("You were born in the summer.");
      break;
    case "September":
    case "October":
    case "November":
      console.log("You were born in the fall.");
      break;
    default:
      throw new Error("Please enter a valid month.");
  }
} catch (error) {
  console.log(error.message);
}

// Exercise 3

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

switch (typeId) {
  case "01":
    type = "Tank top";
    break;
  case "02":
    type = "T-Shirt";
    break;
  case "03":
    type = "Long Sleeve";
    break;
  case "04":
    type = "Sweat Shirt";
    break;
  default:
    type = "Other";
}

switch (colorId) {
  case "BK":
    color = "Black";
    break;
  case "BL":
    color = "Blue";
    break;
  case "RD":
    color = "Red";
    break;
  case "PU":
    color = "Purple";
    break;
  default:
    color = "White";
}

switch (sizeId) {
  case "S":
    size = "Small";
    break;
  case "M":
    size = "Medium";
    break;
  case "L":
    size = "Large";
    break;
  case "XL":
    size = "Extra Large";
    break;
  default:
    size = "One Size Fits All";
}

console.log(`Product: ${size} ${color} ${type}`);
