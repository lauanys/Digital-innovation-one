const pessoa1 = {
    nome:'joao',
    idade: 12
};
const pessoa2 = {
    nome:'maria',
    idade: 2
}
function calculaIdade(anos) {
	return `Daqui a ${anos} anos, 
    ${this.nome} terá ${this.idade + anos} 
    anos de idade.`;
};

console.log(calculaIdade.apply(pessoa1,[20]));
console.log(calculaIdade.call(pessoa2,20))