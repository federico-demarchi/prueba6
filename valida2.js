window.onload = iniciar; 


function iniciar() {
    document.getElementById('send').addEventListener('click', validate, false)
}


function valida_nombre() {
    var elemento = document.getElementById('nombre');
    if (elemento.value == ''){
        alert('El campo nombre no puede estar vacio');
        return false 
    }
    return true;
}

function valida_telefono() {
    var elemento = document.getElementById('tel');
    if (isNaN(elemento.value)){
        alert('El campo teléfono debe ser un número');
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
    if (valida_nombre() && valida_telefono() && valida_check() && confirm('Desea enviar?'))
    return true;
    } else {
    e.preventDefault();
    return false;
    }
