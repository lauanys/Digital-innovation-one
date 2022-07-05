function validaArray(arr,num){
    try{
        if(!arr && !num) throw new ReferenceError('envie os parâmetros'); 

        if(typeof arr !== 'object') throw new TypeError('Array precisa ser do tipo object');
    
        if(typeof arr !== 'number') throw new TypeError('num precisa ser do tipo number');
    
        if(arr.length !== num) throw new RangeError('tamanho inválido!');

        return arr;
    }
    catch(e){
        if(e instanceof ReferenceError){
            console.log('esté error e um ReferenceError');
            console.log(e.name)
            throw e;
        }else if(e instanceof TypeError){
            console.log('esté error e um TypeError');
            console.log(e.name)
            throw e;
        }else if(e instanceof RangeError){
            console.log('esté error e um RangeError');
            console.log(e.name)
            throw e;
        }else{
            console.log('tipo de erro não esperado: '+ e);
        }
    }
};
console.log(validaArray([1,2,3,4,5],5));