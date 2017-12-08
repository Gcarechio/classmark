export class Subject {
    sigla: String;
    turma: String;
    creditos: number;
    numeroSala: String;

    constructor(
        sigla: String,
        turma: String,
        creditos: number,
        numeroSala: String
    ) {
        this.sigla = sigla;
        this.turma = turma;
        this.creditos = creditos;
        this.numeroSala = numeroSala;
    }
}