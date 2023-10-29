 const myFormular = document.querySelector('#formular');
 const myNumeInput = document.querySelector('#nume');
 const myPrenumeInput = document.querySelector('#prenume');
 const emailInput = document.querySelector('#email'); 
 const msg= document.querySelector('.mesaj');
 const users = document.querySelector('#useri');

 myFormular.addEventListener('submit', onSubmit);

 function onSubmit(e){
    e.preventDefault();
    if(myNumeInput.value === '' || myPrenumeInput.value === ''
     || emailInput.value === '')
    {
        msg.classList.add('eroare');
        msg.innerHTML = 'Va rugam sa completati toate casutele !';

        setTimeout(() => mesaj.remove() , 3000 );
    } else {
       const li = document.createElement('li');
       li.appendChild(document.createTextNode( `${myNumeInput.value} : 
       ${myPrenumeInput.value} : ${emailInput.value}`));

       users.appendChild(li);

       myNumeInput.value = '';
       myPrenumeInput.value = '';
       emailInput.value = '';
    }
 }

