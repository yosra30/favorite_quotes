import { SettingsProvider } from './../../providers/settings/settings';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Toggle } from 'ionic-angular';

/**
 * Generated class for the SettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-settings',
  templateUrl: 'settings.html',
})
export class SettingsPage {
  constructor(private settingsProv:SettingsProvider) {
  }

  onToggle(toggle:Toggle){
    //console.log(toggle);
    this.settingsProv.setBackground(toggle.checked);
  }

  checkAltBackground(){
    return this.settingsProv.isAltBackground();
  }
}
