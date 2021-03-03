import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {AuthService} from '../../_services/auth.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  currentUser:any;
  id: number;

  constructor(private route: ActivatedRoute,private auth: AuthService) { }

  ngOnInit(): void {
    this.auth.getuserdetails().subscribe(response =>{
      console.log('profile',response)
      this.currentUser = response;
    },error => console.log(error));
 
  }

}
