import { ToastService } from './../../services/toast/toast.service';
import { Item } from './../../models/item/item.model';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { OrderListService } from "../../services/order-list/order-list.service";


@IonicPage()
@Component({
  selector: 'page-edit-ordered-item',
  templateUrl: 'edit-ordered-item.html',
})
export class EditOrderedItemPage {
  item: Item;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    private order: OrderListService,
    private toast: ToastService,
    ) {}

    ionViewWillLoad() {
      this.item = this.navParams.get('item');
    }
  
    saveItem(item: Item) {
      this.order.editItem(item).then(() => {
        this.toast.show(`${item.name} Saved!`);
        this.navCtrl.setRoot('HomePage');
      });
    }
  
    removeItem(item: Item) {
      this.order.removeItem(item).then(() => {
        this.toast.show(`${item.name} Deleted!`);
        this.navCtrl.setRoot('HomePage');
      });
    }
  }