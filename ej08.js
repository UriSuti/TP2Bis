const analizarTexto = (texto) =>{

    console.log("Caracteres " + texto.length); 
    console.log("Palabras " + texto.split(" ").length); 
    
    const vocales = texto.match(/[aeiouAEIOU]/gi);
    console.log("Vocales " + vocales.length); 

    const consonantes = texto.match(/[bcdfghjklmnñpqrstvwxyzBCDFGHJKLMNÑPQRSTVWXYZ]/gi);
    console.log("Consonantes " + consonantes.length); 
    

}

analizarTexto("Hola mundo")

