const http = require('http');

let students = [
    { id: 1, name: "Anvi" },
    { id: 2, name: "shah" }
];

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "application/json");

    // GET
    if (req.method == "GET" && req.url == "/students") {
        res.end(JSON.stringify(students));
    }

    // POST
    else if (req.method == "POST" && req.url == "/students") {

        let body = "";

        req.on("data", chunk => {
            body += chunk;
        });

        req.on("end", () => {

            const student = JSON.parse(body);

            students.push(student);

            res.statusCode = 201;
            res.end(JSON.stringify(student));
        });
    }

    else {
        res.statusCode = 404;
        res.end(JSON.stringify({
            message: "Not Found"
        }));
    }

});

server.listen(3000);