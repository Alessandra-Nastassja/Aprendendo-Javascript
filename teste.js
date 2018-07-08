/* Matéria de estatistica*/
/* Se o aluno tirar nota menor que 5 ele é reprovado, se tirar igual a 5 ele
de recuperação e caso estes casos não seja atendido ele é aprovado*/

function calcularNota(nota){
  if(nota<= 6){
    console.log("Reprovado");
  }else if(nota == 5){
    console.log("Recuperação");
  }else{
    console.log("Aprovado");
  }
}
const p1 = 6.0;
calcularNota(p1);

/* Objeto pessoa */

let pessoa = {
  nome = "Alessandra";
  idade = 21;
}

/* Array */

let listaFrutas = ["Morango", "Maçã"];
listaFrutas;
