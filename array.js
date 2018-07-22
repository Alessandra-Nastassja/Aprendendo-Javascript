let listaFrutas = new Array('Morango', 'Abacaxi', 'Abacate', 'Melão');
console.log(listaFrutas);
listaFrutas[3] = "Maracuja";
listaFrutas.push("Banana");

console.log(listaFrutas.length);

listaFrutas.sort();
console.log(listaFrutas);
delete listaFrutas[3];
listaFrutas.splice(1,1); //começa a partir de um o primeiro indice
listaFrutas.splice(1,1, "Elemento", "Elemento"); // exclui o um e adiona dois elementos
