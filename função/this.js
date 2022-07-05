const user ={
    genre:'feminino',
    age: 18,
    id: '1234',
    fullName:{
        firstName: 'lauany',
        lastName:'Gonçalves'
    }
};

//chamada call
function getFullName(){
   console.log(`${this.genre} ${user.age}`)
};
 getFullName.call(user);

//chamada apply
 const obj ={
    num1:1,
    num2:3,
 }

 function soma(a,b){
    console.log( this.num1 + this.num2 + a + b);
 };

 soma.apply(obj,[1,2])
 
//bind clona a estrutura da função onde é chamada

function returnNome(){
    return this.name
};

let nome = returnNome.bind({name: 'pedro'})

nome();
console.log(nome())