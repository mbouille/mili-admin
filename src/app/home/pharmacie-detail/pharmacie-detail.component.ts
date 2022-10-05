import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pharmacie-detail',
  templateUrl: './pharmacie-detail.component.html',
  styleUrls: ['./pharmacie-detail.component.css']
})
export class PharmacieDetailComponent implements OnInit {

  options1;
  options2;

  lat: number = 14.6999999;
  lng: number = -14.396631;
  zoom=18;

  constructor() {
    this.stat();
  }

  ngOnInit() {
  }

  stat(){
    this.options1 = {
      chart: {
        type: 'pie',
        options3d: {
          enabled: true,
          alpha: 45,
          beta: 0
        }
      },
      title: {
        text: "Ordonances payées et non payées"
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          depth: 35,
          dataLabels: {
            enabled: true,
            format: '{point.name}'
          }
        }
      },
      series: [{
        type: 'pie',
        name: 'Pharmacie',
        data: [
          ['Payées', 25.0],
          ['Non payées', 10.8],
        ]
      }]
    };
    this.options2 = {
      chart: {
        type: 'column',
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          depth: 50,
          viewDistance: 25
        }
      },
      xAxis: {
        categories: ['Normale', 'Fraudée']
      },
      yAxis: {
        title: {
          text: null
        }
      },
      title: {
        text: "Nombre d'oronances scannées par pharmacie"
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
      },
      plotOptions: {
        column: {
          depth: 25
        }
      },
      series: [{
        name : "Ordonances scanées",
        data: [71, 29]
      }]
    };
  }

  positions = [
    {
      latitude: 14.6999999,
      longitude: -14.396631,
      icon: 'assets/images/pda2.png',
      label: "Pharmacie Sope Naby"
    }
  ]

}
