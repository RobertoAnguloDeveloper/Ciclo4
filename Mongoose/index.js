const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const user_routes = require("./routes/usuarios");

const port = 3000;

app.use(bodyParser.urlencoded({extended:false}));

mongoose.connect("mongodb://localhost:27017/apiRestG10",{

    useNewUrlParser:true,
    useUnifiedTopology:true,
    family:4
}).then(()=>{
    app.use("/api",user_routes);
    app.listen(port, ()=>{
        console.log("Servidor en el puerto",port);
    });
}).catch(error => console.log(error));