const file = require('fs');
const _ = require('lodash');

const notes = require('./notes.js');
const yargs = require('yargs');

const titleOptions = {
  describe:'Title of Note',
  demand:true,
  alias:'t'
}
const bodyOptions = {
  describe:'Body of Note',
  demand:true,
  alias:'b'
}

const yargsArg = yargs

.command('add','Add a new Note',{
  title:titleOptions,
  body:bodyOptions
})
.command('list','listing all notes')
.command('read','Reading notes',{
  title:titleOptions
})
.command('remove','Removing note',{
  title:titleOptions
})
.help()
.argv;
const command = yargsArg._[0];

if (command === 'add') {
    var note = notes.addNote(yargsArg.title, yargsArg.body);
    if (note) {
        console.log('Note is Created');
        notes.logNotes(note);
    } else {
        console.log('Note is not created');
    }
} else if (command === 'list') {
    var allNotes = notes.getAll();
    console.log(`Printing all ${allNotes.length} notes`);
    allNotes.forEach((note) => notes.logNotes(note));
} else if (command === 'read') {
    var note = notes.readNotes(yargsArg.title);
    if (note) {
        console.log('Note found');
    } else {
        console.log('Note not found');
    }
} else if (command === 'remove') {
    notes.removeNotes(yargsArg.title);
} else {
    console.log('Command Not Recognized');
}
