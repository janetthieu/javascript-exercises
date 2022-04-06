const fibonacci = function(n) {
    if (n < 0) {
        return 'OOPS';
    } else if (n <= 2) {
        n = 1;
    } else {
        n = fibonacci(n - 1) + fibonacci(n - 2);
    }
    
    return n;
};

// Do not edit below this line
module.exports = fibonacci;
