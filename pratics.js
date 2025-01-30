document.write("JAva Script");
console.log("good morning");
document.getElementById("oo").innerHtml = "vivek patel";

// variable
let a = 20;
var b = 30;
const f = 50;
var c = 40;
var d = a + b;
document.write(d + "\n\n");
let g = b + c;

document.write(g + "\n");

// arithmetic oprator
d = c + d;
document.write(d + "\t\t\t");
d = c - d;
document.write(d + "\t\t\t");
d = c / d;
document.write(d + "\t\t\t");
d = c % d;
document.write(d + "\t\t\t");
d = c ** d;
document.write(d);
d++; //increment
d--; //dcrement

c = 20;
d = 10;

// assignment  oprator
d += c;
document.write(d + "\t\t\t");
d -= c;
document.write(d + "\t\t\t");
d /= c;
document.write(d + "\t\t\t");
d %= c;
document.write(d + "\t\t\t");

//undefind value

let carName;

// Comparison Operators

var q = (a == b);
document.write(q + "\t\t\t");
var p = a > b;
document.write(p + "\t\t\t");
var r = a < b;
document.write(r + "\t\t\t");
var e = a != b;
document.write(e + "\t\t\t");
var h = a !== b;
document.write(h + "\t\t\t");

// Logical Operators

// &&  logical and
// ||  logical or
// !    logical not

//JavaScript Data Types

// Numbers:
let length = 16;
let weight = 7.5;

// Strings:
let color = "Yellow";
let lastName = "Johnson";

// Booleans
let x = true;
let y = false;

// Object:
const person = { firstName: "John", lastName: "Doe" };

// Array object:
const cars = ["Saab", "Volvo", "BMW"];

// Date object:
const date = new Date("2022-03-25");




// JavaScript Functions
function name(parameter1, parameter2, parameter3) {
    // code to be executed
}

let k = myfuc(3, 4);
document.write(k);

function
myfuc(n, m) {
    return n * m;
}

// JavaScript Objects
const car = { type: "Fiat", model: "500", color: "white" };
document.getElementById("demo").innerHTML =
    "The car type is " + car.model + car.type;




const person2 = {};

// Add Properties
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

//Using the new Keyword

const person1 = new Object();
person.firstName = "John";
person.lastName = "Doe";
person.age = 50;
person.eyeColor = "blue";

//Accessing Object Properties
person.firstName;
person.age;
person1["eyeColor"];


//Accessing JavaScript Properties
const p = {};
p.name = "vivek";
p.age = 25;
document.getElementById("info").innerHTML = p.name + " " + p.age;

// Displaying Object Properties

// Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Display Properties
document.getElementById("demo").innerHTML =
    person.name + "," + person.age + "," + person.city;

// Displaying Properties in a Loop

// Create an Object
const person = {
    name: "John",
    age: 30,
    city: "New York"
};

// Build a Text
let text = "";
for (let x in person) {
    text += person[x] + " ";
};

// Display the Text
document.getElementById("demo").innerHTML = text;

// Create an Array
const myArray = Object.values(person);

// Using Object.entries()

const fruits = { Bananas: 300, Oranges: 200, Apples: 500 };

let text1 = "";
for (let [fruit, value] of Object.entries(fruits)) {
    text += fruit + ": " + value + "<br>";
}


// Adding New Properties
person.nationality = "English";



// JavaScript Object Constructors

// String length
// String charAt()
// String charCodeAt()
// String at()
// String[]
// String slice()
// String substring()
// String substr()
//     -- -- -- -- --See Also:
//     String Search Methods
// String Templates
// String toUpperCase()
// String toLowerCase()
// String concat()
// String trim()
// String trimStart()
// String trimEnd()
// String padStart()
// String padEnd()
// String repeat()
// String replace()
// String replaceAll()
// String split()


// JavaScript String indexOf()

let text12 = "Please locate where 'locate' occurs!";
let index = text.indexOf("locate");


// JavaScript String lastIndexOf()

let text3 = "Please locate where 'locate' occurs!";
let index1 = text.lastIndexOf("locate");

// JavaScript String match()

let text4 = "The rain in SPAIN stays mainly in the plain";
text.match("ain");


// JavaScript String matchAll()

let te = "I love cats. Cats are very easy to love. Cats are very popular."
const iterator = text.matchAll("Cats");

// JavaScript String includes()

let tex = "Hello world, welcome to the universe.";
text.includes("world");

// JavaScript String startsWith()
let ext = "Hello world, welcome to the universe.";


// text.startsWith("Hello");JavaScript String endsWith()
let xt = "John Doe";
text.endsWith("Doe");


// The Number.parseFloat() Method

Number.parseFloat("10");
Number.parseFloat("10.33");
Number.parseFloat("10 20 30");
Number.parseFloat("10 years");
Number.parseFloat("years 10");

//The Number.parseInt() Method

Number.parseInt("-10");
Number.parseInt("-10.33");
Number.parseInt("10");
Number.parseInt("10.33");
Number.parseInt("10 20 30");
Number.parseInt("10 years");
Number.parseInt("years 10");


// JavaScript EPSILON
let l = Number.EPSILON;


// JavaScript MAX_VALUE
let o = Number.MAX_VALUE;

// JavaScript MIN_VALUE
let x1 = Number.MIN_VALUE;

// JavaScript Arrays
const array_name = [item1, item2, ];

const cars1 = ["Saab", "Volvo", "BMW"];

const car1 = [];
cars[0] = "Saab";
cars[1] = "Volvo";
cars[2] = "BMW";

// Using the JavaScript Keyword new

const cars = new Array("Saab", "Volvo", "BMW");

// Accessing Array Elements
const cars = ["Saab", "Volvo", "BMW"];
let car2 = cars[0];


// Access the Full Array
const fruit = ["Banana", "Orange", "Apple", "Mango"];
document.getElementById("demo").innerHTML = fruits.toString();


// Array Properties and Methods

cars.length
cars.sort()

// Looping Array Elements

const fruis = ["Banana", "Orange", "Apple", "Mango"];
let fLen = fruits.length;

let tt = "<ul>";
for (let i = 0; i < fLen; i++) {
    text += "<li>" + fruits[i] + "</li>";
}
text += "</ul>";

// Adding Array Elements
const fruits1 = ["Banana", "Orange", "Apple"];
fruits.push("Lemon");



// Associative Arraysconst person = [];
person["firstName"] = "John";
person["lastName"] = "Doe";
person["age"] = 46;
person.length; // Will return 0
person[0];



// Basic Array Methods
// Array length
// Array toString()
// Array at()
// Array join()
// Array pop()
// Array push()



//Conditional Statements


//The if Statement
if (hour < 18) {
    greeting = "Good day";
}
// The else Statement
if (hour < 18) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}
//The else if Statement
if (time < 10) {
    greeting = "Good morning";
} else if (time < 20) {
    greeting = "Good day";
} else {
    greeting = "Good evening";
}


//The JavaScript Switch Statement
switch (new Date().getDay()) {
    case 0:
        day = "Sunday";
        break;
    case 1:
        day = "Monday";
        break;
    case 2:
        day = "Tuesday";
        break;
    case 3:
        day = "Wednesday";
        break;
    case 4:
        day = "Thursday";
        break;
    case 5:
        day = "Friday";
        break;
    case 6:
        day = "Saturday";
}


//JavaScript For Loop
for (let i = 0; i < cars.length; i++) {
    text += cars[i] + "<br>";
}

//The For In Loop
const person = { fname: "John", lname: "Doe", age: 25 };

let text45 = "";
for (let x in person) {
    text45 += person[x];
}

//For In Over Arrays
const numbers = [45, 4, 9, 16, 25];

let txt = "";
for (let x in numbers) {
    txt += numbers[x];
}

// The While Loop
while (i < 10) {
    text += "The number is " + i;
    i++;
}
//The Break Statement
for (let i = 0; i < 10; i++) {
    if (i === 3) { break; }
    text += "The number is " + i + "<br>";
}

//The Continue Statement

for (let i = 0; i < 10; i++) {
    if (i === 3) { continue; }
    text += "The number is " + i + "<br>";
}
text += "The number is " + i + "<br>";