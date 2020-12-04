import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { UserService } from 'src/app/modules/user/service/user.service';
import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../model/user.model';



@Component({
  selector: 'app-user-sidebar-top',
  templateUrl: './user-sidebar-top.component.html',
  styleUrls: ['./user-sidebar-top.component.scss']
})
export class UserSidebarTopComponent implements OnInit {
  user=new UserModel();
  data:any=[]
  constructor(private userservice:UserService,private route:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('signinUser') || '{}');
  }

  logout(){
  this.userservice.logout().subscribe(res=>{
    localStorage.removeItem("token")
    localStorage.removeItem("signinUser")
    this.route.navigateByUrl("/")
    this.toastr.success('SuccessFully Logout!');
  },error=>{
    this.toastr.error(error.error.error)
  })
  }

}
