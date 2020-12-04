import { TokenInterceptor } from './classes/token.interceptor';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserModule } from './modules/user/user.module';
import { DefaultModule } from './modules/default/default.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { ToastrModule } from 'ngx-toastr';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PickerModule } from '@ctrl/ngx-emoji-mart';


@NgModule({
  declarations: [
    AppComponent,
  
  ],
  imports: [
    BrowserAnimationsModule,
    BrowserModule,
    AppRoutingModule,
    UserModule,
    DefaultModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    PickerModule
    
  ],
  providers: [{
    provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor, multi:true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
