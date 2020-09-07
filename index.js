'use strict';
// impot the files first
const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');
// make instance of them 
const options = new Input();
const note = new Note()
note.execute(options)
