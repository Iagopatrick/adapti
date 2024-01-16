
// push e pop add e exclui elemtos ao final do array
// shift e unshift faz o mesmo, mas ao inicio do array
// indexOf e lastIndexOf -> procura o index de ocorrencia de determinado elemento, o last procura a ultima ocorrencia e o outro o primeiro
// trim -> tira o que não é string
// padStart -> espaço no inicio

let ex1 = [1, 2, 3, 4, 5];
console.log(ex1[1] + " " + ex1[3]+ " " + ex1[4]);

let onibus = {
    rodas = 8,
    limite_passageiros = 40,
    portas = 2

};

delete onibus.rodas;
onibus.janela = 20;

let nomes = ["Camilly", "Iago", "Patrick"];

if (nomes.includes("Iago")) console.log("Tem meu nome");
