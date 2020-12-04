import { Component, OnInit } from '@angular/core';
import { UserModel } from '../../model/user.model';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  user=new UserModel();
  constructor() { }

  ngOnInit(): void {
    this.user = JSON.parse(localStorage.getItem('signinUser') || '{}');
  }

}
