// Transformando um objeto em JSON
const obj = {
  a: 1,
  b: 2,
  c: 3,
  soma(){
    return a + b + c
  }
}
console.log(JSON.stringify(obj))

//Transformando Json em objeto
console.log(JSON.parse('{"a":1.2, "b":2, "c":3, "d": "Alessandra", "e":true, "f":{}, "g": []}'))
