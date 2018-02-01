// Please write your code directly below the corresponding numbers.
// #1
var fullName = 'Linus Torvalds';
var birthYear = 1969;

// #2
  var myArray = [];

// #3
  myArray.push(fullName, birthYear);
  console.dir(myArray);
// #4
  var splitName = fullName.split(' ');
  console.dir(splitName);
;
// #5


// #5
 function sayHello () {
    console.log('Hello, ' + splitName[0] + '!');
  };
sayHello();

// #6
function calcAge (currentYear) {
    return currentYear - 1969;
}

console.log(calcAge(2017));



console.time()
function sumOddNumbers() {
    var sum = 0;

    // Your code here
    for (var i = 1; i <= 5000; i++) {
      if (i % 2 !== 0) {
        sum += i;
      }
    }
    console.log(sum);
    return sum;
}

sumOddNumbers();
console.timeEnd();
