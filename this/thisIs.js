'use strict'

function asim() {
    console.log(this)
}

asim()
asim.call(window)

// const asim = {
//     checkThis: function() {
//         function checkOther() {
//          console.log('This is: ',this)   
//         }
//     checkOther.call(this)
//     }
// }

// asim.checkThis()