import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-topbar',
  templateUrl: './topbar.component.html',
  styleUrls: ['./topbar.component.scss']
})
export class TopbarComponent implements OnInit {
  isLogin:any
  constructor() { }

  ngOnInit(): void {
    this.isLogin=localStorage.getItem("signinUser")
  }
 
}
