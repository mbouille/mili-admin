import { Component, OnInit } from '@angular/core';
import {DataService} from "../data.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

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
  allPositions = [];
  constructor(private dataService : DataService) {
    this.allPositions = this.positions;
  }

  setPosition(position){
    this.dataService.setCurrentPosition(JSON.stringify(position));
  }

  ngOnInit() {
  }

  clickSearch(){
    document.getElementById('search').click();
  }

  getItems(ev) {
    // Reset items back to all of the items
    // set val to the value of the ev target
    this.positions = this.allPositions;
    var val = ev.target.value;

    // if the value is an empty string don't filter the items
    if (val && val.trim() != '') {
      this.positions = this.positions.filter((item) => {
        return (item.label.toLowerCase().indexOf(val.toLowerCase()) > -1);
      })
    }
  }

}
