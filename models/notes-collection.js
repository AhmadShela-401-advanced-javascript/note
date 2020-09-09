'use strict';

const schema = require('./notes.js');

class Notes{
    constructor(){}
    create(record){
        let recordObj = new schema(record);
        return recordObj.save();
    }
    get(catDesc){
        if (catDesc){
            return schema.find(catDesc);
            
        }else{
            return schema.find();
        }
    }
    update(_id,record){
        return schema.findByIdAndUpdate(_id,record);
    }
    delete(_id){
        return schema.findByIdAndDelete(_id);
    }
}

module.exports = new Notes