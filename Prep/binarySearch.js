var primes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

function Search(array, target) {
    let min = 0;
    let max = array.length-1;
    let guess;

    while (array[guess] != target) {
        if (max < min) {
            return `${target} is not present in data set`
        }
        guess = Math.floor((max + min) / 2);
        console.log(`Minimum: ${array[min]}`);
        console.log(`Guess: ${guess}`);
        console.log(`Maximum: ${array[max]}`);
        if (array[guess] < target) {
            min = guess + 1

        } else if (array[guess] > target) {
            max = guess - 1
        }
    }
    return `${target} found at index: ${guess}`;
}


console.log(Search(primes, 4))

arr = [7, 0, 22, 11, 0, 4];
function isArraySorted(array) {
    let i = 0
    while(array[i] > array[i -1] && i < array.length) {
        i++
    }
    if (i < array.length - 1) {
        return false;
    } else {
        return true;
    }
}

console.log(isArraySorted(arr))


module.exports = {
    search: Search,
    isArraySorted: isArraySorted
}
