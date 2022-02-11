const paragraph = document.querySelector("p");

function myFunction() {
   let x = document.querySelector('#myDIV');
   if (x.style.display === 'none') {
      paragraph.textContent = 'V HIDE DETAILS';
      x.style.display = 'block';
   } else {
      paragraph.textContent = '>> SHOW DETAILS';

     x.style.display = 'none';
   }
}

paragraph.addEventListener('click', myFunction);

