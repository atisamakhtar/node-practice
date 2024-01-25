const express = require("express");
const app = express();

const bp = require('body-parser')
app.use(bp.urlencoded({ extended: true }))

app.get("/", (req, res) => {
    console.log(__dirname)
    res.sendFile(__dirname  + "/index.html")
});

app.post("/", (req, res) => {
    res.send(`<h1>Form submitted.</h1> <p> ${req.body.num1} + ${req.body.num2} = ${Number(req.body.num1) + Number(req.body.num2)} </p>`);
});

app.listen(3000, ()=> {
    console.log("Server listening at port 3000.");
})