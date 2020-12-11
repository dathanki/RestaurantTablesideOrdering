import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

import { Item } from './../../models/item/item.model';

@Injectable()
export class OrderListService {
  private orderListRef = this.db.list<Item>('order-list');

  constructor(private db: AngularFireDatabase) {}

  getOrderList() {
    return this.orderListRef;
  }

  addItem(item: Item) {
    return this.orderListRef.push(item);
  }

  editItem(item: Item) {
    return this.orderListRef.update(item.key, item);
  }

  removeItem(item: Item) {
    return this.orderListRef.remove(item.key);
  }
}
