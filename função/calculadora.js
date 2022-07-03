function calculadora(){
    const result = prompt('Escolha uma operação:1-soma +   2-subtração - 3-Multiplicação * 4-Divisão %  5-Potenciação **');
    let n1 =Number(prompt('Insira o primeiro valor:')) ;
    let n2 =Number(prompt('Insira o segundo valor:')) ;
    let resultado ;
    function  soma(){
       resultado = n1 + n2;
        alert(`${n1} + ${n2}= ${resultado}`);
        opção();
       
    };
    function subtração(){
        resultado = n1 - n2;
        alert(`${n1} - ${n2}= ${resultado}`);
        opção();
       
    };
    function  Multiplicação(){
        resultado = n1 * n2;
        alert(`${n1} * ${n2}= ${resultado}`);
        opção();
         
    };
    function Divisão(){
        resultado = n1 / n2;
        alert(`${n1} % ${n2}= ${resultado}`);
        opção();
       
    };
    function  Potenciação(){
        resultado = n1 ** n2;
        alert(`${n1} ** ${n2}= ${resultado}`);
        opção();
       
    };
    function opção(){
        let opcao =Number(prompt('Deseja fazer outra operação ? sim-> Digite 1 ou não-> Digite 2'));
        if(opcao === 1){
            calculadora();

        }else if (opcao === 2){
            alert('até mais!');
        }else{
            alert('Digite uma opção valida');
            opcao();
        }
    };
    if(result == 1){
        soma();
    }else if(result == 2){
        subtração();
    }else if(result == 3){
        Multiplicação();
    }else if(result == 4){
        Divisão();
    }else if(result == 5){
        Potenciação();
    }else{
        alert('Numero inválido')
    }
    
};

calculadora();