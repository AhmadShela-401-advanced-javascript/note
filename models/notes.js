'use strict';

const mongoose = require('mongoose');

const notes = new mongoose.Schema({
    method : {type: String, default: 'ADD',enum: ['add','a']},
    msg : {type: String, require: true},
    catDesc: {type: String, require: true}
});

module.exports = mongoose.model('notes',notes);