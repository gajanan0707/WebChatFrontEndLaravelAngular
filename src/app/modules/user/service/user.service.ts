import { ToastrService } from 'ngx-toastr';
import { MyEnv } from './../../../classes/myenv';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { UserModel } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  selected_user = new BehaviorSubject<any>(null)
  is_Loggedin = new BehaviorSubject<boolean>(false)
  is_Selected_user_change = new BehaviorSubject<boolean>(false)
  Selected_user_info = new BehaviorSubject<UserModel[]>([]);
  UserFromDb = new BehaviorSubject<UserModel[]>([]);

  constructor(private http: HttpClient, private toastr: ToastrService) {
    this.getUserinfo()
  }

  //-------------Call Register Api-------------------------------
  register(form: any) {
    return this.http.post(MyEnv.baseUrl + "auth/register", form)
  }

  //-------------Call Login Api-------------------------------
  login(form: any) {
    return this.http.post(MyEnv.baseUrl + "auth/login", form)
  }

  //-------------Call Logout Api-------------------------------
  logout() {
    return this.http.post(MyEnv.baseUrl + "auth/logout", null)
  }

  //-------------Call Getallusers Api-------------------------------
  getAllUsers(keys: any) {
    this.http.post(MyEnv.baseUrl + "auth/allusers?keywords=" + keys, null).subscribe(res => {
      var r: any = res
      this.UserFromDb.next(r.users);
    }, error => {
      this.toastr.error("All users cannot be fetched");
    })
  }

  getme(){
    return this.http.post(MyEnv.baseUrl + "auth/me",null)
  }



  //-------------Call getuserinfo Api-------------------------------
  getUserinfo() {
    this.selected_user.subscribe(res => {
      if (res != null) {
        this.http.post(MyEnv.baseUrl + "auth/userinfo?id=" + localStorage.getItem('selected_user_id'), null).subscribe(res => {
          var r: any = res
          this.Selected_user_info.next(r.userinfo);
        }, error => {
          this.toastr.error("usersinfo cannot be fetched");
        })
      }
    })
  }
}
