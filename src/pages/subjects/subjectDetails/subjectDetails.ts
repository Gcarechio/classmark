import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Subject } from '../../../models/subject';

@Component({
  selector: 'subjectDetails',
  templateUrl: 'subjectDetails.html'
})
export class SubjectDetailPage {

    private subject: Subject;

    constructor (
        private navCtrl: NavController,
        private navParams: NavParams
    ) {
        this.subject = this.navParams.get('subject');
    }

    save() {
        console.log("savin subject...");
    }

    back() {
        this.navCtrl.pop();
    }
}