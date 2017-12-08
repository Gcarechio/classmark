import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import { Building } from '../../../models/building';

@Component({
  selector: 'buildingDetails',
  templateUrl: 'buildingDetails.html'
})
export class BuildingDetailsPage {

    private building: Building;

    constructor (
        private navCtrl: NavController,
        private navParams: NavParams
    ) {
        this.building = this.navParams.get('building');
    }

    save() {
        console.log("savin building...");
    }

    back() {
        this.navCtrl.pop();
    }
}