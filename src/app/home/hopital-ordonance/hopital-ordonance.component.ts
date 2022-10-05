import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {Hopital} from "../models/hopitals";
import * as jsPDF from "jspdf";

@Component({
  selector: 'app-hopital-ordonance',
  templateUrl: './hopital-ordonance.component.html',
  styleUrls: ['./hopital-ordonance.component.css']
})
export class HopitalOrdonanceComponent implements OnInit {

  hopitals : Array<Hopital> = new Array<Hopital>();
  enTete = "Camp Thiaroye";
  hopitalSelected;
  idHopitalSelected = "";
  val;
  image="";
  qrCodeVelue = "";

  options : Object;

  constructor(private dataService : DataService) {
    this.options = {
      chart: {
        type: 'pie'
      },
      title: {
        text: 'Ordonances'
      },
      series: [{
        type: 'pie',
        name: 'Browser share',
        data: [
          ['Utiliser', 45.0],
          ['Non utiliser', 10.7]
        ]
      }]
    }
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

  changeHopitalSelected(){
    this.hopitals.forEach(hopital=>{
      if(hopital.id==this.idHopitalSelected){
        this.hopitalSelected = hopital;
        console.log(this.hopitalSelected)
      }
    })
  }

  generatePDF(){
    if(this.idHopitalSelected!="neant" && this.idHopitalSelected!="" && this.idHopitalSelected!=null && this.idHopitalSelected!=undefined){
      this.dataService.get("Ordonances/count")
        .subscribe(
          (nbrOrdonance:any)=>{
            this.dataService.post("Ordonances",{numero:(nbrOrdonance.count +1), used:false, hopitalId : this.idHopitalSelected})
              .subscribe(
                (ordonance:any)=>{
                  console.log(ordonance);
                  this.qrCodeVelue = ordonance.id;
                  setTimeout(()=>{
                    let qrCode = document.getElementById("qrCode").children[0]["src"];
                    let imgData = qrCode;
                    let doc = new jsPDF()
                    //Gauche
                    doc.setFontSize(17)
                    doc.text(5, 15, this.hopitalSelected.camp);
                    doc.text(5, 23, 'Tel : ');
                    doc.setFontSize(15);
                    doc.text(20, 23, this.hopitalSelected.telephone);
                    doc.setFontSize(17);
                    doc.text(5, 31, 'BP : ');
                    doc.setFontSize(15);
                    doc.text(20, 31, this.hopitalSelected.adresse);

                    //Droite
                    doc.setFontSize(12)
                    doc.text(120, 15, 'Date : ...............................................................');
                    doc.text(120, 23, 'Nom du patient : ..............................................');
                    doc.text(120, 31, 'Age : ................................................................');

                    //milieu
                    doc.setFontSize(25);
                    doc.text(30, 60, 'ORDONANCE PATIENT MILITAIRE');

                    //EN bas
                    doc.addImage(imgData, 'JPEG', 165, 255, 40, 40);

                    doc.save("FinalTest.pdf");
                  },200)
                }
              )
          }
        )
    }
  }

}
