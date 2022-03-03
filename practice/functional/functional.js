// 1. Pure Function 
function add(a, b) {
   return a + b;
}

console.log('Pure Function : ', add(1, 6));  

// 2. Avoid Side Effect 
const b = 16; 
function addSideEffect(a){
   return a + b; 
}

console.log('Side Effect : ', addSideEffect(1));

// 3. First class Function 

//    3.1 Assigning a function to a variable 
const addAssigning = function(a, b){ return a + b; }
console.log('Assigning : ', addAssigning(1, 6));

//    3.2 Returning a function 
function addReturning(a, b){
   return function() {
      return a + b;
   }
}
const addTwoNumber = addReturning(1, 6);
console.log('Returning : ', addTwoNumber());

//    3.3 Accepting a function as an argument 
function addNumber(a, b){
   
}








