import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from '../../_services/auth.service';


@Component({
  selector: 'app-chatarea',
  templateUrl: './chatarea.component.html',
  styleUrls: ['./chatarea.component.css']
})
export class ChatareaComponent implements OnInit {

  msg = {
    message:''
  }
  senttby:any;
  sentto:any;

  constructor(private auth:AuthService) { }
  @Input() singlesideuser:any;
  @Input() currentUser:any;
  @Input() messages:any;
 
  ngOnInit(): void {

  }
  send(){
    const data={
      message:this.msg.message,
      sentby:this.currentUser.id,
      sentto:this.singlesideuser.id

    }
    this.auth.message(data).subscribe(res=>{
      console.log(data)
      console.log(res);
      alert("message sent");
    },error =>{
      alert(error);
      console.log(error);
    });

  }
  getallmsg(){
    this.auth.getmessages(this.currentUser.id,this.singlesideuser.id).subscribe(res =>{
      console.log(res);
      this.messages = res

  });

  }

}
