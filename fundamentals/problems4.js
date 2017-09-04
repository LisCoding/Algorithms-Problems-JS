// **Countdown by fours
// log positive numbers starting at 2016, counting down by 4 (exlclude 0), without a FOR loop.

function countDownByFour(num) {
  if(num == 0) {
    return num;
  }
  console.log(num);
  countDownByFour(num - 4);
}

countDownByFour(2016);

// ***Flexible Countdown***
// Based on earlier "Countdown by fours", given lowNum, highNum, mult print multiples of mult from highNum to lowNum
// using a  FOR.
// case:
// in: (2,9,3)
// out: 9 6 3 (on successive lines)

function flexibleCountDown(lowNum, highNum, mult) {
  var nums = ""
  for(var i = highNum; i >= lowNum; i--){
    if(i % mult == 0){
      nums += i.toString() + " "
    }
  }
  console.log(nums);
}

flexibleCountDown(2, 9, 3)
