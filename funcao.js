//Function declaration

function somaDoisValores(a,b){
  let resultado = a + b;
  return resultado;
}
somaDoisValores(3,3);

// Function expression anomima
const dividiDoisValores = function (a,b){
  let resultado = a + b;
  return resultado;
}
dividiDoisValores(2,2);

//Function expression named
const multiplicaValores = function multiplica(a,b){
  let resultado = a * b;
  return resultado;
}
multiplicaValores(2,2);

//Function + Array
const array = [function (a,b){return a + b}];
console.log(array[0]);

//Function + Objeto
const obj = {};
obj.falar = function(){
  return "Olá";
}
console.log(obj.falar());

//Função como parâmetro
function run(fun){
  fun()
}
run(function(){console.log("Olá")});

//Função retorna/contém função
function soma(a,b){
  return function(c){
    console.log(a + b + c);
  }
}
soma(2,3)(4);
