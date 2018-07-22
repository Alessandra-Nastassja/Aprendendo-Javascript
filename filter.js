const produtos = [
  {nome: 'Notebook', preco: 2499, fragil: true},
  {nome: 'Ipad', preco: 4199, fragil: true},
  {nome: 'Copo de Vidro', preco: 12.49, fragil: true},
  {nome: 'Copo de plastico', preco: 18.99, fragil: false}
]

console.log(produtos.filter(function(p){
  return false
}))

const produtoCaro = produto => produto.preco > 500
const produtoFragil = produto => produto.fragil

console.log(produtos.filter(produtoCaro).filter(produtoFragil()))

//--------------------------------------------------------------
Array.prototype.filter2 = function(callback){
  const novaArray = [];
  for(let i = 0; i < this.length; i++){
    if(callback(this[i], i , this)){
      novaArray.push(this[i])
    }
    return novaArray
  }
}
