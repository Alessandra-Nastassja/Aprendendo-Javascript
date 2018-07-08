function tratamentoDeErro(erro){
  throw{
    nome: erro.name,
    msg: erro.message,
    date: new Date
  }
}
function calcularArea(largura,altura){
  try{
    const area = largura * altura;
    console.log(area);
  }catch(e){
    tratamentoDeErro();
  }finally{
    console.log("Função que calcula área");
  }
}
calcularArea(2,2);
