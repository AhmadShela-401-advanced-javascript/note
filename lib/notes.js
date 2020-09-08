'use strict';

// const note = {};
// method of the constructor to disribute the orders based on the methods

const Notes = require('../models/notes.js')

class Note {
    constructor() {}
    async add(opts) {
        console.log(opts)
        console.log('SAVING');
        let record = new Notes(opts);
        let save = await record.save();
        return save;
    }
    async getAllNotes(){
        // console.log('>>>>>>>>>>getAllNotes');
        let allNotes = await Notes.find({});
        return allNotes;
    }
    async getAllNotesByCat(cat){
        // console.log('>>>>>>getAllNotesByCat',cat);
        let allNotes = await Notes.find({catDesc : cat});
        return allNotes;
    }
    async deleteNote(id){
        // console.log('>>>>>>getAllNotesByCat',cat);
        let allNotes = await Notes.findByIdAndRemove({_id : id});
        return allNotes;
    }
    async execute(opts) {
        if (opts) {
            console.log('>>>>opts : ', opts);
            var testMethod = opts.method;
            var testMsg = opts.msg;
            var testCatDesc = opts.catDesc;
            switch (opts.method) {
                case 'add':
                case 'a':
                    if (! testMethod) {
                        console.error('worng method');
                        break;
                    } else if (! testMsg) {
                        console.error('worng msg');
                        break;
                    } else if (! testCatDesc) {
                        console.error('worng category');
                        break;
                    } else {
                        let addResult = await this.add(opts);
                        console.log('result : ', addResult);
                        if (addResult) {
                            console.log(`the msg '${
                                addResult.msg
                            }' has been added successfully`);
                        } else {
                            console.log(`1 Sorry, we can't add your msg`);
                        }

                    }

                case 'list':
                    if(! testMsg){
                        if(! testMethod){
                            console.error('worng method');
                            break;
                        }else{ // list all
                            let allMyNote = await this.getAllNotes();
                            console.log('result : ', allMyNote);
                        }
                    }else{ 
                        if(! testMethod){
                            console.error('worng method');
                            break;
                        }else{ // list based on category
                            let allMyNote = await this.getAllNotesByCat(testMsg);
                            console.log('result : ', allMyNote);
                        }
                    }
                    break;
                case 'delete':
                    if(testMsg){
                        if(testMethod){
                            let result =  await this.deleteNote(testMsg);
                            if(result){
                                console.log(`the note ${testMsg} has beed deleted`);
                            }else{
                                console.log('the note is not exist');
                            }
                        }
                    }
                default:
                    console.log(`2 Sorry, we can't add your msg`);
            }
        }
    }

};

module.exports = Note;
