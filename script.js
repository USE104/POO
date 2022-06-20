/*
class Animal {
    //criar os atributos
    constructor(tipo,nome,som,idade){
        this.tipo = tipo
        this.nome = nome
        this.som = som
        this.idade = idade
    }

    //criar o método repetir
    repetir(){
        console.log(this.nome+" faz "+this.som)
    }

    fazerNiver(novaIdade){
        this.idade += novaIdade
        console.log(' o '+this.nome+' fez aniversário de '+this.idade+' anos')
    }
}
//instanciando a classe
let fulaninho = new Animal('cachorro','fulaninho','O loro',8)

fulaninho.repetir()
fulaninho.fazerNiver(1)
*/

// meu exercicio

class Computer {
    constructor(fabricante,ram,ssd){
    
        this.fabricante = fabricante
        this.ram = ram
        this.ssd = ssd

    }
    upgrade(){
       console.log(' A ' + this.fabricante+ ' fez a criação de novas geração de processador')
    
    }
    funciona(){
        console.log(' cria'+this.fabricante)
    
    }
}
 let fabricante = new Computer (' HP',' ram')

 
 fabricante.upgrade('fulaninho')
 fabricante.funciona()


