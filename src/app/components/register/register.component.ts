import { Component, OnInit, Input } from '@angular/core';
import {ChatserviceService} from '../../chatservice.service';
import {FormControl, FormGroupDirective, FormGroup, NgForm, Validators} from '@angular/forms';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  //User: any = ['Super Admin', 'Author', 'Reader'];
  user ={
    Username:'',
    Email:'',
    Password:''
  };
  submitted = false;



  constructor(private service:ChatserviceService) { }

  ngOnInit(): void {
  }
  register():void {

    const data = {
      username:this.user.Username,
      email:this.user.Email,
      password:this.user.Password};
      console.log(data)

    this.service.register(data).subscribe(res=>{
      console.log(res);
      alert(res);
      this.submitted = true;
    },error =>{
      alert(error);
      console.log(error);
    });

  }
  newregister(): void{
    this.submitted = false;
    this.user = {
      Username: '',
      Email: '',
      Password: ''
    };
  }

}
