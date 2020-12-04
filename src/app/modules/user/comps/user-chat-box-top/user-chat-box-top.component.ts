import { ChatsService } from './../../service/chats.service';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/user/service/user.service';
import { UserModel } from './../../model/user.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-chat-box-top',
  templateUrl: './user-chat-box-top.component.html',
  styleUrls: ['./user-chat-box-top.component.scss']
})
export class UserChatBoxTopComponent implements OnInit {
  user:any = new UserModel();
  getuserstatus:any
  constructor(private userservice:UserService,private route:Router,private chatservice:ChatsService) { }

  ngOnInit(): void {
    this.userservice.getUserinfo();
   
    this.userservice.Selected_user_info.subscribe(res=>{
      this.user=res
      this.getuserstatus=this.user.is_online
      if(this.getuserstatus==1){
        this.user.is_online="online"
      }
      else{
        this.user.is_online="offline"
      }
    });

  }

}
