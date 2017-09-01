// Setting and Swapping
// Set myNumber to 42. Set myName to your name. Swap values

function swap(myNumber, myName){
  var temp = myNumber;
  myNumber = myName;
  myName = temp
  console.log("swap values: my name is", myName)
  console.log("my number is", myNumber);
}
swap(45, "Liseth")

// Print -52 to 1066
// Print integers from -52 to 1066 using  a FOR loop

function numbers(num1, num2){
  for(var i = num1; i <= num2; i++) {
    console.log(i);
  }
}
numbers(-52, 1066)

// Don't worry be happy
// Create beCheerful(). Within it, console.log string "good mornig" call it 98 times

function beCheerful() {
  for(var i = 0; i < 98; i++){
    console.log("good morning!");
  }
}
beCheerful()

// Using a FOR loop, print multiples of 3 from -300 to 0 skip -3 and -6

function multiplesOfThree() {
  for(var i = -300; i <= 0; i += 3) {
    if(i == -3 || i == -6){ //ask about it ????
    }
    else {
      console.log(i);
    }
  }
}
multiplesOfThree()

//  Printing Integers with while
// Print integers from 2000 to 5280 using a while
function printing_numbers(num1, num2){
  var i = num1;
  while( i <= num2) {
    console.log(i);
    i++;
  }
}

printing_numbers(2000, 5280)

 // You say It's your birthday
 // if 2 number represent your birthday month and day in either order, log "How did you know", else log "Just another day"
function birthday(day, month) {
  my_birthday = [2, 12]   //first e in the array represent month, last reprsent day
  if (day == my_birthday[1] && month == my_birthday[0]) {
    console.log("How did you know?");
  }
  else {
    console.log("Just another day!");
  }
}
birthday(11,2)
birthday(12,2)
