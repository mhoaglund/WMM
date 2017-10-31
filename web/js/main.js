//Javascript, for now, is best described according to Data Types, Objects and Functions.
//This is the fundamental stuff. It gets more complicated the more you use it!
//Here are some data types:

//See the 'var' thing? That's a sign that we are CREATING a variable to use later.
var my_number = 30 //This is a "number". JS can multiply this number or divide or whatever.
my_number = my_number * 3
console.log(my_number)

var my_string = 'hoaglund' //Text is organized using a "data type" called a String. This is one of those.
my_string += ', max' //You can "concatenate" or add strings together.
console.log(my_string)

//Here's an example of a basic object:
//You need a comma after every line, except the last one.
var my_data = {
    'name':'max', //This is a PROPERTY called name. The VALUE is max! The VALUE in this case is a STRING.
    'age':30, //Properties can be most anything! This one is a NUMBER.
    'occupation':['educator','artist','developer'] //This property is an ARRAY. It's like a list.
}

//JS is "weakly typed", which means you can change the type of a PROPERTY on the fly.
//You can transform a NUMBER into a STRING!
my_data.name = 35
console.log(my_data.name) //Look at the period in this line. We used a period to look inside an OBJECT to find a PROPERTY.
//Burn this into your eyelids. This a core thing!

console.log(my_data.occupation[0]) //See that zero? That's an "array index". The first item in an array is at index zero.
//Use the square brackets to "point to" an index in an array.

//You can always add more properties to an object, or change the value of an existing property.
//Objects are mainly an 'inactive' thing- a source of data, or a thing that remains the same until you intervene.
my_data.mood = 'normal'
my_data.age = 31

//Here's a function. It's an 'active' thing- a tool to use.
function birthday(new_age){
    my_data.age = new_age;
}

function multiply_by(number, multiply){
    return number * multiply; //the word "return" means the function is over and the result is the output.
}

//Wait, what's happening here?
//We are creating a new PROPERTY on our OBJECT.
//This PROPERTY is a FUNCTION.
my_data.grow_older = function(){
    this.age += 1
}

//Look at that sinister dollar sign.
//This dollar sign is JQuery. JQuery is an OBJECT that other people made for you to use in your projects.
//JQuery is an OBJECT that has FUNCTIONS.
//When we included that script in the HTML, we gained the ability to use the dollar sign and unlock all its power.
$(function(){
    my_data.grow_older() //Calling the function we added to the my_data object
    console.log(my_data.age)
    //Inside these curly braces is some code that runs when the page is done loading.
    //That means, this code runs when all your CSS and images and everything is already in place.

    // alert(multiply_by(my_data.age, 3))
    // my_data.occupation.forEach(function(job){
    //     console.log('I am an ' + job);
    // })
})