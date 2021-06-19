import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alternative',
  templateUrl: './alternative.component.html',
  styleUrls: ['./alternative.component.css']
})
export class AlternativeComponent implements OnInit {

  myForm: FormGroup;
  
  constructor(private fb: FormBuilder) {  
  }

  ngOnInit(): void {
    this.myForm = this.fb.group({
      email: '',
      password: '',
      password_again: ''
    });
    this.myForm.valueChanges.subscribe(console.log);
  }

}
