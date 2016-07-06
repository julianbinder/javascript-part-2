//Array.prototype.sort method. Create a function that can be used with sort. This function should take two strings, and return a value that sort
//can use to determine which is the longest string. Finally, create an array of strings and try to get it sorted using your new function.
var myArray = ["you", "are", "longest child", "hola"]

function compare(a,b) {
    if (a.length<b.length) {
        return -1 ;
    };
    
     if (a.length>b.length) {
        return 1;
    }
    else {
        return 0;
    }
};


var sortedMyArray = myArray.sort(compare);

console.log(sortedMyArray);

//Create an array of objects (don’t need to use new here, just regular object literals). These objects will contain a name and email property.
//Then, run some code that will sort your array by the longest name. Then, run some code that will sort your array by e-mail address in alphabetical order.

var person1 = {
    name: "joe",
    email: "mansalilbaby@hotmail.com"
};

var person2 = {
    name: "lindsay",
    email: "aillieluvs@baby.ass"
};

var myPeople = [person1, person2];


function compareNames(a,b) {
    
    if (a.name.length<b.name.length) {
        return -1 ;
    };
    
     if (a.name.length>b.name.length) {
        return 1;
    }
    else {
        return 0;
    }
};

var sortedNames = myPeople.sort(compareNames);

console.log(sortedNames);

function compareEmails(a,b) {
    
    if (a.email.toLowerCase()<b.email.toLowerCase()) {
        return -1 ;
    };
    
     if (a.email.toLowerCase()>b.email.toLowerCase()) {
        return 1;
    }
    else {
        return 0;
    }
};

var sortedEmails = myPeople.sort(compareEmails);

console.log(sortedEmails); 

//Create a function that can be used with Array.prototype.map. This function should take a number and return its square. Then, use this function
//with map on an array of numbers to check the result.

var thatArray = [5,16,19,6,93,8766];

function squareNumb(numb) {
    return Math.sqrt(numb); 
};

var squaredArray = thatArray.map(squareNumb);

console.log(squaredArray);
//Create a function that can be used with Array.prototype.map. This function should be able to take an object and square its “num” property.
//Then, use this function with map on an array of objects each containming a “num” property.
var obj1 = {
    num: 16
};

var obj2 = {
  num: 50
};

var myObArray = [obj1, obj2];

function rootMe(yourObj) {
    return Math.sqrt(yourObj.num);
};

console.log(myObArray.map(rootMe));

///Create a function called operationMaker that takes only a string called operation as argument. This string could be “add”, “subtract”, 
//“mult” or “div”. Your function will return a function that will take two numbers and return the result of running operation on these numbers.

function operationMaker(operation) {
    return function twonumb(b,c) { 
    
    if (operation === "add") {
        return b + c;
    };
     if (operation = "subtract") { 
        return b-c;
    }
     if (operation === "mult") {
        return b * c;
    }
     if (operation === "div") {
        return b % c;
    }
    else {
        return "That is not a valid operator";
    }
    };
    
};
    
    console.log(operationMaker('add')(1,5));
    //
    



