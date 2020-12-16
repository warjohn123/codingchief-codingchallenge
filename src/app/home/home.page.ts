import { Component } from '@angular/core';
import { CartItem } from '../shared/models/cart-item.model';
import { ListItem } from '../shared/models/list-item.model';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  listItems: ListItem[] = [
    {
      id: 1,
      image: 'assets/items/headset.jpeg',
      title: 'Headset',
      subTitle: 'Nice one',
      amount: 300
    },
    {
      id: 2,
      image: 'assets/items/laptop.jpg',
      title: 'Laptop',
      subTitle: 'Good one',
      amount: 400
    },
    {
      id: 3,
      image: 'assets/items/table.jpg',
      title: 'Table',
      subTitle: 'Great',
      amount: 500
    },
    {
      id: 4,
      image: 'assets/items/tv.png',
      title: 'Headset',
      subTitle: 'Nice one',
      amount: 600
    }
  ];
  isCartOpened: boolean = false;

  cartItems: CartItem[] = [];

  constructor() {}

  addItem(item) {
    this.cartItems.push({
      listItem: item,
      quantity: 1
    });
  }

  dropItem(event) {
    console.log('event', event);
  }

  dragEnd(event) {
    console.log('Element was dragged', event);
  }
  

  get cartItemsLength() {
    let length = 0;

    this.cartItems.map( item => {
      length += item.quantity;
    })

    return length;
  }

  deleteItem(index) {
    this.cartItems.splice(index, 1);
  }

}
