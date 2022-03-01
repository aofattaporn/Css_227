const color = document.querySelectorAll('.box');

function changColor(){
   const white = document.querySelectorAll('.white');
   const black = document.querySelectorAll('.black');

   white.forEach(
      white => white.className = "black"
   );

   black.forEach(
      white => white.className = "white"
   );


}


color.forEach(
   item => {item.addEventListener('click', changColor)}
);