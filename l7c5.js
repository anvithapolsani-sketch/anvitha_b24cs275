const https = require('https');

const options = {
    hostname: 'example.com',
    method: 'GET',
    headers: {
        'User-Agent': 'Node.js'
    }
};

const req = https.request(options, (res) => {
    console.log(res.headers);
});

req.end();