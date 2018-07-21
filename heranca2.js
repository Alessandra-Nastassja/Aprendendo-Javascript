const avo = {
  olhosAvo = "Azul"
}

const pai = {
  __proto__: avo,
  olhosPai: "Verde"
}

const filho = {
  __proto__: pai,
  olhosFilho: "Castanho"
}

console.log(filho.olhosAvo);
