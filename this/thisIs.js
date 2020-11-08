'use strict'

// function asim() {
//     console.log(this)
// }

// asim()
// asim.call(window)

// const asim = {
//     checkThis: function() {
//         function checkOther() {
//          console.log(this)   
//         }
//     checkOther.call(this)
//     }
// }

// asim.checkThis()

var animal = {
    kind: 'cow',
    which: function(){
        console.log(this)
        console.log(this.kind)
    }
}

// this = undifined ดังนั้น undifined.kind จึง throw error ออกมา
var animalFunc = animal.which
// animalFunc()
animalFunc.call(animal)
// animal.which()