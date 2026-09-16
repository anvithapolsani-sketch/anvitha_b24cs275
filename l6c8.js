const http = require('http');
const url = require('url');

const server = http.createServer((req, res) => {

    const data = url.parse(req.url, true);

    if (data.pathname == "/student") {

        res.end(
            "Name: " + data.query.name +
            "\nBranch: " + data.query.branch +
            "\nYear: " + data.query.year
        );
    }
});

server.listen(3000);