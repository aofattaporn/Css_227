
const box = document.querySelectorAll('.box');
const reset = document.querySelector('button');
const board = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
const stack = [];
let turn = 0;

function createSymbol(item, char){
   const symbol = document.createElement('h1');
   symbol.classList.add(char);
   symbol.textContent = char;

   item.appendChild(symbol);
   item.className = 'new-box';
   item.removeEventListener('click', startPlaying);

   turn++;

}

function checkEndGame(item, char){

   if(      // win by row case 
      (board[0][0] === char && board[0][1] === char && board[0][2] === char) || 
      (board[1][0] === char && board[1][1] === char && board[1][2] === char) ||
      (board[2][0] === char && board[2][1] === char && board[2][2] === char) ||
      // win by collumn casechachar
      (board[0][0] === char && board[1][0] === char && board[2][0] === char) ||
      (board[0][1] === char && board[1][1] === char && board[2][1] === char) ||
      (board[0][2] === char && board[1][2] === char && board[2][2] === char) ||

      (board[0][0] === char && board[1][1] === char && board[2][2] === char) ||
      (board[0][2] === char && board[1][1] === char && board[2][0] === char))
      { 

         // check who is win 
         if(char == 1){

            const status = document.createElement('h1');
            const main = document.querySelector('main');
            status.textContent = 'YOU WIN !!!';
            console.log("YOU WiN !!!");
            main.appendChild(status);
            box.forEach(item => item.removeEventListener('click', startPlaying));

            return 1;

         }else if(char == 2){

            const status = document.createElement('h1');
            const main = document.querySelector('main');
            status.textContent = 'YOU LOSE !!!';
            console.log("YOU LOST !!!");
            box.forEach(item => item.removeEventListener('click', startPlaying));

            main.appendChild(status);

            return 1; 

         }
      }
   else if(turn == 9){

      const status = document.createElement('h1');
      const main = document.querySelector('main');
      status.textContent = 'DIW';
      main.appendChild(status);

      return 1; 

   }

   else{
      return 0;
   }

}

function startPlaying(){

   // my turn
   if(this.classList.contains("box-1")){
      stack.push(1);
      board[0][0] = 1;
   }else if(this.classList.contains("box-2")){
      stack.push(2);
      board[0][1] = 1;
   }else if(this.classList.contains("box-3")){
      stack.push(3);
      board[0][2] = 1;
   }else if(this.classList.contains("box-4")){
      stack.push(4);
      board[1][0] = 1;
   }else if(this.classList.contains("box-5")){
      stack.push(5);
      board[1][1] = 1;
   }else if(this.classList.contains("box-6")){
      stack.push(6);
      board[1][2] = 1;
   }else if(this.classList.contains("box-7")){
      stack.push(7);
      board[2][0] = 1;
   }else if(this.classList.contains("box-8")){
      stack.push(8);
      board[2][1] = 1;
   }else if(this.classList.contains("box-9")){
      stack.push(9);
      board[2][2] = 1;
   }  
   createSymbol(this,'X');

   // bot turn 
   if(checkEndGame(this, 1) == false){

      // bot playing 
      while(true){
         let rand  = Math.floor(Math.random() * 10) + 1;
         if(!stack.includes(rand) && rand !== 10){

            stack.push(rand);
            if(rand == 1){
               board[0][0] = 2;
               const bot = document.querySelector('.box-1');
               createSymbol(bot, 'O');

            }else if(rand == 2){
               board[0][1] = 2;
               const bot = document.querySelector('.box-2');
               createSymbol(bot, 'O');

            }else if(rand == 3){
               board[0][2] = 2;
               const bot = document.querySelector('.box-3');
               createSymbol(bot, 'O');


            }else if(rand == 4 ){
               board[1][0] = 2;
               const bot = document.querySelector('.box-4');
               createSymbol(bot, 'O');

            }else if(rand == 5){
               board[1][1] = 2;
               const bot = document.querySelector('.box-5');
               createSymbol(bot, 'O');

            }else if(rand == 6){
               board[1][2] = 2;
               const bot = document.querySelector('.box-6');
               createSymbol(bot, 'O');

            }else if(rand == 7){
               board[2][0] = 2;
               const bot = document.querySelector('.box-7');
               createSymbol(bot, 'O');

            }else if(rand == 8){
               board[2][1] = 2;
               const bot = document.querySelector('.box-8');
               createSymbol(bot, 'O');

            }else if(rand == 9){
               board[2][2] = 2;
               const bot = document.querySelector('.box-9');
               createSymbol(bot, 'O');

            }
            break;
         }
      }

      checkEndGame(this, 2);

   }

   console.log(board);

}

box.forEach(
   item => {item.addEventListener('click', startPlaying)}
);

function clear(){
   box.forEach(item => {
      item.className = 'box box-' + item.index ;
      item.classList.add = 'box-1';
      item.innerHTML = '';
      item.addEventListener('click', startPlaying);
   });
}

reset.addEventListener('click', clear)