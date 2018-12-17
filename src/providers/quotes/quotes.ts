import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Quote } from '../../data/quote.interface';

/*
  Generated class for the QuotesProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class QuotesProvider {
  private favoriteQuotes: Quote[]=[];
  
  addQuoteToFavorite(quote:Quote){
    this.favoriteQuotes.push(quote);
    console.log(this.favoriteQuotes);
  }

  removeQuoteFromFavorite(quote:Quote){
    const position = this.favoriteQuotes.findIndex((quoteEl:Quote)=>{
      return quoteEl.id==quote.id;
    });
    this.favoriteQuotes.splice(position,1);
  }

  getFavoriteQuotes(){
    return this.favoriteQuotes.slice();
  }

  isQuoteFavorite(quote:Quote){
    return this.favoriteQuotes.find((quoteEl:Quote)=>{
      return quoteEl.id==quote.id;
    });
  }

}
