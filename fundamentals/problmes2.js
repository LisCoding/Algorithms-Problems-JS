// Leap year
// Write a function that determines if a given year is a leap year. if a year divisible by four, its a leap year,
// unless it is divisible by 100. However, if it is divisible by 400, then it is.

// steps:
// 1. write a if  condition that check that year  is divisible by four but not 100
function leapYear(year) {
  if(year % 100 == 0 && year % 400 != 0){
    return "it is not a leap year";
  }
  else if(year % 4 == 0 || year % 400 == 0){
    return "it is leap year";
  }
  else {
      return "it is not a leap year";
  }
}

console.log(leapYear(2000));
console.log(leapYear(2017));
console.log(leapYear(1968));
console.log(leapYear(1000));

// The final Countdown
// This is based on "Flexible Countdown". The parameters name are not very helpful, but the problem is essentially indentical; don't be throw off!
// Given 4 parameters print multiples of param1, starting param2 and extending to param3. One exception: if a multiple is equal  to param4, then skip
// (don't print)it. Do this using a WHILE.
// Test:
// in: 3, 5, 17, 9
// out: 6, 12, 15

// steps:
// 1. use a loop that start at param2 and ends at param3 to find the multiples of param 1
// 2. check if a multiple  equal  param4 if it does exclude

function finalCountdown(param1, param2, param3, param4) {
  var i = param2;
  while(i <= param3) {
    var num = i % param1;
    if (num == 0 &&  i != param4) {
      console.log(i);
    }
    i += 1;
  }
}

finalCountdown(3,5,17,9)
finalCountdown(2,6,20,8)
