// Have the function PrimeTime(num) take the num parameter being passed and return the string true
// if the parameter is a prime number, otherwise return the string false. The range will be between
//  1 and 2^16.
//in: 2 => true
//in: 5 => true
//in: 6 => false
//in : 7 => true

function prime_time(num) {
  if (num < 2) {
    return false
  }
  i= 2
  while(i < num){
    if (num % i ==  0 ){
      return false
    }
    i++;
  }
  return true
}
// console.log(prime_time(2));
// console.log(prime_time(5));
// console.log(prime_time(3));
// console.log(prime_time(6));
// console.log(prime_time(8));
// console.log(prime_time(7));
// console.log(prime_time(9));
// console.log(prime_time(11));

// Using the JavaScript language, have the function RunLength(str) take the str parameter
// being passed and return a compressed version of the string using the Run-length encoding algorithm.
//  This algorithm works by taking the occurrence of each repeating character and outputting
//  that number along with a single character of the repeating sequence.
// For example: "wwwggopp" would
//   return 3w2g1o2p. The string will not contain any numbers, punctuation, or symbols.
// in: "wwwggopp"
//out: 3w2g1o2p
function run_length(str) {
  if(str== ""){
    return 0
  }
  var result = ""
  var count = 1
  for (var i = 0; i < str.length; i++){
    if (str[i] == str[i+1]){
      count++
    } else {
      result += count + str[i]
      count = 1
    }
  }
  return result
}
console.log(run_length("llllaa"));
console.log(run_length("wwwggopp"));
// 4l
// 3w2g1o

// Using the JavaScript language, have the function ThreeSum(arr) take the array of integers stored
// in arr, and determine if any three distinct numbers (excluding the first element) in the array can
//  sum up to the first element in the array. For example: if arr is [8, 2, 1, 4, 10, 5, -1, -1]
//  then there are actually three sets of triplets that sum to the number 8: [2, 1, 5], [4, 5, -1]
//   and [10, -1, -1]. Your program should return the string true if 3 distinct elements sum to the
//   first element, otherwise your program should return the string false. The input array will
//   always contain at least 4 elements.
//in : [8, 2, 1, 4, 10, 5, -1, -1]
//out: true
// in: [4, 6,7,8] => false
function tree_sum(arr) {
  var sum = 0
  if (arr.length == 4) {
    sum = arr[1] + arr[2] + arr[3]
    if (sum == arr[0]){
      return true
    } else {
      return false
    }
  }
  for(var i=1; i< arr.length-2; i++){
    for(var j= i+ 1; i < arr.length-1; j+= 2){
      sum = arr[i] + arr[j]+ arr[j+1] ;
      if (sum == arr[0]){
        return true
      }
    }
  }
  return false

}
console.log(tree_sum([4,2,3,-1]));
console.log(tree_sum([8, 2, 1, 4, 10, 5, -1, -1]));
// Using the JavaScript language, have the function DashInsertII(str) insert dashes ('-')
 // between each two odd numbers and insert asterisks ('*') between each two even numbers in str.
 //  For example: if str is 4546793 the output should be 454*67-9-3.
 //  Don't count zero as an odd or even number.

// Using the JavaScript language, have the function StringReduction(str) take the str parameter
 // being passed and return the smallest number you can get through the following reduction method.
 // The method is: Only the letters a, b, and c will be given in str and you must take two different
 // adjacent characters and replace it with the third. For example "ac"
 // can be replaced with "b" but "aa" cannot be replaced with anything.
 // This method is done repeatedly until the string cannot be further reduced, and the
 //  length of the resulting string is to be outputted. For example: if str is "cab", "ca"
 //  can be reduced to "b" and you get "bb" (you can also reduce it to "cc").
 //  The reduction is done so the output should be 2. If str is "bcab", "bc" reduces to "a",
 //  so you have "aab", then "ab" reduces to "c", and the final string "ac" is reduced to "b"
 //  so the output should be 1
//
//
// Using the JavaScript language, have the function StringScramble(str1,str2)
 // take both parameters being passed and return the string true if a portion of
 // str1 characters can be rearranged to match str2, otherwise return the string false.
 // For example: if str1 is "rkqodlw" and str2 is "world" the output should return true.
 // Punctuation and symbols will not be entered with the parameters
//
//


// Using the JavaScript language, have the function LargestFour(arr) take the array
// of integers stored in arr, and find the four largest elements and return their sum.
// For example: if arr is [4, 5, -2, 3, 1, 2, 6, 6] then the four largest elements in
// this array are 6, 6, 4, and 5 and the total sum of these numbers is 21, so your program
// should return 21. If there are less than four numbers in the array your program should
// return the sum of all the numbers in the array.
