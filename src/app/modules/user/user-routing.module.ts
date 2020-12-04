import { SettingComponent } from './comps/setting/setting.component';
import { ProfileComponent } from './comps/profile/profile.component';
import { UserComponent } from './user.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './comps/about/about.component';
import { AuthGuard } from '../guard/auth.guard';

const routes: Routes = [
  {
    path: "", component: UserComponent,
    children: [
      { path: '', component: ProfileComponent ,canActivate: [AuthGuard],},
      { path: 'profile', component: ProfileComponent ,canActivate: [AuthGuard]},
      { path: 'about', component: AboutComponent ,canActivate: [AuthGuard]},
      { path: 'setting', component: SettingComponent ,canActivate: [AuthGuard]}
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UserRoutingModule { }
