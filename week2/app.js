const express = require('express');

const app = express();
const bodyParser = require('body-parser');

const books = [];
app.set('view engine','pug');
app.set('views', 'views');

app.use(bodyParser.urlencoded({extended: false }));

app.get('/' , (req , res, next) => {
    res.render('index' , {pageTitle: 'Add-Book'});
});

app.get('/books' , (req, res , next) => {
    res.render('books' , {pageTitle: "Book",books: books});
});

app.post('add-book', (req, res , next) => {
        books.push({name: req.body.bookname});
    res.redirect('/books');
});

app.listen(3000);