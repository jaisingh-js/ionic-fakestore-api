import { Component, OnInit } from '@angular/core';
import { ICartProduct } from 'src/app/interfaces/cartproduct';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss'],
})
export class CartComponent implements OnInit {
  cartItems: ICartProduct[] = [];
  quantity: number = 0;
  total: number = 0;

  constructor(private cartService: CartService) { }

  ngOnInit() {
    const data = this.cartService.getCart();
    this.cartItems = data.cartItems;
    this.quantity = data.quantity;
    this.total = data.total;
  }

}
