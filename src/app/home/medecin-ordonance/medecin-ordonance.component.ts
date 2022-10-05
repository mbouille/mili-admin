import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";

@Component({
  selector: 'app-medecin-ordonance',
  templateUrl: 'medecin-ordonance.component.html',
  styleUrls: ['medecin-ordonance.component.css']
})
export class MedecinOrdonanceComponent implements OnInit {

  options;
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
          ['Préscrites', 45.0],
          ['Scannées', 10.7]
        ]
      }]
    }
  }

  ngOnInit() {
  }

}
