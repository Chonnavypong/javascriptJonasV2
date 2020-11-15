'use strict';

const Person = function (firstName, birthYear) {  
  this.firstName = firstName
  this.birthYear = birthYear
}

const jonas = new Person('Jonas', 1991);

Person.prototype.calcAge = function(){
  return 2037 - this.birthYear
}

console.log(jonas, jonas.calcAge());

class PersonEs6 {
  constructor(firstName, birthYear){
    this.firstName = firstName
    this.birthYear = birthYear
  }

  calcAgeEs6(){
    return 2037 - this.birthYear
  }
}

const jonasEs6 = new PersonEs6('JonasEs6', 1991)

console.log( jonasEs6, jonasEs6.calcAgeEs6() )

const PersonCreate = {}
const jonasCreate = Object.create(PersonCreate)
jonasCreate.firstName = 'JonasCreate'
jonasCreate.birthYear = 1991

console.log(jonasCreate)
// class student extends Person{
//   course
//   constructor(){
//     super()
//     this.course = course
//   }
//   intro(){
//     console.log('Hi')
//   }
// }

// console.log('student extends : ',new student('Physics'))
// console.dir(student.intro())
