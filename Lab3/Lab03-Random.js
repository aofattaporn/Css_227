
function getRandom(min, max) {
   min = Math.ceil(min);
   max = Math.floor(max);
   return Math.floor(Math.random() * (max - min + 1) + min); 
 }

let state = 1;
let min = 1; 
let max = 100; 
let ans = getRandom(min, max);
let guess = prompt(" Input you number between " + min + "-" + max);

console.log(ans);

while(state == true){

   if(guess < min || guess > max){
      alert("that wrong");
      break;
   }

   // check number in range
   if(guess > ans){
      max = guess;
   }
   else if(guess < ans ){
      min = guess;
   }

   if(guess == ans){
      alert("you collect! that number is " + ans);
      break;
   }else{
      guess = prompt(" Input you number between " + min + "-" + max);   
   }
   console.log(guess);
}


