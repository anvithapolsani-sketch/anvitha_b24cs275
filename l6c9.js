const http = require('http');

const server = http.createServer((req, res) => {

    if (req.method == "GET" && req.url == "/") {
        res.end("Home Page");
    }

    else if (req.method == "GET" && req.url == "/student") {
        res.end("Student Page");
    }

    else if (req.method == "POST" && req.url == "/student") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {
            console.log(body);
            res.end("Data received");
        });
    }

    else {
        res.statusCode = 404;
        res.end("Not Found");
    }

});

server.listen(3000);