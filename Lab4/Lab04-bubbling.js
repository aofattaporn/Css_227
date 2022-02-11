



function outside(){
   
   document.getElementById('Outside-Box').style.backgroundColor = 'rgb(5, 176, 176)';

}

function inside(){
   
   document.getElementById('Inside-Box').style.backgroundColor = 'rgb(3, 120, 4)';

}

function reset(){
   
   document.getElementById('Inside-Box').style.backgroundColor = 'rgb(135, 230, 138)';
   document.getElementById('Outside-Box').style.backgroundColor = 'rgb(92, 225, 225)';
}

const outSide = document.querySelector('#Outside-Box');
const inSide = document.querySelector('#Inside-Box');
const resetx = document.querySelector('button');

outSide.addEventListener('click', outside);
inSide.addEventListener('click', inside);
resetx.addEventListener('click', reset);
