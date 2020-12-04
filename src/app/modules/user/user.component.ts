import { UserService } from 'src/app/modules/user/service/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  constructor(private userservice:UserService) { }

  ngOnInit(): void {
  }

  onChange(keys:any){
   this.userservice.getAllUsers(keys)
  }
}
