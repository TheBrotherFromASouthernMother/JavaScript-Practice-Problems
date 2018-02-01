const animals = ["dog", "tiger", "cobra", "shark", "king kong"];

function recursion (number, array) {
    if (number < array.length && number >= 0) {
    console.log(array[number]);
    return recursion (number + 1, array);
    }
}

recursion(3, animals);

let count = 0;
function recurseArray (array) {
    if (count < array.length) {
        console.log(array[count]);
        count++;
        return recurseArray(array);
    }
}

recurseArray(animals);
