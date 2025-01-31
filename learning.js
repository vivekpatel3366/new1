/*
   javascript is used to intractive youe web page.

   variable
console.log
document.write()
typeof
+ operator 
if-elseif-else
confirm
for
array
function 
class 
object
multi dimensional array and object
forEach 
*/
var v = "MR. Raju"
console.log("hello good morning", v);
document.write('Today We are start to learn about java script');
document.getElementById('jj').innerHTML = "vivek patel";

//variable= variable is a one type of storage data.
/*
 How to create variable in java script?
   in java script 3 way to create a variable.
     var variablename = value; -> we can create normal variable using var key word so we can change value using redeclaration process
                        and using some assignment oparetor
     let variablename = value; -> we can change value using any assigment oparetor or increament decreament oparetor but we can't redeclearation variaable.
     const variablename = value; ->Fix value.
*/

console.log("Hello Good Morning");
document.write('Today We are start to learn about java script');


var Company_type = 'pvt ltd';
console.log(Company_type);
var Company_name = 'ThatsEnd technology';
console.log(Company_name);
let Company_gst_number = 1645372828;
console.log(Company_gst_number);
//let Company_gst_number = 1631245372828;
Company_gst_number++;
console.log(Company_gst_number);

var b = 'ThatsEnd';
console.log(b);

const Company_CEO = 'NiravRaj';
console.log(Company_CEO);
//const Company_CEO = 'Dileshsinh';
const num = 120;
//num++;
console.log(num);
document.getElementById('p-5').innerHTML = 'Harsh';


const vivek = {
    first_name: "Vivek",
    Last_name: "Patel",
    age: 20,
    city: "Surat",
    fullname: function() {
        return (this.first_name + " " + this.Last_name + " " + this.age).toUpperCase;
        document.write(this.first_name + "" + this.city)
    }
};
document.getElementById("demo1").innerHTML = person;
console.log(typeof(num));
console.log(typeof(Company_type));
//

function myfnc(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;
    console.log(this.firstName);
}
const myFather = new Person("John", "Doe", 50, "blue");
document.write(myFather.firstName);
document.getElementById("good").innerHTML =
    "My father is " + myFather.age + "."; //typeof = it is a function to identify type of data
/*
  in java script number of type data available
   number = if we assign numeric value with decimal point or without decimal point it's consider as number type
   string = if you have to assign value using single quate or double quate then it consider as string type.
   boolean = it have only two values true or false.
   object/array =



*/
var b = 'nfgksd';
console.log(typeof(num));
var num1 = 23.45;
console.log(typeof(num1));
var strnumber = '4673';
console.log(typeof(strnumber));
console.log(typeof(b));
var sbc = true;
console.log(typeof(sbc));
var sbf = num1 > num;
console.log(typeof(sbf));
var sbc = 'true';
console.log(typeof(sbc));

/*
  oaaparetor 
  how many types of oparetor in js?
   arithamatic oparetor = it is used to perfom some calculation oparetion.
       addition(+)
       substraction(-)
       multiplication(*)
       division(/)
       exponential(**)

   comparission oarator = compare two or more same things
           lessthen(<) = first value is lessthen second value.
           greaterthen(>) = first value is greater then second value
           equalto(==) = check both value is equal.
           notequalto(!=)= it is use to check differant value.
            greaterthen or equalto(>=) = first value is greatethen or equalto second value.
           lessthen or equalto (<=) = first value is lesserthen second value.
           identical(===) = it is used to check value and data type both.
 assigment oparetor
      =
     +=
     -=
     *=
     /=
     **=
     %=

     /* logical oparetor
   AND (&&) - it is given result true when all condition is true. it is used to compulsary required field.
         T + T = T
         T + F = F
         F + T = F
         F + F = F
   OR   (||) = it is given result true if any one or all condition is true.
         T + T = T
         T + F = T
         F + T = T
         F + F = F
   NOT (!) = it is convert your result into oposite result.
        T = F
        F = T

*/
/*
  loop = if you perform same process multiple time then we can use loop.
  How many loop?
    for loop 
      syntex: for(value initialize; condition; process)
              {
                code;
              }
    while loop
      while(codnition){
        code;
        process;
      }
    do while loop
    do{
      code;
      process;
    }while(condition);
    
*/

// function = it is a block of code to perform specific task
/*
   How to write function?
     syntex:
         function(){
            process code;
         }
   how to call function?
     syntex:-
         function_name();         
*/
// without peramiter function/static function
//with parameter/dynamic function//oops= object oriented programs
/*
  class
      class is a block of code for similler type method and variable.
   How to create class?
      class className{
      
      }
  object = object is a instance of class.
 How to create object?
     syntex:- new classname();
     var variablename = new classname();
  member variable and function
   how to create variable in class?
      variablename = value;
   How to access variable out side the class.
      syntex:- objvariablename.classVariableName;   
   How to access variable inside the class method?
       syntex:- this.variablename;   
   How to create method inside the class?
       syntex:- functionName(){
       
       }   
   How to call class method out side the class?
     syntex:- objVariable.methoname();
   How to call method inside class other method.
     syntex:- this.methodname();        
   construct = construct is a one type of megic method if we create object then this method automatically call.
        syntex:- __construct(){
             
        }
  inheretance = we can use one class property 
 

*/