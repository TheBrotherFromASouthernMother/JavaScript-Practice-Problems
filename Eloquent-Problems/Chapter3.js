function countNumberOfBs (str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if(str.charAt(i) === 'B') {
            count ++;
        }
    }
    return count;
}

console.log(countNumberOfBs("Beats By Supremos, and even the gringos"))


function countChar (str, char) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str.charAt(i) === char) {
            count ++;
        }
    }
    return `There are ${count} ${char}'s in this string`;
}

console.log(countChar("Beats By Supremos, and even the gringos", "e"));


function minimum (min, max) {
    if (typeof min != "number") {
        throw `Usage: typeof ${min} must be a number`;
    } else if (typeof max != "number") {
        throw `Usage: typeof ${max} must be a number`;
    } else {
        if (min < max) {
            return min;
        } else if (max < min) {
            return max;
        }
    }
}

console.log(minimum(0, -10));



function isEven (number) {
    if (number === 0) {
        return true;
    } else if (number === 1) {
        return false;
    } else if (number < 0) {
        return isEven(-number);
    } else {
        return isEven(number - 2)
    }
}


console.log(isEven(-40));
