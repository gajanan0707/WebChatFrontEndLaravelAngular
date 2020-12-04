import { UserService } from 'src/app/modules/user/service/user.service';
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'app-user-sidebar',
  templateUrl: './user-sidebar.component.html',
  styleUrls: ['./user-sidebar.component.scss']
})
export class UserSidebarComponent implements OnInit {
  users:UserModel[]=[];

  constructor(private userservice:UserService) { }
  ngOnInit(): void {
    this.userservice.UserFromDb.subscribe(res=>{this.users=res})
    this.userservice.getAllUsers("") 
  }


  onSelect(id:any){
    localStorage.setItem("selected_user_id",id)
    this.userservice.selected_user.next(id)
  }
}
