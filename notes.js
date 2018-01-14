//Bring in the FS Module
const fs = require('fs');

//This function pulls all of the notes from the file if it exists, if not it will just return a blank array
let grabNotes = () => {
	try {
		let notesString = fs.readFileSync('notes-data.json');
		return JSON.parse(notesString);
	}
	catch (err){
		return [];
	}
};

//This saves the new array of notes to the existing file, or creates it if it doesnt exist
let saveNotes = (notes) => {
	fs.writeFileSync('notes-data.json', JSON.stringify(notes));
};

//Lets user add a new note
let addNote = (title, body) => {
	let notes = grabNotes();
	let note = {
		title,
		body
	};

	let dupeNotes = notes.filter((note) => note.title === title);

	if (dupeNotes.length === 0) {
		notes.push(note);
		saveNotes(notes);
		return note;
	};
};

//Lets user view all notes
let getAll = () => {
	return grabNotes();
};

//Lets user view a specific note
let fetchNote = (title) => {
	let notes = grabNotes();
	let noteFinder = notes.filter((note) => note.title === title);
	return noteFinder[0];
};

//Lets user delete a specific note
let removeNote = (title) => {
	let notes = grabNotes();
	let noteScrubber = notes.filter((note) => note.title != title);
	saveNotes(noteScrubber);

	return notes.length != noteScrubber.length
}

let logNote = (note) => {
	console.log('-------');
	console.log(`Title: ${note.title}`);
	console.log(`Body: ${note.body}`);
}

//Exports to the main app.js
module.exports = {
	addNote,
	getAll,
	fetchNote,
	removeNote,
	logNote
};
