import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';


@Component({
  selector: 'app-dummycmp',
  templateUrl: './dummycmp.component.html',
  styleUrls: ['./dummycmp.component.css']
})
export class DummycmpComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }
  id:any;

  ngOnInit(): void {
    this.route.params.subscribe(data =>{
      this.id = data.para
      console.log("from dummy:",this.id)
      console.log(data);
    });


    
  }

}
