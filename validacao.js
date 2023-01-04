
const btn = document.querySelector('.button')
.addEventListener('click', (e)=>{
   validarFormulario();
   closePage();

})  


    function closePage(){
        let close = document.querySelector('.x')
        .addEventListener('click', ()=> {
            var chamada = document.querySelector('.center_row');
            chamada.style.display = 'none';    
        })
        
    }




function validarFormulario(){
    
    if (document.querySelector('#email').value.length > 15 && 
    document.getElementById('password').value.length > 8 &&
    document.getElementById('lastname').value.length > 3 &&
    document.getElementById('firstname').value.length > 3){
        
        var chamada = document.querySelector('.center_row');
        chamada.style.display = 'block';     
        closePage();
           
    } else {
        console.log('erro, algum campus esta errado')
    }
    
    var nome = document.getElementById('firstname');
    
    if (nome.value == '' || nome.value.length < 3){
        nome.classList.add('erro');
        nome.classList.remove('sucess');
        
        
    } else {
        nome.classList.remove('erro');
        nome.classList.add('sucess');
    }

    var lastNome = document.getElementById('lastname');

    if (lastNome.value == '' || lastNome.value.length < 3){
        lastNome.classList.add('erro');
        lastNome.classList.remove('sucess');

    } else {
        lastNome.classList.remove('erro');
        lastNome.classList.add('sucess');
    }


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
 

    var password = document.getElementById('password');

    if (password.value == '' || password.value.length < 8){
        password.classList.add('erro');
        password.classList.remove('sucess');

    } else {
        password.classList.remove('erro');
        password.classList.add('sucess');
    }

}