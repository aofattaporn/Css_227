

const box = document.querySelectorAll('.box');
const reset = document.querySelector('button');
const board = [[0, 0, 0],[0, 0, 0],[0, 0, 0]]
const stack = [];

function pushStack(){
   while(stack.length < 10){
      let rand  = Math.floor(Math.random() * 10) + 1;
      if(!stack.includes(rand)){
         stack.push(rand);
         break;
      }
   }
}

function checkBox(item){
   
      if(item.classList.contains("box-1")){
         console.log("box-1");
         console.log("board[0][0]");
         stack.push(1);
         board[0][0] = 1;
      }else if(item.classList.contains("box-2")){
         console.log("box-2");
         console.log("board[0][1]");
         stack.push(2);
         board[0][1] = 1;
      }else if(item.classList.contains("box-3")){
         console.log("box-3");
         console.log("board[0][2]");
         stack.push(3);
         board[0][2] = 1;
      }else if(item.classList.contains("box-4")){
         console.log("box-4");
         console.log("board[1][0]");
         stack.push(4);
         board[1][0] = 1;
      }else if(item.classList.contains("box-5")){
         console.log("box-5");
         console.log("board[1][1]");
         stack.push(5);
         board[1][1] = 1;
      }else if(item.classList.contains("box-6")){
         console.log("box-6");
         console.log("board[1][2]");
         stack.push(6);
         board[1][2] = 1;
      }else if(item.classList.contains("box-7")){
         console.log("box-7");
         console.log("board[2][1]");
         stack.push(7);
         board[2][1] = 1;
      }else if(item.classList.contains("box-8")){
         console.log("box-8");
         console.log("board[2][1]");
         stack.push(8);
         board[2][1] = 1;
      }else if(item.classList.contains("box-9")){
         console.log("box-9");
         console.log("board[2][2]");
         stack.push(9);
         board[2][2] = 1;
      }

      console.log(stack);
      checkEnd();

      // al playing 

   
};

function checkEnd(){
   if(board[0][0] === 1 && board[0][1] === 1 && board[0][2] === 1){
      console.log("you win");
   }else{
      console.log("you lost");
   }
}

function addSymbol(){

   checkBox(this);
   
   console.log(board);

   const symbol = document.createElement('h1');
   symbol.classList.add('x');
   symbol.textContent = 'x'; 

   this.className = 'new-box';
   this.appendChild(symbol);
   this.removeEventListener('click', addSymbol)

}

// make symbol
box.forEach( item => {
   item.addEventListener('click', addSymbol);
});

//reset 
reset.addEventListener('click', event=>{
   const newBox = document.querySelectorAll('.new-box');
      newBox.forEach(
         item => {
            item.innerHTML = '';
         }
      )
   }
);



 

