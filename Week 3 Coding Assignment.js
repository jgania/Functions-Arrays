//1.	Create an array called ages that contains the following values: 3, 9, 23, 64, 2, 8, 28, 93.
    //a.	Programmatically subtract the value of the first element in the array from the value in the last element of the array (do not use numbers to reference the last element, find it programmatically, ages[7] – ages[0] is not allowed). Print the result to the console.
    //b.	Add a new age to your array and repeat the step above to ensure it is dynamic (works for arrays of different lengths).
    //c.	Use a loop to iterate through the array and calculate the average age. Print the result to the console.

//a
var ages = [3, 9, 23, 64, 2, 8, 28, 93];
var lengthOfArray = ages.length;
let difference = Math.abs(ages[lengthOfArray - lengthOfArray] - ages[lengthOfArray -1]);
console.log(difference);

//b
ages.push(50);
var lengthOfArray2 = ages.length;
console.log(difference);

//c
var total = 0;
for(let i = 0; i < ages.length; i++){
    total += ages[i];    
}
console.log(total);
console.log(ages.length);
console.log(total / ages.length); 

//2.	Create an array called names that contains the following values: ‘Sam’, ‘Tommy’, ‘Tim’, ‘Sally’, ‘Buck’, ‘Bob’.
    //a.	Use a loop to iterate through the array and calculate the average number of letters per name. Print the result to the console.
    //b.	Use a loop to iterate through the array again and concatenate all the names together, separated by spaces, and print the result to the console.

var names = ["Sam", "Tommy", "Tim", "Sally", "Buck", "Bob"];

// //a
var total2 = 0;
var lengthOfNames = names.length;
console.log(lengthOfNames);


for(let i = 0; i < names.length; i++){
    total2 = total2 + names[i].length;
}
console.log(total2);
console.log(total2 / names.length);

var space = "";
//concatenate = " " adding spaces to variables 
for(let i = 0; i < names.length; i++) {
    space += names[i] + " ";
}
console.log(space);





// //3.	How do you access the last element of any array?

//console.log(array.length-1);

// //4.	How do you access the first element of any array?

//console.log(array[0]);

// //5.	Create a new array called nameLengths. Write a loop to iterate over the previously created names array and add the length of each name to the nameLengths array.

var nameLengths = [];
for(let i = 0; i < names.length; i++){
    nameLengths.push(names[i].length);
}
console.log(nameLengths);

// //6.	Write a loop to iterate over the nameLengths array and calculate the sum of all the elements in the array. Print the result to the console.

var total3 = 0
for(i = 0; i < nameLengths.length; i++){
    total3 += nameLengths[i];
}
console.log(total3);

// //7.	Write a function that takes two parameters, word and n, as arguments and returns the word concatenated to itself n number of times. (i.e. if I pass in ‘Hello’ and 3, I would expect the function to return ‘HelloHelloHello’).

console.log(wordRepeat("tom", 5));

function wordRepeat(word,n){
    var words = "";
    for(let i = 0; i < n; i++){
        words += word;
    }
    return words;
}

// //8.	Write a function that takes two parameters, firstName and lastName, and returns a full name (the full name should be the first and the last name separated by a space).

console.log(createName("Jordan", "Gania"));

function createName(firstName, lastName){
    var fullName = firstName + " " + lastName;
    return fullName;
}

// //9.	Write a function that takes an array of numbers and returns true if the sum of all the numbers in the array is greater than 100.

var numbers = [10, 20, 50, 90, 15];
var numbers2 = [1, 2, 3, 4, 5];

console.log(checker(numbers));
console.log(checker(numbers2));

function checker(array){
    var total4 = 0
    for(let i = 0; i < array.length; i++){
        total4 += array[i];
    } if(total4 > 100){
        return true;
    } else return false;
}

// //10.	Write a function that takes an array of numbers and returns the average of all the elements in the array.

function average(array){
    var total5 = 0
    for(let i = 0; i < array.length; i++){
        total5 += array[i];
    } return total5 / array.length  
}



// //11.	Write a function that takes two arrays of numbers and returns true if the average of the elements in the first array is greater than the average of the elements in the second array.

console.log(checker2(numbers, numbers2));

function checker2(array1, array2){
    var total6 = 0
    for(let i = 0; i < array1.length; i++){
        total6 += array1[i];
    } var ave1 = total6 / array1.length;
    var total7 = 0
    for(let i = 0; i < array2.length; i++){
        total7 += array2[i];
    } var ave2 = total7 / array2.length;
    if(ave1 > ave2){
        return true;
    } else return false;
}

// //12.	Write a function called willBuyDrink that takes a boolean isHotOutside, and a number moneyInPocket, and returns true if it is hot outside and if moneyInPocket is greater than 10.50.

console.log(willBuyDrink(true, 10.51));
console.log(willBuyDrink(true, 10.49));

function willBuyDrink(isHotOutside, moneyInPocket){
    if(isHotOutside = true && moneyInPocket > 10.50){
        return true;
    } else return false;
}

// //13.	Create a function of your own that solves a problem. In comments, write what the function does and why you created it.

var classGrades1 = [90, 100, 81, 83, 95, 100, 92, 96];
var classGrades2 = [76, 72, 80, 85, 90, 92, 73, 20];

console.log(pizzaParty(classGrades1, 60));
console.log(pizzaParty(classGrades2, 75));

function pizzaParty(array3, time){
    var total8 = 0
    for(i = 0; i < array3.length; i++){
        total8 += array3[i];
    var classAverage = total8 / array3.length
    }
    if(classAverage >= 90 && time >= 60){
        return "Yes";
    } else return "No";
}

//I created this function to be able to take an array of class grades and a number of minutes the class has available to detirmine wheter or not the class deserves a pizza party with an average class grade of 90 or hier as well if the class has at lease 60 minutes to perform the party.