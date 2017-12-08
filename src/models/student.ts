import { Subject } from './subject';

export class Student {
    NUSP: number;
    nome: String;
    email: String;
    senha: String;
    curso: String;
    materias: Subject[];    

    constructor(
        NUSP: number,
        nome: String,
        email: String,
        senha: String,
        curso: String,
        materias: Subject[]        
    ) {
        this.NUSP = NUSP;
        this.nome = nome;
        this.email = email;
        this.senha = senha;
        this.curso = curso;
        this.materias = materias.slice();        
    }

    addSubject(materia: Subject) {
        this.materias.push(materia)
    }
}