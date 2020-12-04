import { ToastrService } from 'ngx-toastr';
import { UserService } from 'src/app/modules/user/service/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

declare var $:any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  SelectedImage:any=File;
  public imagePath:any;
  constructor(private userService:UserService,private router:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
  }

  //-----------login submit functionality----------------------------------------------------------
  onSubmit(){
    if($("#email").val()=="")
    {
      this.toastr.error("Both Must be equal");
    }
    else if($("#pass").val()==""){
      this.toastr.error("Password feild required");
    }
    else{
      let form =new FormData();
      form.append("email",$("#email").val());
      form.append("password",$("#pass").val());

      this.userService.login(form).subscribe(res=>{
        let re:any=res
        localStorage.setItem("token",re.access_token)
        localStorage.setItem("signinUser",JSON.stringify(re.user))
        this.toastr.success('SuccessFully Login!');
        this.router.navigateByUrl('/user')
      },error=>{
        this.toastr.error(error.error.error);
      })
    }
  }
}
