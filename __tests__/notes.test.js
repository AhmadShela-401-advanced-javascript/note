'use strict';

const Note = require('../lib/notes.js');
const { collection } = require('../models/notes');

// try it with mongoose package and see ow the test data will be inserted 
require('@code-fellows/supergoose');

const noteClass = require('../models/notes-collection')
// const note = new Note();

jest.spyOn(global.console, 'log');

describe('Note module',()=>{
    var myRecord;
    it('Nothing is logged to the console if there was no command given',()=>{
        const note = new Note();
        note.execute({add: 'text'});
        expect(console.log).toHaveBeenCalled();
    });
    it('create new Note',()=>{
        let obj = {method:'add',msg:'test message',catDesc:'test'}; 
        return noteClass.create(obj).then(record =>{
            myRecord = record;
            console.log('>>>>>>>>>>>>>',myRecord);
            Object.keys(obj).forEach(key =>{
                // console.log(` this value : ${record[key]} must equal this value : ${myRecord[key]}`);
                expect(record[key]).toEqual(obj[key]);
            })
        })
    })
    it('get the inserted data', async()=>{
        let obj = {method:'add',msg:'test message',catDesc:'test'}; 
        const record = await noteClass.create(obj);
        console.log("record : ",record)
        const foodItem = await noteClass.get();
        console.log("foodItem : ",foodItem)
        Object.keys(obj).forEach(key => {
            expect(foodItem[0][key]).toEqual(obj[key]);
        });
    })
    // it('delete Note by id',async()=>{
    //     // let obj = {method:'add',msg:'test message',catDesc:'test'};
    //     let deletedRec = await noteClass.delete(myRecord._id)
    //     Object.keys(myRecord).forEach(key =>{
    //         console.log('*******hi*********',deletedRec[key]);
    //         // console.log(` this value : ${record[0][key]} must equal this value : ${myRecord[0][key]}`);
    //         expect(deletedRec[key]).toEqual(myRecord[key]);
    //     })
    // })
})