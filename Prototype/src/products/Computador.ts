import IProdutoPrototype from "./interfaces/IProdutoPrototype";

export default class Computador implements IProdutoPrototype {
    public marca: string;
    public processador: string;
    public memoriaRam: number;
    public discoRigido: string;

    constructor(marca: string, processador: string, memoriaRam: number, discoRigido: string) {
        this.marca = marca;
        this.processador = processador;
        this.memoriaRam = memoriaRam;
        this.discoRigido = discoRigido;
    }

    public clone(): Computador {
        return new Computador(this.marca, this.processador, this.memoriaRam, this.discoRigido);
    }
}