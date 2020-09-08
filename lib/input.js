#!/usr/bin/env nod

'use strict';

const minimist = require("minimist");

// node index.js --add "later" --cat "school"
class Input{
    constructor(){

        const args = minimist(process.argv.slice(2));
        console.log('**************', args);
        let myMethod = Object.keys(args)[1];
        console.log('>>>>>>>>>>myMethod',myMethod);
        // let testMethod = this.checkMethod(Object.keys(args)[1]);
        // let testMsg = this.checkMsg(args.add || args.a);
        // let testCat = this.checkCat(Object.keys(args)[2]);
        // let testCatDesc = this.checkCatDesc(args.cat);
        // if(!testMethod){
        //     console.error('worng method');
        // }else if(!testMsg){
        //     console.error('worng msg');
        // }else if(!testCat){
        //     console.error('worng category');
        // }else if(!testCatDesc){
        //     console.error('worng category descreption');
        // }else{
        //     this.method = testMethod;
        //     this.msg = testMsg;
        //     this.catDesc = testCatDesc;
        // }
        // if (!this.checkMethod(Object.keys(args)[1])) {
        //     console.error('worng method');
        //     return false;
        // }else if(!this.checkMsg(args.add || args.a)){
        //     console.error('worng msg');
        //     return false;
        // }else if(!this.checkCat(args.cat)){
        //     console.error('worng category');
        //     return false;
        // }
        this.method = this.checkMethod(Object.keys(args)[1]);
        this.msg = this.checkMsg(Object.values(args)[1] || args.a);
        this.cat = this.checkCat(Object.keys(args)[2]);
        this.catDesc = this.checkCatDesc(args.cat)
    }
    checkMethod(method) {
        console.log('method : ',method);
        let validMethods = /add|a|list|delete/i;
        return validMethods.test(method) ? method : false;
    }
    checkMsg(myMsg) 
    {
        console.log('>>>>Ms',myMsg);
        return (myMsg != undefined && myMsg != null && myMsg != true) ? myMsg : false
        // return(myMsg) ? myMsg : false;
        // {method:'add' , msg: myMsg}
    }
    checkCat(myCat){
        let validMethods = /cat/i;
        return validMethods.test(myCat) ? myCat : false;
    }
    checkCatDesc(myCatDesc){
        return (myCatDesc != undefined && myCatDesc != null && myCatDesc != true) ? myCatDesc : false
    }
    valid(){
        return this.method && this.msg ;
    }
}


module.exports = Input;
