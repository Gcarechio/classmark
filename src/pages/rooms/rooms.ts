import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { Chair } from '../../models/chair';

@Component({
  selector: 'rooms',
  templateUrl: 'rooms.html'
})
export class RoomsPage {

    private chairs_line1: Chair[] = [];
    private chairs_line2: Chair[] = [];
    private chairs_line3: Chair[] = [];
    private chairs_line4: Chair[] = [];
    private chairs_line5: Chair[] = [];
    private chairs_line6: Chair[] = [];

    private seated: boolean = false;

    constructor (
        private navCtrl: NavController
    ) {
        for(let i = 1; i <= 36; i++) {
            
            if(i >= 1 && i < 7) {
                this.chairs_line1.push(
                    new Chair(
                        i,
                        "50",
                        null,
                        "B2-06"
                    )
                )
            }

            if(i >= 7 && i < 13) {
                this.chairs_line2.push(
                    new Chair(
                        i,
                        "50",
                        null,
                        "B2-06"
                    )
                )
            }

            if(i >= 13 && i < 19) {
                this.chairs_line3.push(
                    new Chair(
                        i,
                        "50",
                        null,
                        "B2-06"
                    )
                )
            }

            if(i >= 19 && i < 25) {
                this.chairs_line4.push(
                    new Chair(
                        i,
                        "50",
                        null,
                        "B2-06"
                    )
                )
            }

            if(i >= 25 && i < 31) {
                this.chairs_line5.push(
                    new Chair(
                        i,
                        "50",
                        null,
                        "B2-06"
                    )
                )
            }

            if(i >= 31 && i < 37) {
                this.chairs_line6.push(
                    new Chair(
                        i,
                        "50",
                        null,
                        "B2-06"
                    )
                )
            }
            
        }
        console.log(this.chairs_line1);
        console.log(this.chairs_line2);
        console.log(this.chairs_line3);
        console.log(this.chairs_line4);
        console.log(this.chairs_line5);
        console.log(this.chairs_line6);
    }

    seating(seated: boolean) {
        console.log(seated);
        this.seated = seated;
    }
}