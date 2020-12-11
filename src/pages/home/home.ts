import { Item } from '../../models/item/item.model';
import { Component } from '@angular/core';
import { NavController, IonicPage } from 'ionic-angular';

import { OrderListService } from '../../services/order-list/order-list.service';
import { Observable } from 'rxjs/Observable';
import { map } from 'rxjs/operators';


@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  orderList$: Observable<Item[]>;

  constructor(
    public navCtrl: NavController,
    private order: OrderListService,
  ) {
    this.orderList$ = this.order
      .getOrderList()
      .snapshotChanges().pipe(
        map(changes =>
          changes.map(c => ({ key: c.payload.key, ...c.payload.val() }))
       )
     );
   }
 }