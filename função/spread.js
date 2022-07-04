 //se torna argumentos  
   function sum(x,y,z){
        return x + y - z;
    }
    const numbers =[1,2,3];
    const result = sum(...numbers)
    console.log(result);

//se torna um array
    function confereTamanho(...args){
        console.log(args.length);
    };

    confereTamanho();
    confereTamanho(1,3);
    confereTamanho(2,34,5,6);