const express = require("express");

const app = express();

const puerto = 4000;

app.use(express.static(__dirname+"/public"));
app.set('view engine', 'public');

app.get("/",(req, res)=>{
    res.render("index");
});

app.get("/nueva",(req, res)=>{
    res.render("nueva");
});

app.use((req,res) => {
    res.status(404).sendFile(__dirname+"/public/404.html");
});

app.listen(puerto, () =>{
    console.log("Servidor escuchabdo por el puerto", puerto);
})