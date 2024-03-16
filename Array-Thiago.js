// .Contact, uni valores ou Arrays e retorna uma nova Array com todos valores com a ordem passada.
let a = [1, 2, 3,];
let b = [4, 5, 6,];

let sequencia = a.concat(b);
console.log(sequencia);

// .Slice, retorna uma copia de array sem algumas index (sempre tira index em Array sobre porções).

let frutas = ["Banana", "Uva", "Morango", "Laranja", "jambo"];

let melhoresFrutas = frutas.slice(1, 3);
console.log(melhoresFrutas);

// .Sort, exibe números de Array em ordem crescente ou decrescente (sempre que for em ordem decrescente usar if).

let numbers = [5, 4, 3, 2, 1];
numbers.sort((a, b) => {
    if (a > b) return 1;
})

console.log(numbers);

// .Reverse, mostra sua Array de trás pra frente ou melhor inversamente. 

let rev = [5, 4, 3, 2, 1,];

let sequenciacorreta = rev.reverse();

console.log({ sequenciacorreta}); 

/*.Every, passa uma função de dados sobre uma validação, a exibição sempre sera em true ou false.
 Será exibido a lista completa de idades. Se somente uma idade estiver menor que 18 anos será exibido false,
se todos forem maiores que 18 anos aparecera true.
*/

let convidados = [
    { nome: "Fernando", idade: 50 },
    { nome: "Norma", idade: 48 },
    { nome: "Bianca", idade: 16 },
    { nome: "Monica", idade: 54 },    
]

let Adultos = (pessoa) => pessoa.idade >= 18;

console.log(convidados.every(Adultos));

//.From pesquisar e executar para que retire numeros repetidos 

let numeros = [21, 31, 44, 21, 90, 59, 65, 31, 90, 44,];

let unicosnumeros = numeros.from(duplicados);

console.log(unicosnumeros);