module.exports = function(app) {

    var books = require ('../controllers/book.controller.js');

    app.post('/api/books--drop', books.createBook);
    app.get('/api/books--drop/:id', books.getBook);
    app.get('/api/books--drop', books.books);
    app.put('/api/books--drop', books.updateBook);
    app.delete('/api/books--drop/:id', books.deleteBook);
}