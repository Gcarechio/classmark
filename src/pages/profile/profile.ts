import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Student } from '../../models/student';

@Component({
  selector: 'profile',
  templateUrl: 'profile.html'
})
export class ProfilePage {

    private user: Student;

    constructor (
        private navCtrl: NavController,
        private navParams: NavParams
    ) {
        this.user = this.navParams.get('user');
        console.log(this.user);
    }
}