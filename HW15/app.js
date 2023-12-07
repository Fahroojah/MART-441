const express = require('express');
const bodyParser = require('body-parser');
const fs = require('fs');
const app = express();
const port = 3000;

app.use(bodyParser.urlencoded({ extended: true }));

// Serve your CSS as static
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + '/index.html');
});

app.post('/submit', (req, res) => {
    const { name, email } = req.body;

    // Write data to a text file
    fs.writeFile('userData.txt', `Name: ${name}, Email: ${email}`, (err) => {
        if (err) throw err;
    });

    // Redirect to the second page with query string
    res.redirect(`/success?name=${encodeURIComponent(name)}&email=${encodeURIComponent(email)}`);
});

app.get('/success', (req, res) => {
    res.sendFile(__dirname + '/success.html');
});

app.listen(port, () => {
    console.log(`Server running on http://localhost:${port}`);
});


