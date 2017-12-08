import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { SubjectDetailPage } from './subjectDetails/subjectDetails';

import { Subject } from '../../models/subject';

@Component({
  selector: 'subjects',
  templateUrl: 'subjects.html'
})
export class SubjectsPage {

    private materias: Subject[];

    constructor (
        private navCtrl: NavController,
        private navParams: NavParams
    ) {
        let user = this.navParams.get('user');
        this.materias = user.materias.slice();
    }

    itemSelected(materia: Subject) {
        this.navCtrl.push( SubjectDetailPage , {subject: materia} );
    }
}