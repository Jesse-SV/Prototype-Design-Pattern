interface Modelo {
    clone(): Modelo;
}

class Computador implements Modelo {
    public marca: string;
    public modelo: string;

    constructor(marca: string, modelo: string) {
        this.marca = marca;
        this.modelo = modelo;
    }

    public clone(): Computador {
        return new Computador(this.marca, this.modelo);
    }
}

class Notebook implements Modelo {
    public marca: string;
    public modelo: string;
    public tamanhoTela: number;

    constructor(marca: string, modelo: string, tamanhoTela: number) {
        this.marca = marca;
        this.modelo = modelo;
        this.tamanhoTela = tamanhoTela;
    }

    public clone(): Notebook {
        return new Notebook(this.marca, this.modelo, this.tamanhoTela);
    }
}

// Uso
let computador1 = new Computador("Dell", "Inspiron");
let computador2 = computador1.clone();

let notebook1 = new Notebook("Apple", "MacBook Pro", 15);
let notebook2 = notebook1.clone();
