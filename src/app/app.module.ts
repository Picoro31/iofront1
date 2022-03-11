import { EdituserComponent } from './edituser/edituser.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { UserinfoComponent } from './userinfo/userinfo.component';
import { ForgetpassComponent } from './forgetpass/forgetpass.component';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { Camera } from '@awesome-cordova-plugins/camera/ngx';
import { EmailComposer } from '@awesome-cordova-plugins/email-composer/ngx';
import { HTTP } from '@awesome-cordova-plugins/http/ngx';

import { NavController, NavParams } from '@ionic/angular';

@NgModule({
  declarations: [AppComponent,
    LoginComponent,
    UserinfoComponent,
    ForgetpassComponent,
    SignupComponent,
    EdituserComponent
  ],

  entryComponents: [
    LoginComponent,
    UserinfoComponent,
    ForgetpassComponent,
    SignupComponent,
    EdituserComponent
  ],

  imports: [BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(), AppRoutingModule],

  providers: [
    Camera,
    EmailComposer,
    HTTP,
    NavController,
    NavParams,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }],
  bootstrap: [AppComponent],

})

export class AppModule {}
