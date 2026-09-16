const http = require('http');

const server = http.createServer((req, res) => {

    if (req.method == "GET") {
        res.end("GET Request");
    }
    else if (req.method == "POST") {
        res.end("POST Request");
    }

});

server.listen(3000);