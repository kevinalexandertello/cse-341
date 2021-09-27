const express = require('express');

const app = express();

app.set('view engine','pug');
app.set('views', 'views');

app.get('/' , (req , res, next) => {
    res.render('index' , {pageTitle: 'Add-Book'});
});

app.get('/books' , (req, res , next) => {
    res.render('books' , {pageTitle: "Book"});
});

app.post('add-book', (req, res , next) => {
    res.redirect('/books');
});

app.listen(3000);