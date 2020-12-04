import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/modules/user/service/user.service';

declare var $:any;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  SelectedImage:any=File;
  public imagePath:any;

  constructor(private userservice:UserService,private route:Router,private toastr: ToastrService) { }

  ngOnInit(): void {
    $( document ).ready(function() {
      $( "#AddEmpImage" ).mouseover(function() {
       $("#AddEmpImage").animate({
        opacity: 0.25,

      },500);
      });
      $( "#AddEmpImage" ).mouseleave(function() {
        $("#AddEmpImage").animate({
          opacity: 1,
        },100);
      });
      $( "#AddEmpImage" ).click(function() {
        $("#image").click();
      });
  });
  }

  onSelect(event:any)
  {
   var tmppath = URL.createObjectURL(event.target.files[0]);
   $("#AddEmpImage").fadeIn("fast").attr('src',tmppath);
   this.SelectedImage=<File>event.target.files[0];
  }

  onSubmit(){
    if($("#pass").val()!=$("#cpass").val())
    {
      this.toastr.error("Both Must be equal");
    }
    else{
      let form =new FormData();
      form.append("name",$("#name").val());
      form.append("image",this.SelectedImage);
      form.append("mobile",$("#mobile").val());
      form.append("email",$("#email").val());
      form.append("password",$("#pass").val());

      this.userservice.register(form).subscribe(res=>{
        let message:any=res
        $("#email").prop("value","")
        $("#mobile").prop("value","")
        $("#name").prop("value","")
        $("#pass").prop("value","")
        $("#cpass").prop("value","")
        $("#AddEmpImage").prop("src","assets/images/user-icon.png")
        this.toastr.success(message.message);
        this.route.navigateByUrl('/login')
      },error=>{
        error.error.error.forEach((element:any)=>{
          this.toastr.error(element);
        })
      })
    }
  }

}
