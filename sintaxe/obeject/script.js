let object = {
    String:'lauany',
    Number: 1,
    Boolean: true,
};
console.log(object.String);

let novoObjeto = object.String;
console.log(novoObjeto);

let {Number, String} = object;
console.log(Number, String)