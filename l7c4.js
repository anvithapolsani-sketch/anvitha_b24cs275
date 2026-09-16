const https = require('https');

const options = {
    hostname: 'example.com',
    method: 'GET'
};

const req = https.request(options, (res) => {
    console.log("Status:", res.statusCode);
});

req.end();