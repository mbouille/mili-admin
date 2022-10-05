import { Injectable } from '@angular/core';
import {Response, Headers, Http} from "@angular/http";

import 'rxjs/Rx';
import {BehaviorSubject} from "rxjs";

@Injectable()
export class DataService {

  baseUrl = "https://mili-api.herokuapp.com/api/";

  //Position selected
  private positions = new BehaviorSubject(null);
  currentPosition = this.positions.asObservable();


  private headers = new Headers({'Content-Type': 'application/json'});

  constructor(public http: Http) {
    console.log('Hello DataProvider Provider');
  }

  login(data) {
    return this.http.post(this.baseUrl + "Admins/login?include=user", data)
      .map((res:Response) => res.json());
  }

  post(url,data) {
    return this.http.post(this.baseUrl + url, data)
      .map((res:Response) => res.json());
  }

  patch(url,data) {
    return this.http.patch(this.baseUrl + url, data)
      .map((res:Response) => res.json());
  }



  delete(url,id) {
    return this.http.delete(this.baseUrl + url + "/" + id,)
      .map((res:Response) => res.json());
  }

  get(url) {
    return this.http.get(this.baseUrl + url)
      .map((res:Response) => res.json());
  }

  setUser(user)
  {
    let userStringify = JSON.stringify(user);
    localStorage.setItem("userAccount",userStringify);
  }

  getUser()
  {
    return JSON.parse(localStorage.getItem("userAccount"));
  }

  putRel(urlF,urlS,idF,idS) {
    console.log(this.baseUrl + urlF + "/" + idF  + "/" + urlS + "/rel/" + idS)
    return this.http.put(this.baseUrl + urlF + "/" + idF  + "/" + urlS + "/rel/" + idS, {})
      .map((res:Response) => res.json());
  }

  setTocken(token)
  {
    localStorage.setItem("tocken",token);
  }

  getTocken()
  {
    return localStorage.getItem("tocken");
  }

  isConnected()
  {
    if(localStorage.getItem("tocken"))
    {
      return true;
    }
    else
    {
      return false;
    }
  }

  deconnect()
  {
    localStorage.removeItem("tocken");
  }

  setCurrentPosition(position) {
    this.positions.next(position)
  }


}
