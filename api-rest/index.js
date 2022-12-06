const express = require("express");
const app = express();
const bodyParser = require("body-parser");

const user_routes = require("./routes/usuarios");

const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));
app.use("/api",user_routes);

app.listen(port, ()=>{
    console.log("Servidor en el puerto",port);
});