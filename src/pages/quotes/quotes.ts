import { QuotesProvider } from './../../providers/quotes/quotes';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quotes',
  templateUrl: 'quotes.html',
})
export class QuotesPage {
  quoteGroup :{category : string , quotes :Quote[],icon:string};

  constructor(private navParams: NavParams,
    private alertCtrl:AlertController,
    private quoteProv: QuotesProvider) {
  }

  ionViewDidLoad() {
    this.quoteGroup=this.navParams.data;
  }

  onAddToFavorite(selectedQuote:Quote){
    const alert =this.alertCtrl.create({
      title: 'Add Quote',
      message :'Are you sure you want to add the quote ?',
      buttons :[
        {
          text :'Yes, go ahead',
          handler : ()=>{
            this.quoteProv.addQuoteToFavorite(selectedQuote);
          }
        },
        {
          text :'No, I changed my mind',
          role :'cancel', 
          handler : ()=>{
            console.log('Cancelled');
          }
        }
      ]
    });

    alert.present();
  }
  onRemoveFromFavorite(quote:Quote){
    this.quoteProv.removeQuoteFromFavorite(quote);
  }

  isFavorite(quote:Quote){
    return this.quoteProv.isQuoteFavorite(quote);
  }
}
