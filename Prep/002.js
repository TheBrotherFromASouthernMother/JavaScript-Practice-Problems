// function findSmallestValueInArray (arr) {
//   if (!arr || arr.length < 1) {
//     return 0;
//   }
//   var valueToCompare = Infinity;
//   var smallestValue = compareValuesInArray(arr, valueToCompare)
//   if (smallestValue === Infinity) {
//     return 0;
//   } else {
//     return smallestValue;
//   }
// }
//
// array = [5, 6, 7, 8, 10, Infinity, undefined,];
//
// console.log(findSmallestValueInArray(array))
//
// function compareValuesInArray (array, value) {
//     for (var i = 0; i < array.length; i ++) {
//       if (array[i] < value) {
//         value = array[i];
//       }
//     }
//     return value;
// }


// DO NOT ADJUST
//
// var x = 7;
// var y = 8;
// var z = 9;
//
// x = y + z; //17
// z = x; //17
// x = y; //8
// z = x + y; //16
// y = z - x; //8
// z = y; //8
// x = y * z; //64
// z = y / z; //1
// x = (z - x) / (y + z); //-7
//
// /////////////////
//
// var answer = {
//   finalValueOfX: -7 // CHANGE 'null' to correct answer
// };
//
// function AssertTrue (actual, expected) {
//   if (actual === expected) {
//     return true;
//   } else {
//     return false;
//   }
// }
//
// a = 8;
// b = 64;
// console.log(AssertTrue(x, answer.finalValueOfX));


// BEGIN ORIGINAL CODE -- DO NOT MODIFIY THIS CODE

var x = [1, 2, 3];
var y = [4, 5, 6];
var z = x;

z[2] = y[0]; //z[2] === 4

z[1] = y[2]; //z[1] === 6

y[1] = z[1]; //y[1] === 6
x[0] = y[0]; //x[0] === 4
x[2] = 1; // x[2] === 1


var answer = {
  finalValueOfX: [4, 6, 1], // FILL THIS IN
  finalValueOfY: [4, 6, 6], // FILL THIS IN
  finalValueOfZ: [1, 6, 4], // FILL THIS IN
};

function testAreArraysEqual (actual, expected, testName) {
  if (actual == expected) {
    return testName + ": " + true;
  } else {
    return testName + ": " + false + " Expected: " + actual + " to equal: " + expected;
  }
}


console.log(testAreArraysEqual(y, answer.finalValueOfY, "AreArraysEqual"));

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


function declareGlobal (val) {
    this.variable = val;
};

declareGlobal(3);
console.log(variable);

function constructor (obj, arr, val) {
    this.obj = obj;
    this.arr = arr;
    create = declareGlobal(val);
};

var test = new constructor ({}, [], 5);


console.log(test.create);


let rareobj = Object.create(null);

console.log(rareobj);

Object.defineProperty(rareobj, "Name", {
    enumerable: true,
    configurable: true,
    writable: true,
    value: "Christian"
});

for (let key in rareobj) {
    console.log(rareobj[key]);
}
