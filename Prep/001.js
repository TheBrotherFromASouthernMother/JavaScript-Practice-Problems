// /*
// Write a function called "isOldEnoughToDrink".
// Given a number, in this case an age, "isOldEnoughToDrink" returns whether a person of this given age is old enough to legally drink in the United States.
// Notes:
// * The legal drinking age in the United States is 21.
// var output = isOldEnoughToDrink(22);
// console.log(output); // --> true
// */
//
// function isOldEnoughToDrink(age) {
//   // your code here
//   /* START SOLUTION */
//   if (age >= 18) {
//       return true;
//   } else if (typeof age !== "number") {
//       throw "Usage: age must be a number";
//   } else {
//       return false;
//   }
//   /* END SOLUTION */
// }
//
//
// var output = isOldEnoughToDrink(22);
// console.log(output);
//
//
//
// function checkAge(name, age) {
//   // your code here
//   if (age < 21) {
//     return "Go home " + name;
//   } else {
//     return "Welcome, " + name;
//   }
// }
//
// var newOutput = checkAge("adrian", 22);
//
//
// function computePower(num, exponent) {
//   // your code here
//   var number = num;
//   for (var i = 1; i < exponent; i ++) {
//     number *= num;
//   }
//   return number;
// }
// console.log(computePower(3, 0));
//
// var arr = [1, 2, 3];
// function removeFromBackOfNew(arr) {
//   // your code here
//   var array = arr;
//   array.pop();
//   return array;
// }
//
// console.log(removeFromBackOfNew(arr));
//
//
// function countWords (str) {
//     var arr = []
//     var obj = {};
//     arr = str.split(" ");
//     console.log(arr.length);
//     var count;
//     var wordToMatch;
//     for (var i = 0; i < arr.length; i ++) {
//         count = 0;
//         wordToMatch = arr[i];
//         for (var j = 0; j < arr.length; j++) {
//             if (arr[j] === wordToMatch) {
//                 count ++;
//             }
//         }
//         obj[wordToMatch] = count;
//     }
//     return obj;
// }
// console.log(countWords("ask a bunch get a bunch"));
//
//
// var objA = {
//     a: 1,
//     b: 2
// }
//
// var objB = {
//     b: 4,
//     c: 3
// }
//
// function extend(obj1, obj2) {
//   // your code here
//   for (var key in obj1) {
//     for (var index in obj2) {
//       if (obj1[index] === undefined) {
//           console.log(key);
//           console.log(index);
//         obj1[index] = obj2[index];
//       }
//     }
//   }
// }
// extend(objA, objB)
// console.log(objA)
//
// obj2d = {
//     f: {},
//     a: [1, 2, 3],
//     b: "penis"
// }
//
// var emptyArray = [];
//
// function removeArrayValues(obj) {
//   // your code here
//   for (var key in obj) {
//     if (typeof obj[key] === "object") {
//       console.log(obj[key]);
//     }
//   }
// }
//
// removeArrayValues(obj2d);
//
// console.log(typeof obj2d.f, typeof emptyArray);
//
// function convertDoubleSpaceToSingle(str) {
//   // your code here
//   var arr = str.split("  ");
//   console.log(arr);
//   str = arr.join(" ");
//   return str;
// }
//
// var output = convertDoubleSpaceToSingle("string  with  double  spaces");
// console.log(output); // --> "string with double spaces"

function addToFrontOfNew(arr, element) {
  // your code here
  var array = [];
  for (var i = 0; i < arr.length; i ++) {
    array.push(arr[i]);
  }
  array.unshift(element);
  return array;
}

arre = [1, 2];

function times2 (x) {
    return x * 2
}
console.log(addToFrontOfNew(arre, 3));
let map1 = arre.map(function(x) {
    return x * 2;
});
console.log(map1);

// function getAllElementsButNth(array, n) {
//   // your code here
//   var arr = [];
//   for (var i = 0; i < array.length; i++) {
//     if (i !== n) {
//         arr.push(array[i]);
//     }
//   }
//   return arr;
// }
//
// console.log(getAllElementsButNth(arre, 1));


function getElementsThatEqual10AtProperty(obj, key) {
  // your code here
  var arr = [];
  if (!obj[key]) {
      return arr;
  }
  for (var i = 0; i < obj[key].length; i++) {
    if (obj[key][i] === 10) {
      arr.push(obj[key][i]);
    }
  }
  return arr;
}

var obj = {
  keychain: [1000, 10, 50, 10]
};

// console.log('keychain' in obj);
// console.log(getElementsThatEqual10AtProperty(obj, "keychains"))

// function removeElement(array, discarder) {
//   // your code here
//   var arr;
//   var arr = array.filter(function(x) {
//     if (x !== discarder) {
//         console.log('penis');
//       return x;
//     }
//   })
//   return arr;
// }
//
// console.log(removeElement(arre, 2));

function findShortestElement(arr) {
  // your code here
  var string;
  if (arr.length < 1) {
    return "";
  }
  var shortestElement = arr[0];
  arr.forEach(function(element) {
    if (element.length < shortestElement) {
      shortestElement = element;
    }
  })
  return shortestElement;
}

var output = findShortestElement(['one', 'to', 'two', 'three', 'b']);
console.log(output);


const arraya = [1, 2, 3];
function computeAllSums(array) {
    var ouput = array.reduce(function(accumulator, value) {
        accumulator + value;
    })
    console.log(output);
}

computeAllSums(arraya);


// function getStringLength(string) {
//   // your code here
//   count = 0
//   var arr = string.split("");
//   console.log(arr.length)
//   arr.forEach(function(x) {
//     count += 1;
//   })
//   console.log(count);
//
// }
// getStringLength("hello");


function joinArrayOfArrays(arr) {
  // your code here
  var array = arr.reduce(function(accumulator, current) {
      return accumulator.concat(current);
  })
    return array;
 }


// console.log(joinArrayOfArrays([[1, 4], [true, false], ['x', 'y']]));
//
//
// function addString (num) {
//     let sum = 0;
//     var stringNum = num.toString();
//     stringNum = stringNum.split("");
//     console.log(stringNum);
//     for (var i = 0; i < stringNum.length; i ++) {
//         if (stringNum[0] === "-") {
//             stringNum[0] = Number(stringNum[0+1] * 2) ;
//             sum -= stringNum[i];
//             console.log(sum);
//         } else {
//             sum += Number(stringNum[i]);
//             console.log(sum);
//         }
//     }
//     return sum;
// }

//
// console.log(addString(-316));

function computeCompoundInterest(principal, interestRate, compoundingFrequency, timeInYears) {
  // your code here
  var compoundInterest = (principal * Math.pow(1 + (interestRate / compoundingFrequency), compoundingFrequency * timeInYears)) - principal;
  return compoundInterest;
}

function modulo(num1, num2) {
  // your code here
  if (num1 < 0) {
   return num1 - (Math.round(num1 / num2) * num2);
} else if (num2 < 0) {
    num2 *= -1;
    return num1 - num2 * (Math.floor(num1 / num2))
} else {
   return num1 - num2 * (Math.floor(num1 / num2));
}

}

console.log(modulo(-25, 4));


function multiply(num1, num2) {
  // your code here
  var sum = 0;
  for (var i = 0; i < num1; i ++) {
    sum += num2;
  }
  return sum;
}

console.log(multiply(4,7))


function isOddWithoutModulo(num) {
  // your code here
  number = num;
   if (number === 1) {
     return true;
   } else if (number === 0) {
     return false;
   } else if (number < 0) {
       return isOddWithoutModulo(-number);
    }
    return isOddWithoutModulo(number -2);
}

console.log(isOddWithoutModulo)
