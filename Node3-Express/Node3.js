const { response } = require('express');
const express = require('express');



const app = express();

const puerto = 4000;

app.use(express.static(__dirname + "/prueba"));

app.get("/", (request, response) => {
    response.send("<h1>HELLO WORLD!</h1>");
});

app.get("/prueba", (request, response) => {
    response.render("otra");
});

app.use((request, response)=>{
    response.status(404).sendFile(__dirname + "/error.html");
})

app.listen(puerto, () => {
    console.log("LISTENING AT "+puerto);
})