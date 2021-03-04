import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from '../_services/token-storage.service';
import { AuthService } from '../_services/auth.service';
import { ActivatedRoute, Router,ParamMap } from '@angular/router';
import { ChatareaComponent } from '../chat/chatarea/chatarea.component';
import { NewsidebarComponent } from '../chat/newsidebar/newsidebar.component';
import { SideprofileComponent } from '../chat/sideprofile/sideprofile.component';



@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit {

  currentUser: any;
  users: any;
  id:any;
  singlesideuser: any;

  constructor(private route: ActivatedRoute,private token:TokenStorageService, private auth:AuthService,private router: Router) { }

  ngOnInit(): void {
  
    this.auth.getuserdetails().subscribe(response =>{
      console.log(response)
      this.currentUser = response;
    },error => console.log(error));
    
    this.auth.getallusers().subscribe(response =>{
      console.log(response)
      this.users = response;

    });
    this.route.paramMap.subscribe((params : ParamMap)=> {  
      this.id = +params.get('id');  
      console.log("fromchat new Id is :", this.id); 
      this.auth.getsingleusers(this.id).subscribe(res =>{
        this.singlesideuser = res;
        console.log(this.singlesideuser)
      })      
}); 



  }

}
