import { Component, OnInit,Input } from '@angular/core';
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

  constructor() {}
  @Input() singlesideuser:any

  ngOnInit(): void {
  }

}
