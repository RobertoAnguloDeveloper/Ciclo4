const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const user_routes = require("./routes/usuarios");

const port = 3000;

app.use(bodyParser.urlencoded({ extended: false }));
app.use("/api", user_routes);

app.listen(port, ()=>{
    console.log(`Server listening on port `,port);
});