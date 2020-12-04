import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/modules/user/service/user.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { MyEnv } from 'src/app/classes/myenv';
import { ChatModel } from '../model/chat.model';

@Injectable({
  providedIn: 'root'
})
export class ChatsService {

  chatsFromDb = new BehaviorSubject<ChatModel[]>([]);

  constructor(private http: HttpClient, private userservice: UserService, private toastr: ToastrService) {
    this.getChats()
  }

  //-----------------call the Send Message Api----------------------------------------------------
  send(text: any) {
    this.http.post(MyEnv.baseUrl + "auth/send?id=" + localStorage.getItem('selected_user_id') + "&text=" + text, null).subscribe(res => {
      this.getChats()
    }, error => {
      this.toastr.error("sending operation failed");
    })
  }

  //---------------Call the Getchats Api
  getChats() {
    this.userservice.selected_user.subscribe(res => {
      if (res != null) {
        this.http.post(MyEnv.baseUrl + "auth/chats?id=" + localStorage.getItem('selected_user_id'), null).subscribe(res => {
          var r: any = res
          this.chatsFromDb.next(r.chats);
        }, error => {
          this.toastr.error(" userchat cannot be fetched");
        })
      }
    })
  }
}
