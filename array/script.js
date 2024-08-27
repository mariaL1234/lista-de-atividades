// 1 

//a

let texto = "Aprendendo JavaScript é divertido e recompensador!";
console.log(texto.toUpperCase());

// b

console.log(texto.includes("divertido"));

// c

let palavras = texto.split(" ");
console.log(palavras);

// d

let palavrasComHifen = palavras.join("-");
console.log(palavrasComHifen);

// 2 

//a

let num1 = 200.456;
console.log(Math.round(num1));

// b

let num2 = 150.789;
console.log(Math.max(num1, num2));
console.log(Math.min(num1, num2));

// c

console.log(Math.sqrt(num2));

//  d

console.log(num1.toExponential());

// 3 

//a

let x = 8, y = 12, z = 8;
console.log(x >= y);

//  b

console.log(x != z);
console.log(x !== z);

//  c

console.log(x < y && z > x);

//  d

console.log(x === z || y < z);

// 4

//a

let nulo = null;
console.log(nulo == undefined);
console.log(nulo === undefined);

//  b

let indefinido;
console.log(isNaN(indefinido));

//  c

let numStr2 = "123abc";
let convertido = Number(numStr2);
console.log(isNaN(convertido));

// 5 a

let numeros = [10, 20, 30, 40, 50];
numeros.push(60);
console.log(numeros);

//  b

let removido = numeros.pop();
console.log(removido);
console.log(numeros);

//  c

numeros.splice(2, 1);
console.log(numeros);

//  d

numeros.sort((a, b) => b - a);
console.log(numeros);

// 6 

//a

let pessoa = {
    nome: "João",
    idade: 30,
    profissao: "Desenvolvedor",
    endereco: {
        rua: "Rua das Flores",
        cidade: "São Paulo",
        estado: "SP"
    },
    apresentacao: function() {
        return `Olá, meu nome é ${this.nome}, tenho ${this.idade} anos e sou ${this.profissao}.`;
    }
};
console.log(pessoa.apresentacao());

//  b

console.log(pessoa.endereco.cidade);

//  c

pessoa.profissao = "Arquiteto";
console.log(pessoa);

//  d

pessoa.telefone = "1234-5678";
console.log(pessoa);

// 7 

//a

function soma(a, b) {
    return a + b;
}
console.log(soma(5, 3));

//  b

function ehPar(num) {
    return num % 2 === 0;
}
console.log(ehPar(4));
console.log(ehPar(5));

//  c

function dobraValores(arr) {
    return arr.map(num => num * 2);
}
console.log(dobraValores([1, 2, 3]));

//  d

function contaCaracteres(str) {
    return str.length;
}
console.log(contaCaracteres("Hello"));

//  e

function fatorial(n) {
    if (n === 0) return 1;
    return n * fatorial(n - 1);
}
console.log(fatorial(5));

// 8 

//a

let aniversario = new Date("20/08/2024");

//  b

let hoje = new Date();
console.log(hoje);

//  c

let diff = Math.ceil((aniversario - hoje) / (1000 * 60 * 60 * 24));
console.log(diff + " dias");

//  d

let ano = hoje.getFullYear();
let mes = String(hoje.getMonth() + 1).padStart(2, '0');
let dia = String(hoje.getDate()).padStart(2, '0');
console.log(`${ano}-${mes}-${dia}`);

//  e

let novaData = new Date(hoje);
novaData.setDate(hoje.getDate() + 30);
console.log(novaData);

// 9 

//a

function executaOperacao(num1, num2, operacao) {
    return operacao(num1, num2);
}

function soma(a, b) {
    return a + b;
}

function multiplicacao(a, b) {
    return a * b;
}

console.log(executaOperacao(5, 3, soma));
console.log(executaOperacao(5, 3, multiplicacao));

//  b

function repetirOperacao(num, operacao) {
    for (let i = 0; i < num; i++) {
        console.log(operacao(i));
    }
}
repetirOperacao(5, x => x * 2);

//  c

function contarOcorrencias(str, char) {
    let count = 0;
    [...str].forEach(c => {
        if (c === char) count++;
    });
    return count;
}
console.log(contarOcorrencias("hello world", "o"));