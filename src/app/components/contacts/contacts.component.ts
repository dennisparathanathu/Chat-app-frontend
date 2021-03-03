import { Component, OnInit } from '@angular/core';
import {ContactService} from '../../_services/contact.service';


@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  user ={
    name:'',
    nickname:'',
    phonenumber:'',
    dob:'',
    Language:''
  };
  submitted = false;

  constructor(private service:ContactService) { }

  ngOnInit(): void {
  }
  addcontact():void {

    const data = {
      name:this.user.name,
      nickname:this.user.nickname,
      phonenumber:this.user.phonenumber,
      dob:this.user.dob,
      Language:this.user.Language
    
    };
      console.log(data)

    this.service.contact(data).subscribe(res=>{
      console.log(res);
      alert(res);
      this.submitted = true;
    },error =>{
      alert(error);
      console.log(error);
    });

  }

}
