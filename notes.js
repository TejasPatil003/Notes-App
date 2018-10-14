const fs = require('fs');

var fetchNotes = () => {
    try {
        return JSON.parse(fs.readFileSync('notes-json.js'));
    } catch (e) {
        return [];
    }
}
var saveNotes = (notes) => {
    fs.writeFileSync('notes-json.js', JSON.stringify(notes));
}
var addNote = (title, body) => {
    var notes = fetchNotes();
    var note = {
        title,
        body
    }
    
    var duplicateNOtes = notes.filter((note) => note.title === title);
    if (duplicateNOtes.length === 0) {
        notes.push(note);
        saveNotes(notes);
        return note;
    }
}
var getAll = (title) => {
    return fetchNotes();
}

var readNotes = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((notes) => notes.title === title);
    return filteredNotes[0];
}

var removeNotes = (title) => {
    var notes = fetchNotes();
    var filteredNotes = notes.filter((notes) => notes.title !== title);
    saveNotes(filteredNotes);
}

var logNotes = (note) => {
    console.log(`----`);
    console.log(`Title:${note.title}`);
    console.log(`Body:${note.body}`);
}
module.exports = {
    addNote,
    getAll,
    readNotes,
    removeNotes,
    logNotes
}
