import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from '../../_services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser:any;
  id: number;
  profile :{
    nickname:string;
    gender:string;
    phonenumber:string;
    dob:string;
    location:string;
    language:string;
    image:File | null;

  }

  constructor(private route: ActivatedRoute,private auth: AuthService,private router: Router) { 
    this.profile = {
      nickname:'',
      gender:'',
      phonenumber:'',
      dob:'',
      location:'',
      language:'',
      image:null

    };
  }

  ngOnInit(): void {
    this.auth.getuserdetails().subscribe(response =>{
      console.log('profile',response)
      this.currentUser = response;
    },error => console.log(error));
 
  }
  save(){
    const data ={
      nickname:this.profile.nickname,
      gender:this.profile.gender,
      phonenumber:this.profile.gender,
      dob:this.profile.dob,
      location:this.profile.location,
      Language:this.profile.language,
      image:this.profile.image,
      user:this.currentUser.id
      
    }
    console.log(data);
    this.auth.additionaluserdetails(data).subscribe(res =>{
      console.log(res);
      alert(res);
      this.router.navigate(['/chat']);

    },error =>{
      alert(error);
      console.log(error);
    })


  }

}
