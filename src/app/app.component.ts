import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MenuPage } from '../pages/menu/menu';

import { Student } from '../models/student';
import { Subject } from '../models/subject';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = MenuPage;
  private student: Student;

  constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    let subject = new Subject(
      "PCS3623",
      "50",
      4,
      "B2-06"
    )
    this.student = new Student(
      9381277, 
      "Gabriel", 
      "gabriel.carechio.queiroz@usp.br", 
      "1234", 
      "Engenharia de Computação", 
      [subject]
    )
    platform.ready().then(() => {
      this.nav.setRoot(MenuPage, {user: this.student});
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
