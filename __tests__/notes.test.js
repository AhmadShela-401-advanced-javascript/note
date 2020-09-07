'use strict';

const Note = require('../lib/notes.js');

jest.spyOn(global.console, 'log');

describe('Note module',()=>{
    // it('Nothing is logged to the console if there was no command given',()=>{
    //     const note = new Note();
    //     note.execute();
    //     expect(console.log).not.toHaveBeenCalled();
    // })
    it('Nothing is logged to the console if there was no command given',()=>{
        const note = new Note();
        note.execute({add: 'text'});
        expect(console.log).toHaveBeenCalled();
    })
    
})