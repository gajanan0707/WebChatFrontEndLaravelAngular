import { ToastrModule } from 'ngx-toastr';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DefaultRoutingModule } from './default-routing.module';
import { DefaultComponent } from './default.component';
import { TopbarComponent } from './comps/topbar/topbar.component';
import { LoginComponent } from './comps/login/login.component';
import { RegisterComponent } from './comps/register/register.component';
import { AboutComponent } from './comps/about/about.component';


@NgModule({
  declarations: [DefaultComponent, TopbarComponent, LoginComponent, RegisterComponent, AboutComponent],
  imports: [
    CommonModule,
    DefaultRoutingModule,
    ToastrModule.forRoot(), 
  ]
})
export class DefaultModule { }
