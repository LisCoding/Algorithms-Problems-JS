// Reverse an array without affecting special characters
// Given a string, that contains special character together with alphabets (‘a’ to ‘z’ and ‘A’ to ‘Z’),
// reverse the string in a way that special characters are not affected.
//
// Examples:
//
// Input:   str = "a,b$c"
// Output:  str = "c,b$a"
// Note that $ and , are not moved anywhere.
// Only subsequence "abc" is reversed
//
// Input:   str = "Ab,c,de!$"
// Output:  str = "ed,c,bA!$"
/*steps:
1. if str == empty return str;
2. convert str to an Array;
3. declares two runners i = 0 ; j =str.length-1
4. while loop:
    use ascii code to see if it is an alpha character
    have two conditions
    1. a[i] != alpha -> i++;
    2, a[j]  != alpha -> j++;
    3. else reverse;

5. return arr convet to string;
*/
function reverseString(str) {
  if(str.length == 0){
    return str;
  }
  var letters = str.split("");
  var i = 0;
  var j = str.length - 1;
  while (i != j || i < j) {
    if (!alphaChar(letters[i])) {
      console.log("this is true,",letters[i]);
      i++;
    } else if(!alphaChar(letters[j])){
      j--;

    } else {
      var temp = letters[i];
      letters[i] = letters[j];
      letters[j] = temp;
      i++;
      j--;
      console.log(letters);
    }
  }
  return letters.join("")

}

function alphaChar(str) {
  var charValue = str.charCodeAt()
  if(charValue < 65 || charValue> 122){
    return false;
  } else if (charValue < 97 && charValue > 90){
    return false;
  }
  return true;
}
var a = "Ab,c,de!$"
var b= "ab!?,"
console.log(reverseString(a));
// console.log(alphaChar(","));


//Another way checking if a char is aplha 
// // Returns true if x is an aplhabatic character, false otherwise
// bool isAlphabet(char x)
// {
//     return ( (x >= 'A' &&  x <= 'Z') ||
//              (x >= 'a' &&  x <= 'z') );
// }
