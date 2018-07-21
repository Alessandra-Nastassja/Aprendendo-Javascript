const produto = Object.preventExtensions({ //Não adiciona atributos
  nome: "produto", preco: 5.99, tag: "promoção"
})

produto.nome = "Coca Cola";
delete produto.tag;
produto.descricao = "Refrigerante";

const pessoa = {nome: "Alessandra", idade: 21}
Object.seal(pessoa) // Você não consegue exclui, adicionar só alterar

pessoa.sobrenome = "Silva"
delete pessoa.nome
console.log(pessoa)
