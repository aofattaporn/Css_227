const section = document.querySelectorAll('section');


function removeElem(){
   this.remove();
   console.log("hello")

}

section.forEach(
   item => {item.addEventListener('click', removeElem)}
);