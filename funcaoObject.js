const pessoa = {
  nome: "Alessandra",
  idade: 21,
  peso: 67
}
console.log(pessoa);
console.log(Object.keys(pessoa));
Object.entries(pessoa).forEach(e => {console.log('${e[0]}: ${e[1]}')})
