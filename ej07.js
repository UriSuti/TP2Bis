let segundo = 0

setInterval(() => {
    
    if(segundo < 10){
        segundo++;
        console.log(segundo);
    }
 
    if(segundo == 10){
    
        console.log("Fin del contador");
        segundo++;
    
    }
    
}, 1000);

