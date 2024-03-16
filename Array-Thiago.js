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

//...new Set retira numeros repedidos em uma Array.

let numeros = [21, 31, 44, 21, 90, 59, 65, 31, 90, 44,];

let unicosnumeros = [...new Set(numeros )]

console.log(unicosnumeros);

/* .map, ele é utilizado para a transformação de um novo Array a partir de um array original,
também tem a funcionalidade de extrair dados de uma Array.
*/

let números = [3, 4, 5, 8,]; 

let novosnumeros = números.map((newnumbers) => newnumbers * 4);

console.log(novosnumeros);

let participantes = [
    { nome: "Renata", idade: 41 },
    { nome: "Flávio", idade: 31 },
    { nome: "Bianca", idade: 16 },
    { nome: "Giuliana", idade: 52 },    
]

console.log(participantes.map((user) => user.nome));
console.log(participantes.map((user) => user.idade));  

/* .Find, ele procura um dado na array. O find espera sempre uma condição para buscar 
um dado específico (sempre exibira o primeiro dado que encontrar mesmo tendo dois dados certos na condição).
*/

let temperatura = [20, 25, 31, 38, 40]; 

let tempMenoresQue30 = temperatura.find(x => x < 30);

console.log(tempMenoresQue30 + " Graus");

// .Split, transforma uma string em array, também adicionando index apartir de uma condição.

let Thiago = "Boa tarde turma, praparados para novo conteudo?, se preparem, logo após teremos prova escrita,";
let Thiago2 = "novo professor não chega, muito menos ar-condicionado,"; 
let Thiago3 = "quando o ar chegar, deixem blusa de frio na bolsa, bom almoço gente.";

let frase = Thiago.concat(Thiago2 + Thiago3);

let falasThiago = frase.split(",");

console.log(falasThiago);