let array = ['lauany', 18, 'mulher'];
console.log('nome: ', array [0]);
console.log('idade: ', array [1]);
console.log('gênero: ', array [2]);

array.forEach(function(items, indice){
    console.log(items, indice)
});
//adiciona
array.push(10);
console.log(array);

//remove do final
array.pop();
console.log(array);

//remove do começo
array.shift();
console.log(array);

//adiciona no começo
array.unshift('maria');
console.log(array);

//remove ou substitui um item pelo índice
array.splice(0, 2);
console.log(array);

let novoArray = array.slice(0, 1);
console.log(novoArray);