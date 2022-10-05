import { Component, OnInit } from '@angular/core';
import {DataService} from "../../data.service";
import {ToasterService} from "angular2-toaster";

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  total = 0;

  openMarkerInfo = {
    label:"",
    latitude:0,
    longitude:0
  };

  options1 : Object;
  options2 : Object;
  options3 : Object;

  lat: number = 14.6999999;
  lng: number = -14.396631;
  zoom=12;

  constructor(private toasterService: ToasterService, private dataService : DataService) {
    this.stat();
    this.toasterService = toasterService;
    this.dataService.currentPosition
      .subscribe(
        position=> {
          if(position){
            this.openMarkerInfo = JSON.parse(position);
            this.lat = this.openMarkerInfo.latitude + 1.6;
            this.lng = this.openMarkerInfo.longitude;
          }
        }
      );
  }

  popToast(type,title,message) {
    this.toasterService.pop(type, title, message);
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
        text: "Nombre d'oronance prescrites par hopital"
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
          ['Thies', 25.0],
          ['Ouakam', 26.8],
          ['Pikine', 8.5],
          ['Bango', 6.2],
          ['Tambacounda', 0.7],
          ['Louga', 22.0],
          ['Saint Louis', 26.8],
          ['Diourbel', 8.5],
          ['Kébémer', 6.2],
          ['Fatick', 0.7],
          ['Kolda', 22.0],
          ['Matam', 26.8],
          ['Sédiou', 8.5],
          ['Zinguinchor', 6.2],
          ['Kafrine', 0.7]
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
        categories: ['ARD', 'SN', 'MAD', 'GSE', 'SRB','DRF', 'ABD', 'TF', 'SLL', 'PD']
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
        name : "Pharmacie",
        data: [29.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1]
      }]
    };
    this.options3 = {
      chart: {
        type: 'column',
        options3d: {
          enabled: true,
          alpha: 15,
          beta: 15,
          viewDistance: 25,
          depth: 40
        }
      },

      title: {
        text: "Nombre d'ordonances normales et fraudées par pharmacie"
      },

      xAxis: {
        categories: ['ARD', 'SN', 'MAD', 'GSE', 'SRB','DRF', 'ABD', 'TF', 'SLL', 'PD'],
        labels: {
          skew3d: true,
          style: {
            fontSize: '16px'
          }
        }
      },

      yAxis: {
        title: {
          text: null
        }
      },

      tooltip: {
        headerFormat: '<b>{point.key}</b><br>',
        pointFormat: '<span style="color:{series.color}">\u25CF</span> {series.name}: {point.y} / {point.stackTotal}'
      },

      plotOptions: {
        column: {
          stacking: 'normal',
          depth: 40
        }
      },

      series: [{
        name: 'Fraude',
        data: [23, 34, 24, 12, 5,43, 50, 34, 24, 13],
        stack: 'ordonance'
      },
        {
          name: 'Normale',
          data: [325, 433, 334, 427, 232,435, 323, 434, 547, 502],
          stack: 'ordonance'
        }]
    };
  }

  positions = [
    {
      latitude: 14.6999999,
      longitude: -14.396631,
      icon: 'assets/images/online.png',
      label: "Camp Dial Diop"
    },
    {
      latitude: 14.4999999,
      longitude: -14.596631,
      icon: 'assets/images/offline.png',
      label: "Camp Ouakam",
    },
    {
      latitude: 14.99999999,
      longitude: -14.096631,
      icon: 'assets/images/online.png',
      label: "Camp Bango"
    },
    {
      latitude: 14.7999999,
      longitude: -14.896631,
      icon: 'assets/images/online.png',
      label: "Camp Thiaroye",
    },
    {
      latitude: 15.7999999,
      longitude: -14.896631,
      icon: 'assets/images/online.png',
      label: "Camp Thies",
    },
    {
      latitude: 15.3999999,
      longitude: -14.296631,
      icon: 'assets/images/online.png',
      label: "Camp Tambacounda",
    },
    {
      latitude: 15.9999999,
      longitude: -14.596631,
      icon: 'assets/images/online.png',
      label: "Camp Louga",
    },
    {
      latitude: 13.9999999,
      longitude: -14.596631,
      icon: 'assets/images/online.png',
      label: "Camp Kafrine",
    },
    {
      latitude: 13.9999999,
      longitude: -15.596631,
      icon: 'assets/images/online.png',
      label: "Camp Fatick",
    },
    {
      latitude: 14.9999999,
      longitude: -15.596631,
      icon: 'assets/images/online.png',
      label: "Camp Zinguinchor",
    },
    {
      latitude: 14.5999999,
      longitude: -16.296631,
      icon: 'assets/images/online.png',
      label: "Camp Diourbel",
    },
    {
      latitude: 13.8999999,
      longitude: -13.296631,
      icon: 'assets/images/online.png',
      label: "Camp Kébémer",
    },
    {
      latitude: 14.8999999,
      longitude: -12.996631,
      icon: 'assets/images/online.png',
      label: "Camp Kolda",
    },
    {
      latitude: 14.2999999,
      longitude: -12.696631,
      icon: 'assets/images/offline.png',
      label: "Camp Matam",
    },
    {
      latitude: 14.5199999,
      longitude: -13.70016631,
      icon: 'assets/images/online.png',
      label: "Camp Sédiou"
    }
  ];

  ngOnInit() {
    this.getTotal();
    this.popToast("error","PDA non connecté", "Le PDA du camp de Dial Diop a perdu de la connexion")
  }

  getTotal(){
    this.dataService.get("Ordonances")
      .subscribe(
        (ordonances:any)=>{
          ordonances.forEach(ordonance=>{
            if(ordonance && ordonance.total){
              this.total+=ordonance.total;
            }
          })
        }
      );
  }
}
