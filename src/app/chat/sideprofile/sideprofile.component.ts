import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../_services/auth.service';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-sideprofile',
  templateUrl: './sideprofile.component.html',
  styleUrls: ['./sideprofile.component.css']
})
export class SideprofileComponent implements OnInit {
  userdetails:any;
  id: number;
  id$:Observable<String>;

  constructor(private route: ActivatedRoute,private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.id$ = this.route.paramMap.pipe(map(paramMap => paramMap.get('id')));
    console.log("id is",this.id);
    this.auth.getsingleusers(this.id).subscribe(data =>{
      console.log(data)
      this.userdetails = data;
    },error => console.log(error));
  }

}
