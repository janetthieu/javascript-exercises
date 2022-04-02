const removeFromArray = function(arr) {
    let args = Array.from(arguments);
    
    arr = arr.filter(function(value) {
        if (args.indexOf(value) === -1)
            return true;
    })

    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
