import { Component, ViewChild } from '@angular/core';
import { Tabs, NavController, NavParams } from 'ionic-angular';

import { BuildingsPage } from '../buildings/buildings';
import { ProfilePage } from '../profile/profile';
import { RoomsPage } from '../rooms/rooms';
import { SubjectsPage } from '../subjects/subjects';

import { Student } from '../../models/student';

@Component({
  selector: 'menu',
  templateUrl: 'menu.html'
})
export class MenuPage {

    @ViewChild('myTabs') tabRef: Tabs;

    private tab1Root = BuildingsPage;
    private tab2Root = ProfilePage;
    private tab3Root = RoomsPage;
    private tab4Root = SubjectsPage;

    private user: Student;

    constructor (
        private navCtrl: NavController,
        private navParams: NavParams
    ) {
        this.user = this.navParams.data;
    }
    
    switchTabs(tab: number) {
        if(tab) this.navCtrl.parent.select(tab);
    }
}