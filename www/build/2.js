webpackJsonp([2],{

/***/ 555:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "EditOrderedItemPageModule", function() { return EditOrderedItemPageModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_ionic_angular__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__edit_ordered_item__ = __webpack_require__(559);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



var EditOrderedItemPageModule = (function () {
    function EditOrderedItemPageModule() {
    }
    EditOrderedItemPageModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__edit_ordered_item__["a" /* EditOrderedItemPage */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_1_ionic_angular__["d" /* IonicPageModule */].forChild(__WEBPACK_IMPORTED_MODULE_2__edit_ordered_item__["a" /* EditOrderedItemPage */]),
            ],
        })
    ], EditOrderedItemPageModule);
    return EditOrderedItemPageModule;
}());

//# sourceMappingURL=edit-ordered-item.module.js.map

/***/ }),

/***/ 559:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return EditOrderedItemPage; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__services_toast_toast_service__ = __webpack_require__(321);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__(0);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_ionic_angular__ = __webpack_require__(104);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__services_order_list_order_list_service__ = __webpack_require__(320);
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var EditOrderedItemPage = (function () {
    function EditOrderedItemPage(navCtrl, navParams, order, toast) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.order = order;
        this.toast = toast;
    }
    EditOrderedItemPage.prototype.ionViewWillLoad = function () {
        this.item = this.navParams.get('item');
    };
    EditOrderedItemPage.prototype.saveItem = function (item) {
        var _this = this;
        this.order.editItem(item).then(function () {
            _this.toast.show(item.name + " Saved!");
            _this.navCtrl.setRoot('HomePage');
        });
    };
    EditOrderedItemPage.prototype.removeItem = function (item) {
        var _this = this;
        this.order.removeItem(item).then(function () {
            _this.toast.show(item.name + " Deleted!");
            _this.navCtrl.setRoot('HomePage');
        });
    };
    EditOrderedItemPage = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["m" /* Component */])({
            selector: 'page-edit-ordered-item',template:/*ion-inline-start:"C:\Users\Dhaval\Challenge_2\src\pages\edit-ordered-item\edit-ordered-item.html"*/'\n<ion-header>\n\n    <ion-navbar color="dark">\n      <ion-title>{{item?.name}}</ion-title>\n    </ion-navbar>\n  \n  </ion-header>\n  \n  <ion-content padding>\n  \n    <ion-item>\n      <ion-label>Name: </ion-label>\n      <ion-input [(ngModel)]="item.name" placeholder="Enter name"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Quantity: </ion-label>\n      <ion-input [(ngModel)]="item.quantity" type="number" placeholder="Enter quantity"></ion-input>\n    </ion-item>\n  \n    <ion-item>\n      <ion-label>Mods: </ion-label>\n      <ion-input [(ngModel)]="item.mods" placeholder="Any Mods?"></ion-input>\n    </ion-item>\n\n    <ion-item>\n      <ion-label>Need cutlery? </ion-label>\n      <ion-checkbox color="primary" [(ngModel)]="item.cut" placeholder="Save the planet"></ion-checkbox> \n    </ion-item>\n  \n    <button ion-button block clear (click)="saveItem\n    (item)">Save</button>\n    <button ion-button block clear color="danger" (click)="removeItem(item)">Delete</button>\n  \n  </ion-content>'/*ion-inline-end:"C:\Users\Dhaval\Challenge_2\src\pages\edit-ordered-item\edit-ordered-item.html"*/,
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2_ionic_angular__["e" /* NavController */],
            __WEBPACK_IMPORTED_MODULE_2_ionic_angular__["f" /* NavParams */],
            __WEBPACK_IMPORTED_MODULE_3__services_order_list_order_list_service__["a" /* OrderListService */],
            __WEBPACK_IMPORTED_MODULE_0__services_toast_toast_service__["a" /* ToastService */]])
    ], EditOrderedItemPage);
    return EditOrderedItemPage;
}());

//# sourceMappingURL=edit-ordered-item.js.map

/***/ })

});
//# sourceMappingURL=2.js.map