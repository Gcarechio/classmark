import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule } from '@angular/http';

import { BuildingsPage } from '../pages/buildings/buildings';
import { BuildingDetailsPage } from '../pages/buildings/buildingDetails/buildingDetails';
import { MenuPage } from '../pages/menu/menu';
import { ProfilePage } from '../pages/profile/profile';
import { RoomsPage } from '../pages/rooms/rooms';
import { ChairPage } from '../pages/rooms/chair/chair';
import { SubjectsPage } from '../pages/subjects/subjects';
import { SubjectDetailPage } from '../pages/subjects/subjectDetails/subjectDetails';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StudentService } from '../services/student';

@NgModule({
  declarations: [
    MyApp,
    BuildingsPage,
    BuildingDetailsPage,
    MenuPage,
    ProfilePage,
    RoomsPage,
    ChairPage,
    SubjectsPage,
    SubjectDetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule    
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    BuildingsPage,
    BuildingDetailsPage,
    MenuPage,
    ProfilePage,
    RoomsPage,
    ChairPage,
    SubjectsPage,
    SubjectDetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    StudentService
  ]
})
export class AppModule {}
