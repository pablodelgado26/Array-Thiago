// .Concat, uni valores ou Arrays e retorna uma nova Array com todos valores com a ordem passada.
let a = [1, 2, 3,];
let b = [4, 5, 6,];

let sequencia = a.concat(b);

console.log(sequencia);

let a1 = [7, 8, 9,];
let b1 = [10, 11, 12,];

let sequencia1 = a1.concat(b1);

console.log(sequencia1);


// .of cria uma array a partir de uma variável.

let paises = Array.of("Brasil", "França", "Italia", "Russia");

console.log(paises);

let comidas = Array.of("Pizza", "Sushi", "Hambúrgue", "Tacos");

console.log(comidas);


// .Sort, exibe números de Array em ordem crescente ou decrescente (sempre que for em ordem decrescente usar if).

let numbers = [1, 2, 3, 4, 5,];
numbers.sort((a, b) => {
    if (a >= b) return -1;
})

console.log(numbers);

let numbers1 = [1, 2, 3, 4, 5,];
numbers.sort((a, b) => {
    if (a <= b) return 1;
})

console.log(numbers1);

// .Reverse, mostra sua Array de trás pra frente ou melhor inversamente. 

let rev = [5, 4, 3, 2, 1,];

let sequenciacorreta = rev.reverse();

console.log({ sequenciacorreta });

let rev1 = [1, 2, 3, 4, 5,];

let sequenciacorreta1 = rev.reverse();

console.log({ sequenciacorreta1 });

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

let convidados1 = [
    { nome: "Fernando", idade: 75 },
    { nome: "Norma", idade: 28 },
    { nome: "Bianca", idade: 19 },
    { nome: "Monica", idade: 34 },
]

let Adultos1 = (pessoa) => pessoa.idade >= 18;

console.log(convidados1.every(Adultos1));

//...new Set, retira numeros repedidos em uma Array.

let numeros = [21, 31, 44, 21, 90, 59, 65, 31, 90, 44,];

let unicosnumeros = [...new Set(numeros)]

console.log(unicosnumeros);

let numeros1 = [87, 34, 60, 53, 71, 60, 34, 87, 53, 71,];

let unicosnumeros1 = [...new Set(numeros1)]

console.log(unicosnumeros1);

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

let tempMenorQue30 = temperatura.find(x => x < 30);

console.log(tempMenorQue30 + " Graus");

let temperatura1 = [20, 25, 31, 38, 40];

let tempMaiorQue30 = temperatura1.find(x => x > 30);

console.log(tempMaiorQue30 + " Graus");


// .Split, transforma uma string em array, também adicionando index apartir de uma condição.

let Thiago = "Boa tarde turma, praparados para novo conteudo?, se preparem, logo após teremos prova escrita,";
let Thiago2 = "novo professor não chega, muito menos ar-condicionado,";
let Thiago3 = "quando o ar chegar, deixem blusa de frio na bolsa, bom almoço gente.";

let frase = Thiago.concat(Thiago2 + Thiago3);

let falasThiago = frase.split(",");

console.log(falasThiago);

let Thiago4 = "Turma, leiam o exercicio somente ler, eu faço isso em 5 minutos,";
let Thiago5 = "Falem com o professor Felipe, eu não estou bravo, é só minha cara,";
let Thiago6 = "Se atentem ao horario de entrega, rotina dos computadores, prestem atenção somente aqui.";

let frase1 = Thiago4.concat(Thiago5 + Thiago6);

let falasThiago1 = frase1.split(",");

console.log(falasThiago1);

// .Fill, substitui numeros dentro de uma array por palavras ou numeros.

let esportes = [1, 2, 3, 4, 5, 6];

esportes.fill("futebol", 0, 1);

esportes.fill("volei", 1, 2,);

esportes.fill("basquete", 2, 3,);

esportes.fill("handball", 3, 4,);

esportes.fill("natação", 4, 5,);

esportes.fill("luta", 5, 6,);

console.log(esportes);

let esportes1 = [1, 2, 3, 4, 5, 6];

esportes1.fill("vermelho", 0, 1);

esportes1.fill("branco", 1, 2,);

esportes1.fill("azul", 2, 3,);

esportes1.fill("verde", 3, 4,);

esportes1.fill("amarelo", 4, 5,);

esportes1.fill("preto", 5, 6,);

console.log(esportes1);

// .Slice, retorna uma copia de array removendo algumas index (sempre tira index em Array sobre porções).

let frutas = ["Banana", "Uva", "Morango", "Laranja",];

let melhoresFrutas = frutas.slice(1, 3);

console.log(melhoresFrutas);

// .slice substituindo

melhoresFrutas.splice(5, 2, "kiwi", "melão");

console.log(melhoresFrutas);

// .slice adicionando

melhoresFrutas.splice(5, 4, "jambo");

console.log(melhoresFrutas);