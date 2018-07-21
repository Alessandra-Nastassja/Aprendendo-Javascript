function TestandoObject (){}

console.log(TestandoObject.prototype)

const object1 = new TestandoObject()
const object2 = new TestandoObject()

console.log(object1.__proto__ === object2.__proto__);
console.log(TestandoObject.prototype === object1.__proto__);

TestandoObject.prototype.nome == "Alessandra";
TestandoObject.prototype.falar = function (){
    console.log('Bom dia! Meu nome é ${this.nome}');
}

object1.falar()

object3.__proto__ = TestandoObject().prototype //Muda o prototipo de Object para TestandoObject
