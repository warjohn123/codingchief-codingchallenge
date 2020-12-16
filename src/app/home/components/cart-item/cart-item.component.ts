import { Component, Input, Output, EventEmitter } from "@angular/core";

@Component({
    selector: 'app-cart-item',
    templateUrl: './cart-item.component.html',
    styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent {

    @Input() cartItem;
    @Output() deleteItem: EventEmitter<any> = new EventEmitter<any>();
    @Input() index;

    constructor() {

    }

    delete() {
        this.deleteItem.emit(this.index);
    }

}