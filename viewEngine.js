const express = require('express');

const app = express();

app.set('view engine', 'ejs');

app.listen(3000);

app.get('/', (req, res) => {
    const blogs = [
        { title: 'Yoshi finds eggs', snippet: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
        { title: 'MArio finds stars', snippet: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' },
        { title: 'How to defeat browser', snippet: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit.' }
    ];
    res.render('index',{title: 'Home', blogs});
})

// Routing
app.get('/about', (req, res) => {
    res.render('about',{title: 'About'});
})

// Redirect
app.get('/about-us', (req, res) => {
    res.render('create', {title: 'Create a new blog'});
})

// 404 page
app.use((req, res) => {
    res.status(404).render('404',{title: '404'});
})
