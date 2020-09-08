'use strict';

const mongoose = require('mongoose');

// const MONGOOSE_URL = process.env.MONGOOSE_URL;
const MONGOOSE_URL = 'mongodb://localhost:27017/notes';

mongoose.connect(MONGOOSE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
})

console.log('connection status : ',mongoose.connection.readyState);

// impot the files first
const Input = require('./lib/input.js');
const Note = require('./lib/notes.js');
// make instance of them 
// mongoose.connection.close()

const options = new Input();
const note = new Note()
note.execute(options)
