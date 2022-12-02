const http = require('http');
const colors = require('colors/safe');

port = 3000

// http.createServer((req, res) => {
//     res.writeHead(200, {
//         'Content-Type': 'text/html; charset=utf-8'
//     });
//     res.write("<h1>Hola Mundo</h1>");
//     res.end();
// }).listen(4000, ()=>{
//     console.log("Server running on port 4000");
// });

const server = http.createServer((req, res) => {
    res.writeHead(200, {
        'Content-Type': 'text/html; charset=utf-8'
    });
    res.write("<h1>Hola Mundo</h1>");
    res.end();
})

function connect(port){
    server.listen(port, ()=>{
        console.log(colors.green("Server running on port " + port));
    })
}

connect(port)
