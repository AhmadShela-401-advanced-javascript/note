#!/usr/bin/env nod

'use strict';

const minimist = require("minimist");

// node nodes.js --add "This is a really cool thing that I wanted to remember for later"
// const minimist = require('minimist');
// create Input constructor
// function Input() {
//     /*The process.argv property is an inbuilt application programming interface of 
//     the process module which is used to get the arguments passed to the node.js process when run in the command line.*/
//     console.log('input : ', process.argv);

//     const arrArgs = process.argv.slice(2)

//     const args = {}
//     args['method'] = arrArgs[0];
//     args['msg'] = arrArgs[1];

//     console.log(args);

//     this.method = this.checkMethod(args.method);
//     this.msg = this.checkMsg(args.msg)
// }

class Input{
    constructor(){

        const args = minimist(process.argv.slice(2));
        // console.log('**************', args);
        this.method = this.checkMethod(Object.keys(args)[1]);
        this.msg = this.checkMsg(args.add || args.a);


        // const args = minimist(process.argv.slice(2));
        // console.log('input : ', args);
        // this.method = this.checkMethod(Object.keys(args)[1]);
        // this.msg = this.checkMsg(args.add || args.a)



        // const arrArgs = process.argv.slice(2)
    
        // const args = {}
        // args['method'] = arrArgs[0];
        // args['msg'] = arrArgs[1];
    
        // console.log(args);
    
        // this.method = this.checkMethod(args.method);
        // this.msg = this.checkMsg(args.msg)
    }
    checkMethod(method) {
        // console.log('method : ',method);
        let validMethods = /add|a/i;
        return validMethods.test(method) ? 'add' : console.error('add a valid method');
    }
    checkMsg(myMsg) {
        return(myMsg) ? myMsg : console.error('cant add an empty msg');
        // {method:'add' , msg: myMsg}
    }
    valid(){
        return this.method && this.msg ;
    }
}
// // prototype function to check if it is a valid method
// Input.prototype.checkMethod = function (method) {
//     let validMethods = /--add|-a/i;
//     // if (validMethods.test(method)) {
//     //     return method
//     // } else {}
//     return validMethods.test(method) ? method : console.error('add a valid method');
// }
// // prototype functio nto check if is a valid msg
// Input.prototype.checkMsg = function (msg) {
//     return(msg) ? msg : console.error('cant add an empty msg');
// }

module.exports = Input;
