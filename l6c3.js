const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req, res) => {

    // Process URL and Query String
    const parsedUrl = url.parse(req.url);
    const query = querystring.parse(parsedUrl.query);

    res.writeHead(200, { 'Content-Type': 'text/html' });

    if (req.method === 'GET') {

        res.write("<h2>URL Processing</h2>");
        res.write("Pathname: " + parsedUrl.pathname + "<br>");
        res.write("Query Parameters:<br>");

        for (let key in query) {
            res.write(key + " = " + query[key] + "<br>");
        }

        res.end();
    }

    else if (req.method === 'POST') {

        let body = '';

        // Receive form data
        req.on('data', (chunk) => {
            body += chunk;
        });

        req.on('end', () => {

            // Process form parameters
            const formData = querystring.parse(body);

            res.write("<h2>Form Parameters</h2>");

            for (let key in formData) {
                res.write(key + " = " + formData[key] + "<br>");
            }

            res.end();
        });
    }
});

server.listen(3000, () => {
    console.log("Server running at http://localhost:3000");
});