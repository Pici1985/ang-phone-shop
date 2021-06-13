import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RegisterService {

  constructor() { }

  sendData(loginDetails: Object){
    console.log(JSON.stringify(loginDetails)); // ez itt egy put method lesz inkabb a megadott pathra
  }
}
