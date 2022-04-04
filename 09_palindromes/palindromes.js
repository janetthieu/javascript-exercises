const palindromes = function(str) {
    str = str.toLowerCase();
    let regex = /\w/;
    let reverseStr = '';
    let compareStr = '';

    for (let i = str.length - 1; i >= 0; i--) {
        if (str[i].match(regex)) {
            reverseStr += str[i];
        }
    }

    for (let i = 0; i < str.length; i++) {
        if (str[i].match(regex)) {
            compareStr += str[i];
        }
    }

    if (compareStr === reverseStr)
        return true;
    else
        return false;
};

// Do not edit below this line
module.exports = palindromes;
