import { ToastrModule } from 'ngx-toastr';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { UserTopBarComponent } from './comps/user-top-bar/user-top-bar.component';
import { UserSidebarComponent } from './comps/user-sidebar/user-sidebar.component';
import { UserSidebarTopComponent } from './comps/user-sidebar-top/user-sidebar-top.component';
import { UserChatBoxComponent } from './comps/user-chat-box/user-chat-box.component';
import { UserChatBoxTopComponent } from './comps/user-chat-box-top/user-chat-box-top.component';
import { UserChatBoxBottomComponent } from './comps/user-chat-box-bottom/user-chat-box-bottom.component';
import { UserRightSideBarComponent } from './comps/user-right-side-bar/user-right-side-bar.component';
import { RouterModule } from '@angular/router';
import { UserComponent } from './user.component';
import { ProfileComponent } from './comps/profile/profile.component';
import { SettingComponent } from './comps/setting/setting.component';
import { AboutComponent } from './comps/about/about.component';
import { PickerModule } from '@ctrl/ngx-emoji-mart';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [UserComponent, UserTopBarComponent, UserSidebarComponent, UserSidebarTopComponent, UserChatBoxComponent, UserChatBoxTopComponent, UserChatBoxBottomComponent, UserRightSideBarComponent, ProfileComponent, SettingComponent, AboutComponent],
  imports: [
    CommonModule,
    UserRoutingModule,
    RouterModule,
    ToastrModule.forRoot(), 
    PickerModule,
    FormsModule
  ],
  exports:[UserComponent, UserTopBarComponent, UserSidebarComponent, UserSidebarTopComponent, UserChatBoxComponent, UserChatBoxTopComponent, UserChatBoxBottomComponent, UserRightSideBarComponent],
})
export class UserModule { }
