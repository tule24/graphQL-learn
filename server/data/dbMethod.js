const Book = require('../models/Book')
const Author = require('../models/Author')

const mongoDataMethods = {
    getAllBooks: async (condition) =>
        condition === null ? await Book.find() : await Book.find(condition),
    getBookById: async id => await Book.findById(id),
    getAllAuthors: async () => await Author.find(),
    getAuthorById: async id => await Author.findById(id),
    createAuthor: async args => await Author.create(args),
    createBook: async args => await Book.create(args)
}

module.exports = mongoDataMethods