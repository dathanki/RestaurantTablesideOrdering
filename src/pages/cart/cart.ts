import { ToastService } from './../../services/toast/toast.service';
import { Item } from './../../models/item/item.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { OrderListService } from '../../services/order-list/order-list.service';

@IonicPage()

@Component({
  selector: 'page-cart',
  templateUrl: 'cart.html',
  })
  export class CartPage {
    item: Item = {
      name: '',
      quantity: undefined,
      mods: '',
      cut: false,
    };

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private order: OrderListService,
    private toast: ToastService,
  ) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad CartPage');
  }

  addItem(item: Item) {
    this.order.addItem(item).then(ref => {
      this.toast.show(`${item.name} added!`);
      this.navCtrl.setRoot('HomePage', { key: ref.key });
    });
  }
}