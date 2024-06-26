const fs = require('fs');
const http = require('http');
const _ = require('lodash');

const servers = http.createServer((req, res) => {

    // console.log(req.url, req.method);

    // lodash
    const num = _.random(0, 20)
    console.log(num)

    const greet = _.once(() => {
        console.log('hello');
    })
    greet();
    greet();

    res.setHeader('Content-Type', 'text/html');

    let path = './views/'
    switch (req.url) {
        case '/':
            path += 'index.html';
            res.statusCode = 200;
            break;
        case '/about':
            path += 'about.html';
            res.statusCode = 200;
            break;
        case '/about-us':
            res.statusCode = 301;
            res.setHeader('Location', '/about');
            res.end();
        default:
            path += '404.html';
            res.statusCode = 404;
            break;
    }

    fs.readFile(path, (err, data) => {
        if (err) {
            console.log(err);
            res.end();
        } else {
            res.end(data);
        }
    });
});

servers.listen(5000, 'localhost', () => {
    console.log('listening for request on port 5000');
});

