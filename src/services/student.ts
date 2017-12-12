// USEFUL MODULES
import { Injectable } from '@angular/core';
import { Headers, Http, RequestOptions } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { Observable } from 'rxjs';
import { API_URL } from './apiUrl';

// OBJECTS
import { Student } from '../models/student';

@Injectable()
export class StudentService {
    private kitUrl = API_URL + '/api/students'; //URL to web api
    private headers = new Headers({'Content-Type': 'application/json'});
    private options: RequestOptions;

    constructor(public http: Http) {
        this.options = new RequestOptions({ headers: this.headers });
    }

    getAllStudents(): Observable<Student[]> {
        return this.http
            .get(this.kitUrl, this.options)
            .map(res => {
                console.log(res.json() as Student[]);
                return res.json() as Student[];
            });
    }

    update(student: Student): Observable<String> {
        const url = `${this.kitUrl}/${student.NUSP}`;
        return this.http
            .put(url, JSON.stringify({student: student}), 
            this.options)
            .map(res => 'Aluno Atualizado com Sucesso!',
                    err => 'Falha ao Atualizar Aluno!');
    }

    create(student: Student): Observable<Student> {
        return this.http
            .post(this.kitUrl, JSON.stringify({student: student}),
            this.options)
            .map((res) => {
                return res.json() as Student;
        });
    }
}
