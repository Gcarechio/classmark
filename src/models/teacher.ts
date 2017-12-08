import { Subject } from './subject';

export class Teacher {
    NUSP: number;
    nome: String;
    email: String;
    senha: String;
    departamento: String;
    materias: Subject[];

    constructor(
        NUSP: number,
        nome: String,
        email: String,
        senha: String,
        departamento: String,
        materias: Subject[]
    ) {
        this.NUSP = NUSP;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.departamento = departamento;
        this.materias = materias.slice();
    }

    addSubject(materia: Subject) {
        this.materias.push(materia)
    }
}