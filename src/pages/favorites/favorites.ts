import { Quote } from './../../data/quote.interface';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { QuotesProvider } from '../../providers/quotes/quotes';
import { SettingsProvider } from '../../providers/settings/settings';

/**
 * Generated class for the FavoritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favorites',
  templateUrl: 'favorites.html',
})
export class FavoritesPage {
  quotes : Quote[];

  constructor(private quotesProv:QuotesProvider,
    private modalCtrl:ModalController,
    private settingProv:SettingsProvider) {
  }

  ionViewWillEnter() {
    this.quotes=this.quotesProv.getFavoriteQuotes();
  }

  onRemoveFromFavorites(quote:Quote){
    this.quotesProv.removeQuoteFromFavorite(quote);
    this.quotes=this.quotesProv.getFavoriteQuotes();
  }
  onViewQuote(quote:Quote){
    const modal= this.modalCtrl.create('QuotePage',quote);
    modal.present();
    modal.onDidDismiss((remove:boolean)=>{
      if(remove){
        this.onRemoveFromFavorites(quote);
      }
    });
    
  }
  getBackground(){
    return this.settingProv.isAltBackground() ? 'altQuoteBackground' : 
    'quoteBackground';
  }

}
