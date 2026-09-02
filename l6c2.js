const http = require('http');

const options = {
    hostname: 'jsonplaceholder.typicode.com',
    port: 80,
    path: '/posts/1',
    method: 'GET'
};

const req = http.request(options, (res) => {
    let data = '';

    // Receive data
    res.on('data', (chunk) => {
        data += chunk;
    });

    // When response is complete
    res.on('end', () => {
        console.log('Response from server:');
        console.log(data);
    });
});

// Handle errors
req.on('error', (error) => {
    console.log('Error:', error.message);
});

// Send request
req.end();