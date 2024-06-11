import IProdutoPrototype from "../interfaces/IProdutoPrototype";

export default class Notebook implements IProdutoPrototype {
    public marca: string;
    public processador: string;
    public memoriaRam: number;
    public discoRigido: string;
    public tamanhoTela: number;

    constructor(marca: string, processador: string, memoriaRam: number, discoRigido: string, tamanhoTela: number) {
        this.marca = marca;
        this.processador = processador;
        this.memoriaRam = memoriaRam;
        this.discoRigido = discoRigido;
        this.tamanhoTela = tamanhoTela;
    }

    public clone(): Notebook {
        return new Notebook(this.marca, this.processador, this.memoriaRam, this.discoRigido, this.tamanhoTela);
    }
}