export class Room {
    numeroSala: String;
    capacidade: number;
    CEP: String;

    constructor(
        numeroSala: String,
        capacidade: number,
        CEP: String,
    ) {
        this.numeroSala = numeroSala;
        this.capacidade = capacidade;
        this.CEP = CEP;
    }
}