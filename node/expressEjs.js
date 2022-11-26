const express = require("express");
const app = express();

const puerto = 3000;

app.set("view engine", "ejs");
app.set("views", __dirname+"/views");

app.use("/", require("./router/RutasWeb"));
app.use("/barcos", require("./router/Barcos"));

/*
app.get("/",(req, res)=>{
    res.render("index",{titulo:"Esta es la página de inicio"});
});

app.get("/usuarios",(req, res)=>{
    res.render("usuarios",{tituloUsuarios:"Esta es la página de Usuarios"});
   
});
*/

app.use((req,res) => {
    res.status(404).sendFile(__dirname+"/public/404.html");
});

app.listen(puerto, () =>{
    console.log("servidor escuchabdo por el puerto", puerto);
})