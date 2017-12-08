import { Component, Input, EventEmitter, Output, OnInit } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';

import { Chair } from '../../../models/chair';

@Component({
  selector: 'chair',
  templateUrl: 'chair.html'
})
export class ChairPage implements OnInit {

    @Input('chair') selectedChair: Chair;
    @Input('nusp') NUSP: number;
    @Input('occupied') seated: boolean;
    @Output('seat') seatEmitter: EventEmitter<boolean> = new EventEmitter<boolean>();
    private NUSP_ocupante: number;

    constructor (
        private navCtrl: NavController,
        private alertCtrl: AlertController
    ) {}

    ngOnInit() {
        this.NUSP_ocupante = this.selectedChair.NUSP_ocupante;
    }

    chairClicked(): void {
        if(this.selectedChair.NUSP_ocupante == null) {
            if(this.seated) this.unoccupiedChair();
            else this.unoccupiedChair();
        } else this.occupiedChair();
    }

    alreadySeated() {
        let alert = this.alertCtrl.create({
            title: 'Já está sentado',
            subTitle: 'Você já está sentado na cadeira: ' + this.selectedChair.NUSP_ocupante,
            buttons: ['Voltar']
        });
        alert.present();
    }

    occupiedChair() {
        let alert = this.alertCtrl.create({
            title: 'Cadeira Ocupada',
            subTitle: 'NUSP do ocupante: ' + this.selectedChair.NUSP_ocupante,
            buttons: ['Voltar']
        });
        alert.present();
    }

    unoccupiedChair() {
        let alert = this.alertCtrl.create({
            title: 'Cadeira Desocupada',
            buttons: [
                {
                    text: 'Ocupar',
                    handler: data => {
                        this.NUSP_ocupante = this.NUSP;
                        this.seatEmitter.emit(true);
                    }
                },
                {
                    text: 'Voltar',
                    role: 'cancel',
                    handler: data => {
                        console.log('Cancel clicked');
                    }
                }
            ]
        });
        alert.present();
    }
}