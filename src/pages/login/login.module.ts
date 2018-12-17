import { NgxErrorsModule } from '@ultimate/ngxerrors';
import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { LoginPage } from './login';

@NgModule({
  declarations: [
    LoginPage,

  ],
  imports: [
    IonicPageModule.forChild(LoginPage),
    NgxErrorsModule
  ],
})
export class LoginPageModule {}
