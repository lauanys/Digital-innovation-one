function comparacao(a,b){
const soma = a + b;
    (a === b) ? 
    console.log(`Os numeros ${a} e ${b} são iguais`)
    : 
    console.log(`Os numeros ${a} e ${b} não são iguais`);
  
    (soma > 10 && soma < 20)?
    console.log(`Sua soma é ${soma}, que e menor que 10 e menor que 20`)
    :
    console.log(`Sua soma é ${soma}`)
   
    
};

comparacao(2,2);