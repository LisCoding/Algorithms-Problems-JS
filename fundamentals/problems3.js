// Print and Count
// Print all integers multiples of 5, from 512 to 4096
// afterward also log how many there were

function printCount(num1, num2) {
  var count = 0;
  for(var i = num1; i <= num2; i++){
    if(i % 5 == 0) {
      count ++;
      console.log(i);
    }
  }
  console.log(count);
}

// printCount(512, 4096)

// multiples of six
// print multiples of 6 up to 60000 using WHILE loop

function multiplesOfSix() {
  var i = 6;
  while(i <= 6000){
    console.log(i);
    i+= 6;
  }
}
multiplesOfSix()

// **Counting the Dojo Way***
// Print integers from 1 to 100. if divisibleby 5 print coding,  instead. If divisible by 10 also print dojo

function dojoWay(num1, num2) {
  for(var i = num1; i <= num2; i++){
    if(i % 5 == 0 && i % 10 == 0){
      console.log("Coding Dojo");
    }
    else if(i % 5 == 0){
    console.log("Coding");
    }
  }
}
dojoWay(1, 100)

// What do you know?**
// your function will be given an input parameter incoming. Please console log this value

function log(incoming) {
  console.log(incoming);
}

log("hey there this is easy")


// **WHOA, that sucker's Huge....
// Add odd integers  from -300000 to 300000 and  console log the final sum is there a shorcut?

function largesum(num1, num2) {
  var sum = 0;
  for(var i = num1; i <= num2; i++){
    if(i % 2 == 1) {
      sum += i;
    }
  }
  console.log(sum);

}

largesum(-300000, 300000)
