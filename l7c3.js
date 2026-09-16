const https = require('https');

https.get('https://example.com', (res) => {
    console.log("Status:", res.statusCode);

    res.on('data', (data) => {
        console.log(data.toString());
    });
});