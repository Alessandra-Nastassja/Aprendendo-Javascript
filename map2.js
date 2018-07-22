const carrinho = [
  '{"nome": "Borracha", "preco": 3.45}',
  '{"nome": "Caderno", "preco": 13.90}',
  '{"nome": "Kit de lapis", "preco": 41.22}',
  '{"nome": "Caneta", "preco": 7.50}'
]

let paraObjetos = json => JSON.parse(json);
let apenasPreco = produto => produto.preco

let precos = carrinho.map2(paraObjetos).map2(apenasPreco)
console.log(precos);

//-------------------------------------------------------

Array.prototype.map2 = function(callback){
  const novaArray = [];
  for(i = 0; i < this.length; i++){
  novaArray.push(callback(this[i], i , this));
  }
  return novaArray
}
