import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-doctors',
  templateUrl: './list-doctors.component.html',
  styleUrls: ['./list-doctors.component.css']
})
export class ListDoctorsComponent implements OnInit {

  hopital = {};
  constructor() { }

  ngOnInit() {
  }

  imageFinishedUploading(file: any) {
    let name = JSON.parse(file.serverResponse.response._body).result.files.image[0].name
    // console.log(JSON.stringify(file.serverResponse));
    // result.files.image[0].providerResponse.location
    //this.hopital.photo = 'https://mili-api.herokuapp.com/api/files/images/download/' + name;
  }

  imageRemoved(file: any) {
    // do some stuff with the removed file.
  }

  uploadStateChange(state: boolean) {
    console.log(JSON.stringify(state))
  }

}
