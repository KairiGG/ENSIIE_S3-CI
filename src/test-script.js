const BookRepository = require('./book.repository');
const db = require('./db')

const repository = new BookRepository(db);
