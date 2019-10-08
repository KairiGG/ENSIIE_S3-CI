const BookRepository = require('./book.repository');
const db = require('./db')

const repository = new BookRepository(db);


repository.save({
    'id' : 1,
    "name" :"unique",
    'price' :888,
    "added_at" : '2019-01-01'
});

console.log(repository.getTotalCount());

console.log(repository.getTotalPrice());

console.log(repository.getBookByName("unique"));
