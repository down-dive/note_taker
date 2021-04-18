const fs = require('fs');
const path = require('path');
const express = require('express');
const notes = require('./db/db.json')

const PORT = process.env.PORT || 3002;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/index.html"))
})
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "./public/notes.html"))
})

app.get('/api/notes', (req, res) => {
   res.json(notes);
});

app.post('/api/notes', (req, res) => {
    // req.body is where our incoming content will be
    let note = req.body
    note.id = req.body.title
    // console.log(note);
    notes.push(note)
    res.json(note);
    console.log(note)
});

app.delete('/api/notes/:id', (req, res) => {
    let note = req.body
    res.json(note);
    note.id = req.body.title
    notes.pop(note)
})

app.listen(PORT, () => {
    console.log(`API server on port ${PORT}!`);
})