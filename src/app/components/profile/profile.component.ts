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
    phonenumber:Number;
    dob:string;
    location:string;
    language:string;
    image:string;

  }
  photofilename:any;
  photofilepath:any;
  photoUrl:'http://localhost:8000/media/'

  constructor(private route: ActivatedRoute,private auth: AuthService,private router: Router) { 
    

    this.profile = {
      nickname:'',
      gender:'',
      phonenumber:null,
      dob:'',
      location:'',
      language:'',
      image:''

    };
  }

  ngOnInit(): void {
    this.auth.getuserdetails().subscribe(response =>{
      console.log('profile',response)
      this.currentUser = response;
    },error => console.log(error));
 
  }
  uploadphoto(event: any){
    var file = event.target.files[0];
    const formdata:FormData =new FormData();
    formdata.append('uploadedFile',file,file.name);

    this.auth.uploadphoto(formdata).subscribe((data:any)=>{
      this.photofilename=data.toString();
      this.photofilepath = this.photoUrl+this.photofilename;
      this.profile.image = this.photofilepath;
      console.log(this.photofilename)
      console.log(this.photofilepath)
    })


  }
  save(){
    const data ={
      nickname:this.profile.nickname,
      gender:this.profile.gender,
      phonenumber:this.profile.phonenumber,
      dob:this.profile.dob,
      location:this.profile.location,
      Language:this.profile.language,
      image:this.photofilepath,
      user:this.currentUser.id
      
    }
    console.log(data);
    this.auth.additionaluserdetails(data).subscribe(res =>{
      console.log(res);
      alert(res.mag);

    },error =>{
      alert(error);
      console.log(error);
    })


  }

}
