// Require Dependencies
const express = require("express");
const fs = require("fs");
const path = require("path");
const util = require("util");

// Express App and PORT
const app = express();
const PORT = process.env.PORT || 8080;

// Express Functions
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

// Routes 
app.get("/notes", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/notes.html"));
})

app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, "/public/index.html"));
})

// GET 
app.get("/api/notes", (req, res) => {
    readFileAsync("./db/db.json", "utf-8")
        .then(data => {
            res.json(JSON.parse(data));
        })
        .catch(err => {
            throw err;
        })
});


// POST 
app.post("/api/notes", async (req, res) => {
    try {
        const data = await readFileAsync("./db/db.json", "utf-8"); 

        const notes = JSON.parse(data);

        const newNote = req.body;
        const newNoteId = notes.length + 1;
        const noteData = {
            id: newNoteId,
            title: newNote.title,
            text: newNote.text
        };
    
        notes.push(noteData);
        res.json(noteData);
        console.log(noteData);
    
        await writeFileAsync("./db/db.json", JSON.stringify(notes, null, 2));
        console.log("db.json file succesfully created!");
    } catch (err) {
        throw err;
    }
});

// DELETE 
app.delete("/api/notes/:id", async (req, res) => {
    try {
        const noteID = req.params.id;

        const data = await readFileAsync("./db/db.json", "utf-8");

        const notes = JSON.parse(data);

        notes.forEach((element, index) => {
            if (parseInt(element.id) === parseInt(noteID)) {
                notes.splice(index, 1);
            }
        });

        const notesSTR = JSON.stringify(notes, null, 2);

        await writeFileAsync("./db/db.json", notesSTR);

        res.json(JSON.parse(notesSTR));
        console.log("db.json file succesfully rewritten!");
    } catch (err) {
        throw err;
    }
})

// Server Port LISTEN
app.listen(PORT, () => {
    console.log(`App listening on PORT: ${PORT}`);
});

app.get("*", function (req, res) {
    res.redirect('/');
});