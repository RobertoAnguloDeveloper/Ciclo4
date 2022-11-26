const http = require("http");
const fs = require("fs");

const host = 'localhost';
const port = 8000;
const file = fs.readFileSync("./test.html");
const requestListener = http.createServer((request, response)=> {
    console.log("Servidor listening");
    if(request.url === "/prueba"){
        
        response.write(file);
        return response.end();
    }
    res.end("END");
});

requestListener.listen(port, ()=>{
    console.log("PORT ACTIVE AT: "+port)
})