const express = require('express');
const app = express();

const user_routes = require("./routes/usuarios");

const port = 3000;

app.use("/api", user_routes);

app.listen(port, ()=>{
    console.log(`Server listening on port `,port);
});