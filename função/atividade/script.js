const aluno =[
    {name:' maria',
    nota: 10,
    },
    {name:' mara',
    nota: 6,
    },
    {name:' lauany',
    nota: 4,
    }
]

function alunosAprovados(arr, media){
    let aprovados = [];

    for(let i = 0; i < arr.length; i++){
        const {nota, name} = arr[i];

        if(nota >= media){
            aprovados.push(name);
        }
    }
  return `A média é ${media} e os alunos aprovados foram: ${aprovados} `;
};

console.log(alunosAprovados(aluno,5))