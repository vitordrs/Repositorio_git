function Animal(nome){
    this.nome = nome;

    this.falar = function() {
        console.log(`${this.nome} fez barulho`);
    }
}

function Cachorro(nome, raca){
    Animal.call(this, nome);
    this.raca = raca;

    this.falar = function() {
        console.log(`${this.nome} latiu`);
    }
}

function Gato(nome, cor){
    Animal.call(this, nome);
    this.cor = cor;

    this.falar = function() {
        console.log(`${this.nome} miou`);
    }
}

function Cavalo(nome, raca){
    Animal.call(this, nome);
    this.raca = raca;

    this.falar = function() {
        console.log(`${this.nome} relinchou`);
    }
}

function Pato(nome, cor){
    Animal.call(this, nome);
    this.cor = cor;

    this.falar = function() {
        console.log(`${this.nome} grasnou`);
    }
}

const animal1 = new Animal("leão");
const animal2 = new Cachorro("Tessa", "Pit Bull");
const animal3 = new Gato("Bento", "Cinza");
const animal4 = new Cavalo("Pégaso", "Pexerao");
const animal5 = new Pato("Donald", "Branco");

animal1.falar(); 
animal2.falar();
animal3.falar();
animal4.falar();
animal5.falar();