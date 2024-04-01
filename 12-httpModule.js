const http = require('http');

const server = http.createServer((req, res) => {
    if (req.url === '/') {
        res.end('Welcome to home Page')  
    }

    if (req.url === '/about') {
        res.end('Welcome about Page')
    }
    // console.log(req);
    // res.write('Welcome to Home');
    res.end(`
        <h1>Opps!</h1>
        <p>We can't seem to find the page u r looking for</p>
        <a href="/">Home</a>
    `)
});

server.listen(5000);

// console.log(http); 