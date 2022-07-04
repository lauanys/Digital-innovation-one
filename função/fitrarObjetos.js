const user ={
    genre:'feminino',
    age: 18,
    id: '1234',
    fullName:{
        firstName: 'lauany',
        lastName:'Gonçalves'
    }
};

function userId({age}){
    return age;
};

function getFullName({fullName:{firstName:first , lastName:last}}){
    return `${first} ${last}`
};
userId(user);
getFullName(user);
console.log(userId());
console.log(getFullName());
