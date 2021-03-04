import { Component, OnInit,Input } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
import { AuthService } from '../../_services/auth.service';




@Component({
  selector: 'app-newsidebar',
  templateUrl: './newsidebar.component.html',
  styleUrls: ['./newsidebar.component.css']
})
export class NewsidebarComponent implements OnInit {
  

  constructor(private route: ActivatedRoute,private auth: AuthService) { }
  @Input() currentUser:any;
  @Input() users:any;

  ngOnInit(): void {


  }

}
