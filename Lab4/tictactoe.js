const box = document.querySelectorAll('div[class*="box"]');
const reset = document.querySelector('button');

let board = [[0, 0, 0],[0, 0, 0],[0, 0, 0]];
let stack = [];
let turn = 0;

function createSymbol(item, char){

   const symbol = document.createElement('h1');
   symbol.classList.add(char);
   symbol.textContent = char;

   item.appendChild(symbol);
   item.className = 'newBox';
   item.removeEventListener('click', playing);

   turn++;

}

function checkEndGame(item, char){

   if(      
      // win by row case 
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

         console.log("someone");
         // check who is win 
         if(char === "X"){

            const status = document.createElement('h1');
            const main = document.querySelector('main');

            status.textContent = 'YOU WIN !!!';
            status.className = 'status';
            console.log("YOU WiN !!!");
            main.appendChild(status);

            box.forEach(item => item.removeEventListener('click', playing));

            return 1;

         }else if(char === "O"){

            const status = document.createElement('h1');
            const main = document.querySelector('main');

            status.textContent = 'YOU LOSE !!!';
            status.className = 'status';
            console.log("YOU LOST !!!");

            box.forEach(item => item.removeEventListener('click', playing));

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

function playing(){
   
   // my turn
   if(this.classList.contains("box-1")){
      stack.push(1);
      board[0][0] = 'X';
   }else if(this.classList.contains("box-2")){
      stack.push(2);
      board[0][1] = 'X';
   }else if(this.classList.contains("box-3")){
      stack.push(3);
      board[0][2] = 'X';
   }else if(this.classList.contains("box-4")){
      stack.push(4);
      board[1][0] = 'X';
   }else if(this.classList.contains("box-5")){
      stack.push(5);
      board[1][1] = 'X';
   }else if(this.classList.contains("box-6")){
      stack.push(6);
      board[1][2] = 'X';
   }else if(this.classList.contains("box-7")){
      stack.push(7);
      board[2][0] = 'X';
   }else if(this.classList.contains("box-8")){
      stack.push(8);
      board[2][1] = 'X';
   }else if(this.classList.contains("box-9")){
      stack.push(9);
      board[2][2] = 'X';
   }  
    // create synbol
    createSymbol(this, 'X');

   if(checkEndGame(this, 'X') == 0){
     // bot playing 
      while(true){
         let rand  = Math.floor(Math.random() * 10) + 1;
         if(!stack.includes(rand) && rand !== 10){

            stack.push(rand);
            if(rand == 1){
               board[0][0] = 'O';
               const bot = document.querySelector('.box-1');
               createSymbol(bot, 'O');

            }else if(rand == 2){
               board[0][1] = 'O';
               const bot = document.querySelector('.box-2');
               createSymbol(bot, 'O');

            }else if(rand == 3){
               board[0][2] = 'O';
               const bot = document.querySelector('.box-3');
               createSymbol(bot, 'O');


            }else if(rand == 4 ){
               board[1][0] = 'O';
               const bot = document.querySelector('.box-4');
               createSymbol(bot, 'O');

            }else if(rand == 5){
               board[1][1] = 'O';
               const bot = document.querySelector('.box-5');
               createSymbol(bot, 'O');

            }else if(rand == 6){
               board[1][2] = 'O';
               const bot = document.querySelector('.box-6');
               createSymbol(bot, 'O');

            }else if(rand == 7){
               board[2][0] = 'O';
               const bot = document.querySelector('.box-7');
               createSymbol(bot, 'O');

            }else if(rand == 8){
               board[2][1] = 'O';
               const bot = document.querySelector('.box-8');
               createSymbol(bot, 'O');

            }else if(rand == 9){
               board[2][2] = 'O';
               const bot = document.querySelector('.box-9');
               createSymbol(bot, 'O');

            }
            checkEndGame(this, 'O');
            console.log(board);
            break;
         }
      }
   }


}

function remove(){

   let num = 0;
   let x = document.querySelector('.status');
   console.log(x.textContent);
   x.textContent = "test";
   x.remove();
   box.forEach(
      item => {
         item.className = 'box-' + (++num);
         item.innerHTML = ''
      }
   )
}



reset.addEventListener('click', remove);

box.forEach(
   item => {item.addEventListener('click', playing)}
)
