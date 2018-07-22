const aprovados = ["Alessandra", "Marina", "Lucas"];

aprovados.forEach(function(nome, indice){
    console.log('${indice + 1}) ${nome}')
});

aprovados.forEach(nome => console.log(nome));

const exibirAprovados = aprovados => console.log(aprovados)
aprovados.forEach(exibirAprovados);

//----------------------------------------------------------

const lista = ["Morango", "Abacate", "Melão"];

lista.forEach(function(fruta, indice){
  console.log('${indice + 1}) ${frutas}');
})

lista.forEach(lista => console.log(lista));

//-----------------------------------------------------------
Array.prototype.forEach2 = function(callback){
    for(let i = 0; i < this.length; i++){
      callback(this[i], i, this);
    }
}
const bancos = ["Bradesco","Itaú", "Unibanco"];

bancos.forEach2(function(nome,indice){
  console.log('${indice + 1}) ${nome}')
})
