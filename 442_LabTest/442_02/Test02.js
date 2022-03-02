const input = document.querySelector('.main__form__inputList');
const main = document.querySelector('main');

function addList(){

   console.log(input.value);

   if (event.keyCode === 13){
   
      console.log(input.value);

      const container = document.createElement('div');
      container.classList.add("main__ListContainer");
      main.appendChild(container);

      const trash = document.createElement('div');
      trash.classList.add("fa");
      trash.classList.add("fa-trash");
      trash.classList.add("main__ListContainer__trash");
      container.appendChild(trash);
      

      const list = document.createElement('h1');
      list.classList.add("main__ListContainer__title");
      list.textContent = input.value;
      container.appendChild(list);

      // provid onclick order 
      const listToDO = document.querySelectorAll('.main__ListContainer__title');
      listToDO.forEach(
         item => {item.addEventListener('click', linelineThrough);}
      );

      // create trash 
      trash.addEventListener('click', removeList);
      

   }
}

function removeList(){
   console.log('remove complte');

   const listToDO = document.querySelectorAll('.main__ListContainer');
   listToDO.forEach(
      item => {item.addEventListener('click', item.remove);}
   );
   
}

function linelineThrough(){
   this.style.textDecoration = 'line-through';
   this.style.color = "grey"
   
}

input.addEventListener('keyup', addList);


