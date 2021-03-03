import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { TokenStorageService } from '../../_services/token-storage.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  user ={
    username:'',
    password:''
  }
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage='';


  constructor(private authservice: AuthService,private tokenstorage:TokenStorageService,private route: Router) { }

  ngOnInit(): void {
    if (this.tokenstorage.getToken()) {
      this.isLoggedIn = true;
    }
  }
  onSubmit():void{
    const data ={
      username:this.user.username,
      password:this.user.password

    }
    console.log(data);
  
    this.authservice.login(data).subscribe(
      response => {
        console.log(response);
        console.log(response.token);
        
        this.tokenstorage.saveToken(response.token);
        this.tokenstorage.saveUser(response);

        this.isLoginFailed = false;
        this.isLoggedIn = true;
        
      },
      err => {
        this.errorMessage = err.error.message;
        this.isLoginFailed = true;
        this.reloadPage();
      }
    );
  }
  reloadPage(): void {
    window.location.reload();
  }

}
