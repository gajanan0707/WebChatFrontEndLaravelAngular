import { ChatsService } from './../../service/chats.service';
import { UserService } from './../../service/user.service';
import { Component, OnInit } from '@angular/core';

declare var $:any
@Component({
  selector: 'app-user-chat-box-bottom',
  templateUrl: './user-chat-box-bottom.component.html',
  styleUrls: ['./user-chat-box-bottom.component.scss']
})
export class UserChatBoxBottomComponent implements OnInit {
  message = '';
  showEmojiPicker = false;

  constructor(private chatservice:ChatsService) { }

  ngOnInit(): void {
  }

  toggleEmojiPicker() {
    console.log(this.showEmojiPicker);
        this.showEmojiPicker = !this.showEmojiPicker;
  }

  addEmoji(event:any) {
    const { message } = this;
    const text = `${message}${event.emoji.native}`;

    this.message = text;
    this.showEmojiPicker = false;
  }

  onFocus() {
    this.showEmojiPicker = false;
  }
  onBlur() {
    console.log('onblur')
  }

  send(v:any){
    $("#userInput").prop("value","")
    this.chatservice.send(v) 
    this.message = '';
  }

}
