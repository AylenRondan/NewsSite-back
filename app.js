const express = require('express');
const app = express();
const userRoutes = require('../back/src/routes/userRoutes');
const port = 3000;

app.use('/', userRoutes);

app.get("/", (req, res)=>{
    res.send("Hello World!!");
})

app.listen(port, ()=>{
    console.log("server running on port", 3000)
}); 