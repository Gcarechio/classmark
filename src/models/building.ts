export class Building {
    CEP: String;
    nome: String;
    endereco: String;

    constructor(
        CEP: String,
        nome: String,
        endereco: String,
    ) {
        this.CEP = CEP;
        this.nome = nome;
        this.endereco = endereco;
    }
}