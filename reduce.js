const alunos = [
  {nome: 'Alessandra', nota: 7.3, bolsista: false},
  {nome: 'Marina', nota: 9.2, bolsista: true},
  {nome: 'Lucas', nota: 9.8, bolsista: false},
  {nome: 'Debora', nota: 8.7, bolsista: true}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
  console.log(acumulador,atual)
  return acumulador + atual
})

console.log(resultado);

//-------------------------------------------------------------------------
