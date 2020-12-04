import { UserModel } from './../../model/user.model';
import { ChatsService } from './../../service/chats.service';
import { ChatModel } from './../../model/chat.model';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-chat-box',
  templateUrl: './user-chat-box.component.html',
  styleUrls: ['./user-chat-box.component.scss']
})
export class UserChatBoxComponent implements OnInit {
  chats:ChatModel[]=[];
  user = new UserModel();
  constructor(private chatservice:ChatsService) { }

  ngOnInit(): void {
    this.chatservice.chatsFromDb.subscribe(res=>{
      this.chats=res
      this.user = JSON.parse(localStorage.getItem('signinUser') || '{}');
    })
    this.chatservice.getChats()
  }

}
