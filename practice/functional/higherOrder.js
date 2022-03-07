// 4. Higher order functions 
// 4.1 returnn a function 
// 4.2 Accepting a function as an argument 

const persons = [
   {name : "John", age: 17},
   {name : "Jane", age: 10},
   {name : "Jim", age: 15}
]

console.log('=====================================');

// filter 
const kids = []; 
for(let i = 0; i < persons.length; i++){
   const person = persons[i];
   if(person.age <= 15){
      kids.push(person);
   }
}
console.log('Kids', kids);

const kids2 = persons.filter(person => person.age <= 15 );
console.log('Kids2', kids2);

console.log('=====================================');

// map 
const olderPersons = [];
for(let i = 0; i < persons.length; i++){
   const person = persons[i]; 
   olderPersons.push({
      ...person, 
      age: person.age * 2
   });
}
console.log('Older persons', olderPersons);

const olderPersons2 = persons.map((person) => {
   return {
      ...person,
      age: person.age * 2
   }
});
console.log('Older persons2', olderPersons2);

console.log('=====================================');

// reduce 
const totalAge = persons.reduce((age, person) => age + person.age , 0);
console.log('total : ' + totalAge); 


console.log('=====================================');
