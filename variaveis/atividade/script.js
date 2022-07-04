let nome1 = 'ovo';

function verificar(){
  if(!nome1) {
    return `nome inexistente`;
  }
  if(  nome1.split("").reverse().join("") == nome1 ){
        return `${nome1} é um palíndromo `
     }else{
        return  `${nome1} não  é um palíndromo `
     }
 

};


console.log(verificar());
verificar();
