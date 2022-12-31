
const btn = document.querySelector('.button')
.addEventListener('click', (e)=>{
   validarNome();
   validarLast_nome();
   validarEmail();
   validarPass();
})


function validarNome(){
    var nome = document.getElementById('firstname');

    if (nome.value == '' || nome.value.length < 3){
        nome.classList.add('erro');
        nome.classList.remove('sucess');
        
        
    } else {
        nome.classList.remove('erro');
        nome.classList.add('sucess');
    }
}

function validarLast_nome(){
    var lastNome = document.getElementById('lastname');

    if (lastNome.value == '' || lastNome.value.length < 3){
        lastNome.classList.add('erro');
        lastNome.classList.remove('sucess');

    } else {
        lastNome.classList.remove('erro');
        lastNome.classList.add('sucess');
    }
}

function validarEmail(){
    var email = document.querySelector('#email');  
    
    if (email.value == '' || email.value.length < 15){
        email.classList.add('erro');
        email.classList.remove('sucess');
        
    } else {
        email.classList.remove('erro');
        email.classList.add('sucess');
    }

    var desc = 'email@example/com';

    if(!email.value.includes('@')){
        email.value = '';
        email.style.color = '#ff7a7a';
        email.classList.add('erro');
        email.value += `${desc}`; 
        
    }else if(email.value == 'email@example/com'){
        email.value = '';
        email.innerHTML = '';
        email.style.color = '#38cc8c';
    }
}
    

function validarPass(){
    var password = document.getElementById('password');

    if (password.value == '' || password.value.length < 8){
        password.classList.add('erro');
        password.classList.remove('sucess');

    } else {
        password.classList.remove('erro');
        password.classList.add('sucess');
    }
}
