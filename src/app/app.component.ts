import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MenuPage } from '../pages/menu/menu';

import { StudentService } from '../services/student';

import { Student } from '../models/student';
import { Subject } from '../models/subject';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = MenuPage;
  private student: Student;

  constructor(
    platform: Platform, 
    statusBar: StatusBar, 
    splashScreen: SplashScreen,
    private studentService: StudentService
  ) {
    // let subject = new Subject(
    //   "PCS3623",
    //   "50",
    //   4,
    //   "B2-06"
    // );
    // this.student = new Student(
    //   9381277, 
    //   "Gabriel", 
    //   "gabriel.carechio.queiroz@usp.br", 
    //   "1234", 
    //   "Engenharia de Computação", 
    //   [subject]
    // );
    this.studentService.getAllStudents().subscribe((students) => {
      console.log(students);
      this.student = students[0];
    });
    // this.studentService.create(this.student).subscribe((res) => {
    //   console.log(res);
    // });
    platform.ready().then(() => {
      this.nav.setRoot(MenuPage, {user: this.student});
      statusBar.styleDefault();
      splashScreen.hide();
    });
  }
}
