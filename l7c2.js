const https = require('https');

https.createServer((req, res) => {
    res.end("Hello HTTPS");
}).listen(3000);