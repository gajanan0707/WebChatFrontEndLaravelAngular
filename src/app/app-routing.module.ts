import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  //---------------default model page paths------------------------------------------------------
  {path:'',loadChildren:()=>import('./modules/default/default.module').then(m=>m.DefaultModule)},

  //---------------user model page paths---------------------------------------------------------
  {path:'user',loadChildren:()=>import('./modules/user/user.module').then(m=>m.UserModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
