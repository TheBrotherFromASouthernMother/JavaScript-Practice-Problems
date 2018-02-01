const binarySearch = require('./binarySearch');

array = [7, 0, 22, 11, 0, 4]



function sortArray(arr) {
 let placeholder = null;
 for (let i = 0; i < arr.length; i ++) {
     for (let x = 0; x < arr.length; x ++) {
         if (arr[x] > arr[x + 1] && arr[x + 1] != undefined) {
             placeholder = arr[x];
             arr[x] = arr[x + 1];
             arr[x + 1] = placeholder;
             console.log(placeholder)
             placeholder = null;
         }
     }
}
 return arr
}
console.log(binarySearch.isArraySorted(array))

console.log(sortArray(array))

console.log(binarySearch.search(array, 11))




//I believe this solution here is a pretty terrible O(n^2)

function duplicate(array) {
    var arr = [];
    for (var i = 0; i < array.length; i ++) {
        arr.push(array[i]);
    }
    arr = arr.concat(array);
    return arr;
}

console.log(duplicate(sortArray(array)))
