//Module imports
const fs = require('fs');
const _ = require('lodash');
const yargs = require('yargs')

//custom module imports
const notes = require('./notes.js');

//Global variables
const argv = yargs
const titleOptions = {
	describe: 'Title of the note',
	demand: true,
	alias: 't'
};
const bodyOptions = {
	describe: 'Body of the note',
	demand: true,
	alias: 'b'
};

//Commands setup and data
.command('add', 'Add a new note', {
	title: titleOptions,
	body: bodyOptions
})
.command('list', 'List all notes')
.command('read', 'Read a specific note', {
	title: titleOptions
})
.command('remove', 'Remove a specific note', {
	title: titleOptions
})
.help().argv;
let command = argv._[0]

//Take user input to determine which module to use from notes.js
if(command === 'add') {
	let newNote = notes.addNote(argv.title, argv.body)
	if(newNote) {
		console.log('New Note Created!');
		notes.logNote(newNote)
	}
	else {
		console.log('Looks like a note with that title already exists, please try again.')
	}
}
else if (command === 'list') {
	let allNotes = notes.getAll();
	console.log(`Printing ${allNotes.length} note(s).`);
	allNotes.forEach((note) => notes.logNote(note));
}
else if (command === 'read'){
	let findNote = notes.fetchNote(argv.title);
	if (findNote) {
		console.log('Note Found.');
		notes.logNote(findNote);
	}
	else {
		console.log('No note found with that title, please try again.');
	}
}
else if (command === 'remove'){
	let noteRemoved = notes.removeNote(argv.title);
	let message = noteRemoved ? 'Note removed.' : 'Note not found, unable to remove.'
	console.log(message);
}
else {
	console.log('Command not found.')
}
