import {Routes, RouterModule} from "@angular/router";
import {NgModule} from "@angular/core";
import {HomeComponent} from "./home.component";
import {DashboardComponent} from "./dashboard/dashboard.component";
import {ListDoctorsComponent} from "./list-doctors/list-doctors.component";
import {ListeHopitalComponent} from "./liste-hopital/liste-hopital.component";
import {HopitalOrdonanceComponent} from "./hopital-ordonance/hopital-ordonance.component";
import {MedecinOrdonanceComponent} from "./medecin-ordonance/medecin-ordonance.component";
import {PharmacieOrdonanceComponent} from "./pharmacie-ordonance/pharmacie-ordonance.component";
import {ListePharmacieComponent} from "./liste-pharmacie/liste-pharmacie.component";
import {PharmacieDetailComponent} from "./pharmacie-detail/pharmacie-detail.component";
import {HopitalDetailComponent} from "./hopital-detail/hopital-detail.component";
import {DocteurDetailComponent} from "./docteur-detail/docteur-detail.component";


const HOME_ROUTES : Routes =[
  {
    path: 'home',
    component : HomeComponent,
    children : [
      {path: '', component: DashboardComponent},
      {path: 'hopitaux/liste', component: ListeHopitalComponent},
      {path: 'hopitaux/ordonance', component: HopitalOrdonanceComponent},
      {path: 'pharmacie/liste', component: ListePharmacieComponent},
      {path: 'pharmacie/ordonance', component: PharmacieOrdonanceComponent},
      {path: 'docteurs/ordonance', component: MedecinOrdonanceComponent},
      {path: 'docteurs/liste', component: ListDoctorsComponent},
      {path: 'pharmacie/detail', component: PharmacieDetailComponent},
      {path: 'hopitaux/detail', component: HopitalDetailComponent},
      {path: 'docteurs/detail', component: DocteurDetailComponent}
    ]
  }

];
@NgModule({
  imports: [
    RouterModule.forChild(HOME_ROUTES)
  ],
  exports: [
    RouterModule
  ]
})
export class HomeRouting {}
