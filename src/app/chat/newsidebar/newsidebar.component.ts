import { Component, OnInit,Input } from '@angular/core';



@Component({
  selector: 'app-newsidebar',
  templateUrl: './newsidebar.component.html',
  styleUrls: ['./newsidebar.component.css']
})
export class NewsidebarComponent implements OnInit {
  

  constructor() { }
  @Input() currentUser:any;
  @Input() users:any;

  ngOnInit(): void {
  }

}
