const fs = require('fs');
const path = require('path');
const express = require('express');
const notes = require('./db/db.json')

const PORT = process.env.PORT || 3002;
const app = express();

// parse incoming string or array data
app.use(express.urlencoded({ extended: true }));
// parse incoming JSON data
app.use(express.json());

app.use(express.static('public'));

function createNewPd(body, pdArray) {
    const pd = body;
    animalsArray.push(pd);
    fs.writeFileSync(
        path.join(__dirname, './db/db.json'),
        JSON.stringify({ animals: pdArray }, null, 2)
    );
    return animal;
}


app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})



app.get('/api/notes', (req, res) => {
    return res.json(notes);
});

app.post('/api/notes', (req, res) => {
    // req.body is where our incoming content will be
    let note = req.body
    note.id = req.body.title
    console.log(note);
    notes.push(note)
    res.json(note);
});


app.listen(PORT, () => {
    console.log(`API server on port ${PORT}!`);
})