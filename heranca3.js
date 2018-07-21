const pai = {
  nome: "Leonidas",
  corCabelo: "Preto"
}

const filha = Object.create(pai);
filha.nome = "Alessandra";
console.log(filha.nome);
console.log(filha.corCabelo);
console.log('${filha.nome} tem cabelo cor de ${filha.corCabelo}');
