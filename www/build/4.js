webpackJsonp([4],{

/***/ 720:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "QuotesPageModule", function() { return QuotesPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(156);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__quotes__ = __webpack_require__(729);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var QuotesPageModule = /** @class */ (function () {
    function QuotesPageModule() {
    }
    QuotesPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__quotes__["a" /* QuotesPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["e" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__quotes__["a" /* QuotesPage */]),
            ],
        })
    ], QuotesPageModule);
    return QuotesPageModule;
}());

//# sourceMappingURL=quotes.module.js.map

/***/ }),

/***/ 729:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return QuotesPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__providers_quotes_quotes__ = __webpack_require__(364);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(1);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(156);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
var QuotesPage = /** @class */ (function () {
    function QuotesPage(navParams, alertCtrl, quoteProv) {
        this.navParams = navParams;
        this.alertCtrl = alertCtrl;
        this.quoteProv = quoteProv;
    }
    QuotesPage.prototype.ionViewDidLoad = function () {
        this.quoteGroup = this.navParams.data;
    };
    QuotesPage.prototype.onAddToFavorite = function (selectedQuote) {
        var _this = this;
        var alert = this.alertCtrl.create({
            title: 'Add Quote',
            message: 'Are you sure you want to add the quote ?',
            buttons: [
                {
                    text: 'Yes, go ahead',
                    handler: function () {
                        _this.quoteProv.addQuoteToFavorite(selectedQuote);
                    }
                },
                {
                    text: 'No, I changed my mind',
                    role: 'cancel',
                    handler: function () {
                        console.log('Cancelled');
                    }
                }
            ]
        });
        alert.present();
    };
    QuotesPage.prototype.onRemoveFromFavorite = function (quote) {
        this.quoteProv.removeQuoteFromFavorite(quote);
    };
    QuotesPage.prototype.isFavorite = function (quote) {
        return this.quoteProv.isQuoteFavorite(quote);
    };
    QuotesPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-quotes',template:/*ion-inline-start:"C:\Users\ASUS\Documents\EGDownloads\favorite_quotes\favorite_quotes\src\pages\quotes\quotes.html"*/'<!--\n  Generated template for the QuotesPage page.\n\n  See http://ionicframework.com/docs/components/#navigation for more info on\n  Ionic pages and navigation.\n-->\n<ion-header>\n\n  <ion-navbar>\n    <ion-title>{{quoteGroup?.category | uppercase}}</ion-title>\n  </ion-navbar>\n\n</ion-header>\n\n<ion-content padding>\n  <ion-card *ngFor="let quote of quoteGroup?.quotes; let i = index">\n    <ion-card-header>\n      #{{i+1}}\n    </ion-card-header>\n    <ion-card-content>\n      <p> {{quote.text}} </p>\n      <p class="author"> {{quote.person}}</p>\n    </ion-card-content>\n    <ion-row>\n      <ion-col text-right>\n        <button ion-button clear small \n        (click)="onAddToFavorite(quote)" *ngIf="!isFavorite(quote)">Favorite</button>\n        <button ion-button clear small \n        (click)="onRemoveFromFavorite(quote)" *ngIf="isFavorite(quote)" color=\'danger\'>Unfavorite</button>\n      </ion-col>\n    </ion-row>\n  </ion-card>\n\n</ion-content>'/*ion-inline-end:"C:\Users\ASUS\Documents\EGDownloads\favorite_quotes\favorite_quotes\src\pages\quotes\quotes.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["i" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["a" /* AlertController */],
            __WEBPACK_IMPORTED_MODULE_0__providers_quotes_quotes__["a" /* QuotesProvider */]])
    ], QuotesPage);
    return QuotesPage;
}());

//# sourceMappingURL=quotes.js.map

/***/ })

});
//# sourceMappingURL=4.js.map