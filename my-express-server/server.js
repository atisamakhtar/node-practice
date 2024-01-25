const express = require('express');
const app = express();

// sending plane text
app.get('/', (req, res) => {
    res.send("It is the home page.");
})

// sending html about page
app.get('/about', (req, res) => {
    res.send("<h1>It is the about page.</h1>");
})

// sending html when hitting about page
app.get("/about", (req, res) => {
    res.send("<h1>About page</h1>");
})

// sending html when hitting contact page
app.get("/contact", (req, res) => {
    res.send("<h2>Contact page</h2>");
})

// sending html when hitting contact page
app.get("/hobbies", (req, res) => {
    res.send("<h1>Here are my hobbies.</h1>\
        <ul>\
        <li>Coffe</li>\
        <li>Badminton</li>\
        <li>Guittar</li>\
    </ul>");
})

// sending while hitting port 3000
app.listen(3000, () => {
    console.log("Server is now started on port 3000.");
});