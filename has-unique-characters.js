function hasUniqueChars(word) {

    let charcters = word.split('');
    let unique = true;
    let checkIndex = 0;

    while (unique && checkIndex < charcters.length) {

        if (charcters.slice(checkIndex + 1,charcters.length).includes(charcters[checkIndex])) {
            unique = false;
        }

        checkIndex++;
    }

    return unique;
    
}

console.log()
console.log(hasUniqueChars("Monday"))
// returns true
console.log(hasUniqueChars("Moonday"))
// returns false
//Uppercase and lowercase letters should be considered separately:

console.log(hasUniqueChars("Bob"))
// returns true