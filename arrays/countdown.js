// Create a function that accepts a number as an imput.
// Return a new array that counts down by one, from that number. how long is this array?

function print(num) {
  var arr = []
  for(var i=num; i >= 0; i--){
    arr.push(i);
  }
  console.log(arr.length);
  return arr

}
console.log(print(10));


// Print an Return
// Your function will receive an array with two numbers. Print teh first value, and return the second.
function printAndReturn(arr) {
  console.log(arr[0]);
  return arr[1];
}
console.log(printAndReturn([3,6]));



// First plus length
// Given an array, return the sum of the first value in the array, plus the array's length. What happens if the array's first value is not a number. but a string
// like "what?" o bolean like false

function firtPlusLength(arr) {
  var sum = 0
  if(typeof(arr[0]) === "number"){
    sum = arr[0] + arr.length;
    return sum;
  }

  return null;
}

console.log(firtPlusLength(["hello",5,2]));
console.log(firtPlusLength([3,5,2]));

// Values Greater than second
// For[1,3,5,6,9,17], print values that are greater than its 2nd value. Return how many values this is
function valueGreaterThanSecond(arr) {
  var secondValue = arr[1];
  var count = 0;
  for(var i = 0); i < arr.length; i ++){
    if(arr[i] > secondValue){
      console.log(arr[i]);
      count ++;
    }
  }
  return count

}

valueGreaterThanSecond([1,3,4,5,67])

// Values Greater than second, Generalized
 //Write a function that accepts any array, and return a new array  with the array values that are greater than its 2nd value.
 // Print how many values this is. What will you do if the array is only one element long?
 function valueGreaterThanSecondGeneralized(){
   var result = []
   var secondValue = arr[1]
   if(arr.length < 1){
     return null;
   }
   for(var i = 0); i < arr.length; i ++){
     if(arr[i] > secondValue){
       console.log(arr[i]);
       count ++;
     }
   }
   console.log(count);
   return result

 }

console.log(valueGreaterThanSecondGeneralized([1,4,5,6]));

 // This Length, That Values
 // Given two numbers, return array of length num1 with each value num2. Print "Jinx" if they are the same
 function thisLength(num1, num2) {
   if(num1 === num2){
    console.log( "Jinx");
   }
   var arr = [];
   for(var i = num1; i >= 0; i--){
     arr.push(num2);
   }
   return arr;
 }

 console.log(thisLength);
