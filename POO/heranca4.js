function MeuObjeto(){}
console.log(MeuObjeto.prototyoe)

const obj1 = new MeuObjeto
const obj2 = new MeuObjeto
console.log(obj1.__proto__ == obj2.__proto__)
console.log(MeuObjeto.prototype === obj1.__proto__)

MeuObjeto.prototype.nome = 'Coisita'
MeuObjeto.prototype.falar = function(){
    console.log( `Seja util, não reclame! Bem-vindo ao mundo real. Meu nome é ${this.nome}` )
}

obj2.nome = 'Rafael'
obj2.falar()

const obj3 = {}

obj3.__proto__ = MeuObjeto.prototype
obj3.nome = 'Obj3'
obj3.falar()


console.log((new MeuObjeto).__proto__ === MeuObjeto.prototype) //true
console.log(MeuObjeto.__proto__ == Function.prototype) //true
console.log(Function.prototype.__proto__ == Object.prototype)