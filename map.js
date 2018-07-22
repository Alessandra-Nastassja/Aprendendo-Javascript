const nums = [1,2,3,4,5];

let resultado = nums.map(function(e){
  return e * 2;
})

console.log(resultado);

//---------------------------------------

const multiplica = [1,2,3,4,5];

let total = multiplica.map(function(e){
  return e * 3;
})

console.log(total);

//--------------------------------------

const soma = e => e + 10;
const multiplica = e => e * 2;
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma).map(multiplica).map(paraDinheiro);
console.log(resultado);
