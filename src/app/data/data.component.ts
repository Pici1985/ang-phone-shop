import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.css']
})
export class DataComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  
  
  callIt(){
    fetch('http://localhost:3000/posts/')
    .then(res => {
      if(res.ok){
        console.log('Success');
          res.json()
          .then(data => console.log(data))
        } else {
          console.log('Error')
        }
      });
    }
    
  postIt(){
    fetch('http://localhost:3000/posts/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": 5,
        "title": 'new post',
        "author": 'Bazsimazsi'
      })
    }).then(res => {
      console.log('posted')
      return res.json();
    }).then(data => console.log(data))
      .catch(error => console.log(error))
  }

  submit(dataForm:any){
    let entry:any = {  
    "id": dataForm.value.dataIDField,
    "title": dataForm.value.titleInputField,
    "author": dataForm.value.authorInputField
    }
    fetch('http://localhost:3000/posts/',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        "id": dataForm.value.dataIDField,
        "title": dataForm.value.titleInputField,
        "author": dataForm.value.authorInputField 
      })
    }).then(res => {
      console.log('posted')
      return res.json();
    }).then(data => console.log(data))
      .catch(error => console.log(error))
      dataForm.reset();
  }

  displayIt(){
      console.log('display');
  }
}
    
