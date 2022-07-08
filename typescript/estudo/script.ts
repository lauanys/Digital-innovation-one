console.log('ola')
//inerface
interface TAnimal{
    raça: string;
    tipo: string;
    porte: "pequeno" |"médio"| "grande";
};
interface TPessoa{
    nome: string;
    age:number;
};
const Animal: TAnimal={
    raça:'gato',
    tipo:'felino',
    porte:'médio',
};

//type
type SerVivo = TAnimal | TPessoa;

const ser: SerVivo ={
    nome: 'joão',
    age:34,
 
};

//generics

function adicionarLista<T>(array: T[] , valor: T){
    return array.map(() => valor);
};
adicionarLista([1,2,3], 12)

//parâmetros
interface Usuario{
    cargo:'gerente' | 'supervisor';
};
function Cargo(user: Usuario){
    if("cargo" in user){

    }
   
};

//opcional

interface Cachorro{
    nome: string;
    age: number;
// ? = valor opcional 
    parqueFavorito?: string;
};

const MeuCachorro: Cachorro = {
    nome:'pandora',
    age: 2 ,

};
