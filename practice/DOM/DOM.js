
function onClick(){
   console.log("click!!");
}

function changContent(){
   
   word.textContent = "vra cae";
   
   const newImage = document.createElement('img');
   newImage.src = "https://s.isanook.com/sr/0/rp/rc/w0h0/ya0xacm1w0/aHR0cDovL2pvb3gtY21zLWltYWdlLTEyNTEzMTYxNjEuZmlsZS5teXFjbG91ZC5jb20vMjAyMS8wOS8yMy9lNDZjMmQ3Yi0wOTNiLTQ0ODMtOTEyOC0yZDRkYTIzYjMxMWIuanBnLzEwMDA=.jpg";

   const container = document.querySelector('.container');
   container.appendChild(newImage);

} 


// get objrct 
const button = document.querySelector('button');


// create event 
button.addEventListener('click', onClick);

button.addEventListener('click', changContent); 