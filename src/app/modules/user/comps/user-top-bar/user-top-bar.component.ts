import { UserService } from 'src/app/modules/user/service/user.service';
import { ChatsService } from './../../service/chats.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-top-bar',
  templateUrl: './user-top-bar.component.html',
  styleUrls: ['./user-top-bar.component.scss']
})
export class UserTopBarComponent implements OnInit {

  constructor(private chatservice:ChatsService, private userservice:UserService) { }

  ngOnInit(): void {
  }

  refresh(){
    this.userservice.getAllUsers("");
    this.chatservice.getChats();
  }

}
