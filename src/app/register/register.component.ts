import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { RegisterService } from '../register.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private _registerservice: RegisterService) { }
  
  ngOnInit(): void {
  }
  
  loginDetails: any = {
    email: "registerForm.value.emailAddressField",
    password: "registerForm.value.passwordField1"
  }; 

  successValue: any = false;
  
  loginUser(registerForm: NgForm){
    this.loginDetails = this._registerservice.sendData(this.loginDetails);
    this.successValue = true;
    registerForm.reset();
    setTimeout(()=>{                           
      this.successValue = false;
    }, 3000);
  }
}
