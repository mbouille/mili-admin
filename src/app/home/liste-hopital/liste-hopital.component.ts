import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {Hopital} from "../models/hopitals";
import * as jsPDF from "jspdf";

@Component({
  selector: 'app-liste-hopital',
  templateUrl: 'liste-hopital.component.html',
  styleUrls: ['liste-hopital.component.css']
})
export class ListeHopitalComponent implements OnInit {

  hopital : Hopital = new Hopital();
  hopitals : Array<Hopital> = new Array<Hopital>();
  constructor(private dataService : DataService) {

  }

  ngOnInit() {
    this.getHopitals();
  }

  getHopitals(){
    this.dataService.get("Hopitals")
      .subscribe(
        (hopitals:any)=>{
          this.hopitals = hopitals;
        }
      )
  }

  addHopital(){
    document.getElementById("annuler").click();
    this.dataService.post("Hopitals", this.hopital)
      .subscribe(
        (hopital:any)=>{
          console.log(hopital);
          this.getHopitals();
        }
      );
  }

  imageFinishedUploading(file: any) {
    let name = JSON.parse(file.serverResponse.response._body).result.files.image[0].name
    // console.log(JSON.stringify(file.serverResponse));
    // result.files.image[0].providerResponse.location
    //this.hopital.photo = 'https://mili-api.herokuapp.com/api/files/images/download/' + name;
    this.hopital.photo = file.src;
  }

  imageRemoved(file: any) {
    // do some stuff with the removed file.
  }

  uploadStateChange(state: boolean) {
    console.log(JSON.stringify(state));
  }

}
