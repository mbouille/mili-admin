import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacie-ordonance',
  templateUrl: './pharmacie-ordonance.component.html',
  styleUrls: ['./pharmacie-ordonance.component.css']
})
export class PharmacieOrdonanceComponent implements OnInit {

  options;
  constructor() {
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
          ['Payées', 45.0],
          ['Non payées', 10.7]
        ]
      }]
    }
  }

  ngOnInit() {
  }

}
