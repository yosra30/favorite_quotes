import { AuthProvider } from './../providers/auth/auth';
import { LoginPage } from './../pages/login/login';
import { Component, ViewChild } from '@angular/core';
import { Platform, NavController, MenuController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage : string;
  loginPage: string = 'LoginPage';
  tabsPage: string = 'TabsPage';
  settingsPage: string = 'SettingsPage';
  @ViewChild('navContent') nav :NavController;

  constructor(platform: Platform, private auth:AuthProvider , private menuCtrl: MenuController,statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
    });
    this.initializeApp();

 
  }
  initializeApp(){
    this.auth.afAuth.authState
    .subscribe(
      user => {
        if (user) {
          this.rootPage = this.tabsPage;
        } else {
          this.rootPage = this.loginPage;
        }
      },
      () => {
        this.rootPage = this.loginPage;
      }
    );
   }
  onLoad(page : string){
    this.nav.setRoot(page);
    this.menuCtrl.close();
  }
  logout() {
    this.menuCtrl.close();
    this.auth.signOut();
    this.nav.setRoot(this.loginPage);
  }
  login() {
    // this.menu.close();
    // this.auth.signOut();
    // this.nav.setRoot(LoginPage);
  }
}

