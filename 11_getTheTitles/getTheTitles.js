const getTheTitles = function(books) {
    let bookTitles = books.map(({title, author}) => title);
    return bookTitles;
};

// Do not edit below this line
module.exports = getTheTitles;
