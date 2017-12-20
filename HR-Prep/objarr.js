/*
Write a function called "listAllValues" which returns an array of all the input object's values.

Example input:
{
  name : 'Krysten',
  age : 33,
  hasPets : false
}

Function's return value (output):
['Krysten', 33, false]

Note that the input may have a different number of keys and values than the given sample.

E.g. it should also handle an input like:
{
  a : 'a',
  number : 11,
  hungry : true,
  grammyWins : 1
}

Function's return value (output):
['a', 11, true, 1]

Starter Code
*/

// function listAllValues(obj) {
//   // your code here
//   var arr = [];
//   for (var key in obj) {
//       arr.push(obj[key]);
//   }
//   return arr;
// }
//
// var objec = {
//       name : 'Krysten',
//       age : 3,
//       hasPets : false
// }
//
//
// console.log(listAllValues(objec))


/*
Write a function called "transformEmployeeData" that transforms some employee data from one format to another.

The argument will look something like this:
[
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]

Given that input, the return value should look like this:
[
    {firstName: 'Joe', lastName: 'Blow', age: 42, role: 'clerk'},
    {firstName: 'Mary', lastName: 'Jenkins', age: 36, role: 'manager'}
]

Note that the input may have a different number of rows or different keys than the given sample.

For example, let's say the HR department adds a "tshirtSize" field to each employee record. Your code should flexibly accommodate that.

Starter Code :

*/
let arr = [
    [
        ['firstName', 'Joe'], ['lastName', 'Blow'], ['age', 42], ['role', 'clerk']
    ],
    [
        ['firstName', 'Mary'], ['lastName', 'Jenkins'], ['age', 36], ['role', 'manager']
    ]
]


function transformEmployeeData(array) {
  // your code here
  let obj = [];
  for (var i = 0; i < array.length; i ++) {
    obj[i] = {};
    for (var j = 0; j < array[i].length; j ++) {
        for (var k = 0; k < array[i][j].length; k++) {
            if (array[i][j][k] === array[i][j][0]) {
                obj[i][array[i][j][k]] = array[i][j][k + 1]
                }
            }
        }
    }
    return obj;
}


console.log(transformEmployeeData(arr))



/*
Write  a function called "convertObjectToList" which converts an object literal into an array of arrays, like this:
Argument:
{
  name: 'Holly',
  age: 35,
  role: 'producer'
}
Return value:
[['name', 'Holly'], ['age', 35], ['role', 'producer']]

Note that your function should be able to handle ANY object like this, not just the exact sample provided above.

E.g., it should also be able to handle this, or any other object containing simple key-value pairs.
{
  species: 'canine',
  name: 'Bowser',
  weight: 45
}

Starter Code:
*/
var pep = {
  name: 'Holly',
  age: 35,
  role: 'producer'
}

function convertObjectToList(obj) {
  // your code here
  let arr = [];
  let i = 0;
  for (var key in obj) {
      arr[i] = [];
      arr[i].push(key, obj[key]);
      i ++;
  }
  return arr;
}

console.log(convertObjectToList(pep));

/*
Write a function called "greetCustomer".

Given a name, "greetCustomer" returns a greeting based on how many times that customer has visited the restaurant.  Please refer to the customerData object.

The greeting should be different, depending on the name on their reservation.

Case 1 - Unknown customer ( Name is not present in customerData ):

var output = greetCustomer('Terrance');
console.log(output); // --> 'Welcome! Is this your first time?'

Case 2 - Customer who has visited only once ( 'visits' value is 1 ):

var output = greetCustomer('Joe');
console.log(output); // --> 'Welcome back, Joe! We're glad you liked us the first time!'

Case 3 - Repeat customer: ( 'visits' value is greater than 1 ):

var output = greetCustomer('Carol');
console.log(output); // --> 'Welcome back, Carol! So glad to see you again!'

Notes:
* Your function should not alter the customerData object to update the number of visits.
* Do not hardcode to the exact sample data. This is a BAD :


if (firstName === 'Joe') {
  // do something
}

Starter Code :
*/

var customerData = {
  'Joe': {
    visits: 1
  },
  'Carol': {
    visits: 2
  },
  'Howard': {
    visits: 3
  },
  'Carrie': {
    visits: 4
},
  'Ben': {
      visits: 3
  }
};

function greetCustomer(firstName) {
  var greeting = '';

  // your code here
  var greeting = '';
 // your code here
  if (!customerData[firstName] || customerData[firstName].visits === 0 ) {
     greeting = "Welcome! Is this your first time?"
 } else if (customerData[firstName].visits === 1) {
     greeting = "Welcome back, " + firstName + " We're glad you liked us the first time!";
 } else if (customerData[firstName].visits > 1) {
     greeting = "Welcome back, " + firstName + "! So glad to see you again!";
 }
 return greeting;
}

console.log(greetCustomer('Joe'));
