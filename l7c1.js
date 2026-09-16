
const https = require('https');
const fs = require('fs');

const options = {
    key: fs.readFileSync('server.key'),
    cert: fs.readFileSync('server.crt')
};

const server = https.createServer(options, (req, res) => {
    res.write("Hello HTTPS");
    res.end();
});

server.listen(3000, () => {
    console.log("HTTPS Server running on port 3000");
});




