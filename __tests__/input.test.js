'use strict';


jest.mock('minimist');
const minimist = require('minimist');
minimist.mockImplementation(()=> {
    return {
        foo: 'fooo',
        add: 'text'
    }
});


const Input = require('../lib/input.js');

describe('Input modules',()=>{
    it('valid() respect ptoper object',()=>{
        let option = new Input();
        expect(option.valid()).toBeTruthy();
    })
    it('Given good input',()=>{
        let option = new Input();
        expect(option.checkMethod('add')).toBeTruthy();
    })
    it('Given good input',()=>{
        let option = new Input();
        expect(option.checkMethod('a')).toBeTruthy();
    })
    it('Given good input',()=>{
        let option = new Input();
        expect(option.checkMsg('true')).toBeTruthy();
    })
    // it('Given invalid input',()=>{
    //     let option = new Input();
    //     expect(option.checkMethod()).toEqual('add');
    // })
    // it('Given invalid input',()=>{
    //     let option = new Input();
    //     expect(option.checkMsg()).toBeTruthy();
    // })
})