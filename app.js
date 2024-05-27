const express = require('express');

const app = express();

app.listen(4000);
app.get('/', (req, res) => {
    // res.send('<p>This is a home page</p>');
    res.sendFile('./moved/index.html', { root: __dirname });
})

// Routing
app.get('/about', (req, res) => {
    res.sendFile('./moved/about.html', { root: __dirname });
})

// Redirect
app.get('/about-us', (req, res) => {
    res.redirect('/about');
})

// 404 page
app.use((req, res) => {
    res.status(404).sendFile('./moved/404.html', { root: __dirname });
})
