const caesar = function(str, key) {
    let decipher = '';

    for (let i = 0; i < str.length; i++) {
        let char = str.charCodeAt(i);
        const alphaKey = key < 0 ? key += 26 : key;

        if (char >= 65 && char <= 90) {
            decipher += String.fromCharCode((char - 65 + alphaKey) % 26 + 65);
        } else if (char >= 97 && char <= 122) {
            decipher += String.fromCharCode((char - 97 + alphaKey) % 26 + 97);
        } else {
            decipher += str[i];
        }
    }

    return decipher;
};

// Do not edit below this line
module.exports = caesar;
