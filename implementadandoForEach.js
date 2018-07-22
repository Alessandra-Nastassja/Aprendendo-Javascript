Array.prototype.forEach3 = function(callback2){
  for(let i = 0; i < this.length; i++){
    callback2(this[i], i, this);
  }
}

const carros = ["Gol", "Uno", "Tipo"];

carros.forEach(carros => console.log(carros));
