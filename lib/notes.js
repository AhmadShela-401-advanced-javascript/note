'use strict';

// const note = {};
// method of the constructor to disribute the orders based on the methods
class Note {
    constructor() {}
    add(msg) {
        if (msg === undefined || msg === null) {
            return false;
        } else {
            console.log({id: '1', msg: msg})
            return true;
        }
    }
    execute(opts) {
        switch (opts.method) {
            case 'add':
            case 'a':
                if (this.add(opts.msg)) {
                    console.log(`the msg '${
                        opts.msg
                    }' has been added successfully`);
                } else {
                    console.log(`1Sorry, we can't add your msg`);
                }
                break;
            default:
                console.log(`2Sorry, we can't add your msg`);
        }
    }
};
// execute = function (opts) {
//     switch (opts.method) {
//         case '--add':
//         case '-a':
//             if (add(opts.msg)) {
//                 console.log(`the msg '${
//                     opts.msg
//                 }' has been added successfully`);
//             } else {
//                 console.log(`Sorry, we can't add your msg`);
//             }
//             break;
//             // if (add(opts.msg)) {
//             //     console.log(`the msg '${
//             //         opts.msg
//             //     }' has been added successfully`);
//             // } else {
//             //     console.log(`Sorry, we can't add your msg`);
//             // }
//             // break;

//         default:
//             console.log(`Sorry, we can't add your msg`);
//     }
// }

// function add(msg) {
//     if (msg === undefined || msg === null) {
//         return false;
//     } else {
//         console.log({id: '1', msg: msg})
//         return true;
//     }
// }
module.exports = Note;
