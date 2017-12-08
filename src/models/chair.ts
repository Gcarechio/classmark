export class Chair {
    idLugar: number;
    turma: String;
    NUSP_ocupante: number;
    numeroSala: String;

    constructor(
        idLugar: number,
        turma: String,
        NUSP_ocupante: number,
        numeroSala: String
    ) {
        this.idLugar = idLugar;
        this.turma = turma;
        this.NUSP_ocupante = NUSP_ocupante;
        this.numeroSala = numeroSala;
    }
}