# node-cli-note-manager

###### Purpose
A Nodejs CLI app that allows the user to create, view, and manage a list of items. Data is stored locally on the user's machine and does not require any connections to outside databases after installation.

###### Functionality
**Commands:**
- add - Lets a user add a new note. *(requires a title and body argument)*
- list - Displays all current notes.
- read - Finds a specific note for the user. *(requires a title argument)*
- remove - Deletes a note from the list. *(requires a title argument)*

###### Installation
You can clone this repo to your local machine, run `npm install` from the directory, and then run `node app.js --help` to view all of the commands to get the app running from the CLI.
