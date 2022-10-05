import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from "@angular/router";
import {HomeRouting} from "./home.routing";
import {FormsModule} from "@angular/forms";
import { HighchartsStatic } from 'angular2-highcharts/dist/HighchartsService';
import {ChartModule} from "angular2-highcharts";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { ListDoctorsComponent } from './list-doctors/list-doctors.component';
import { HopitalOrdonanceComponent } from './hopital-ordonance/hopital-ordonance.component';
import {QRCodeModule} from "angular2-qrcode";
import { AgmCoreModule } from '@agm/core';
import {MedecinOrdonanceComponent} from "./medecin-ordonance/medecin-ordonance.component";
import {ImageUploadModule} from "angular2-image-upload";
import {ListeHopitalComponent} from "./liste-hopital/liste-hopital.component";
import { PharmacieOrdonanceComponent } from './pharmacie-ordonance/pharmacie-ordonance.component';
import {ListePharmacieComponent} from "./liste-pharmacie/liste-pharmacie.component";
import { PharmacieDetailComponent } from './pharmacie-detail/pharmacie-detail.component';
import { DocteurDetailComponent } from './docteur-detail/docteur-detail.component';
import { HopitalDetailComponent } from './hopital-detail/hopital-detail.component';

declare let require: any;


export function highchartsFactory() {
  const hc = require('highcharts/highstock');
  const dd = require('highcharts/modules/exporting');
  const de = require('highcharts/highcharts-3d.js');
  dd(hc);
  de(hc);
  return hc;
}


@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    HomeRouting,
    FormsModule,
    QRCodeModule,
    BrowserAnimationsModule,
    ChartModule,
    ImageUploadModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyDGknNvSyW4ga2fcdw0lJIvh9nmwKY02hY',
      libraries: ['places']
    })
  ],
    providers: [
      {
        provide: HighchartsStatic,
        useFactory: highchartsFactory
      }
    ],
  declarations: [
    DashboardComponent,
    ListDoctorsComponent,
    HopitalOrdonanceComponent,
    MedecinOrdonanceComponent,
    ListeHopitalComponent,
    PharmacieOrdonanceComponent,
    ListePharmacieComponent,
    PharmacieDetailComponent,
    DocteurDetailComponent,
    HopitalDetailComponent
  ]
})
export class HomeModule { }
