/**1. Crie um script que exiba a mensagem "Hello World!" em um alerta no navegador. */
alert("Hello World!");

/**2. Crie um script que declare duas variáveis e exiba o resultado da soma entre elas*/
console.log("Exercício 2");
let a = 10;
let b = 20;
let soma = a + b;
console.log(`${a} + ${b} = ${soma}`);

/**3. Crie um script que declare uma variável e verifique se o seu valor é um número. Se for, exiba a mensagem "É um número", caso contrário, exiba a mensagem "Não é um número"*/
/**💡 Para saber o tipo de dado você pode usar o operador `typeof*/
console.log("\n\nExercício 3");
let c = 30;
let d = "30";
console.log(typeof c);
console.log(typeof d);
if (typeof c === "number") {
    console.log("É um número");
} else {
    console.log("Não é um número");
}

/**4. Crie um script que declare uma variável e verifique se o seu valor é uma string. Se for, exiba a mensagem "É uma string", caso contrário, exiba a mensagem "Não é uma string"*/
console.log("\n\nExercício 4");
let e = "30";
let f = 30;
console.log(typeof e);
console.log(typeof f);
if (typeof e === "string") {
  console.log("É uma string");
} else {
  console.log("Não é uma string");
}

/**5. Crie um script que declare uma variável e verifique se o seu valor é um booleano. Se for, exiba a mensagem "É um booleano", caso contrário, exiba a mensagem "Não é um booleano"*/
console.log("\n\nExercício 5");
let g = true;
let h = "true";
console.log(typeof g);
console.log(typeof h);
if (typeof g === "boolean") {
  console.log("É um booleano");
} else {
  console.log("Não é um booleano");
}

/**6. Crie um script que declare duas variáveis e exiba o resultado da subtração entre elas*/
console.log("\n\nExercício 6");
let i = 30;
let j = 20;
let subtracao = i - j;
console.log(`${i} - ${j} = ${subtracao}`);

/**7. Crie um script que declare duas variáveis e exiba o resultado da multiplicação entre elas*/
console.log("\n\nExercício 7");
let k = 5;
let l = 5;
let multiplicacao = k * l;
console.log(`${k} * ${l} = ${multiplicacao}`);

/**8. Crie um script que declare duas variáveis e exiba o resultado da divisão entre elas*/
console.log("\n\nExercício 8");
let m = 10;
let n = 2;
let divisao = m / n;
console.log(`${m} / ${n} = ${divisao}`);

/**9. Crie um script que declare uma variável e verifique se o seu valor é um número par. Se for, exiba a mensagem "É um número par", caso contrário, exiba a mensagem "Não é um número par"*/
console.log("\n\nExercício 9");
let o = 10;
if (o % 2 === 0) {
  console.log("É um número par");
} else {
  console.log("Não é um número par");
}

/**10. Crie um script que declare uma variável e verifique se o seu valor é um número ímpar. Se for, exiba a mensagem "É um número ímpar", caso contrário, exiba a mensagem "Não é um número ímpar"*/
console.log("\n\nExercício 10");
let p = 11;
if (p % 2 !== 0) {
  console.log("É um número ímpar");
} else {
  console.log("Não é um número ímpar");
}