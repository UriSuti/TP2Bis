const validarPassword = (password) =>{

    if(password.length > 8 && password.match(/[ABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/gi).length > 1 && password.match(/[0123456789]/gi).length > 1){

        console.log("Contraseña valida");
        
    }
    else{
        console.log("Contraseña invalida");
        
    }
}

validarPassword("aa")