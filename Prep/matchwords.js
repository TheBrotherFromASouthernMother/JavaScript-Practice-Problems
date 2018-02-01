function matchCharsOfStrings(string1, string2) {
    let count = 0;
    let matchedChars = [];
    for(let i = 0; i < string1.length; i ++) {
        for (let j = 0; j < string2.length; j ++) {
            if (string1.charAt(i) !== " " && string1.charAt(i) === string2.charAt(j)) {
                matchedChars.push(string1.charAt(j));
                count ++;
            }
        }
    }
    return count + " chars in common: " + matchedChars.join(" ");
}

console.log(matchCharsOfStrings("Weseal", "belong"));
