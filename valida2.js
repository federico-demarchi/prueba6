window.onload = iniciar; 


function iniciar() {
    document.getElementById('send').addEventListener('click', validate, false);
}


function valida_nombre() {
    var elemento = document.getElementById('nombre');
    if (elemento.value == ''){
        alert('Completa todos los campos');
        return false 
    }
    return true;
}

function valida_telefono() {
    var elemento = document.getElementById('tel');
    if (isNaN(elemento.value)){
        alert('Completa el campo teléfono con números');
        return false 
    }
    return true;
}

function valida_mail() {
    var elemento = document.getElementById('mail');
    if (elemento.value == ''){
        alert('Completa todos los campos');
        return false 
    }
    return true;
}

function valida_mensaje() {
    var elemento = document.getElementById('mensaje');
    if (elemento.value == ''){
        alert('Completa todos los campos');
        return false 
    }
    return true;
}

function valida_check() {
    var elemento = document.getElementById('norobot');
    if (!elemento.checked){
        alert('Esta es una Web para humanos');
        return false;
    }
    return true;
}

function validate(e) {
    if (valida_nombre() && valida_telefono() && valida_check() && valida_mail() && valida_mensaje() && confirm('Desea enviar?')){
        return true;
    } else {
    e.preventDefault();
    return false;
    }  
} 
