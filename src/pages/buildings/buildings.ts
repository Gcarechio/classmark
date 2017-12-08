import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { BuildingDetailsPage } from './buildingDetails/buildingDetails';

import { Building } from '../../models/building';

@Component({
  selector: 'buildings',
  templateUrl: 'buildings.html'
})
export class BuildingsPage {

    private buildings: Building[] = [];

    constructor (
        private navCtrl: NavController
    ) {
        this.buildings.push(
            new Building(
                "13.214-593",
                "Prédio da Engenharia Elétrica",
                "Rua ... , N° ..."
            )
        );

        this.buildings.push(
            new Building(
                "13.214-594",
                "Prédio da Engenharia Mecânica",
                "Rua ... , N° ..."
            )
        );

        this.buildings.push(
            new Building(
                "13.214-595",
                "Prédio da Engenharia Civil",
                "Rua ... , N° ..."
            )
        );
    }

    itemSelected(building: Building) {
        this.navCtrl.push( BuildingDetailsPage , {building: building} );
    }
}