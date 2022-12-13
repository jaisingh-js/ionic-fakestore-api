import { Injectable } from '@angular/core';
import { Cipher } from 'crypto';
import { ICartProduct } from '../interfaces/cartproduct';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems: ICartProduct[] = [];
  total: number = 0;
  quanity: number = 0;

  constructor() { }

  addItemToCart(item: IProduct) {
    for (let cartItem of this.cartItems) {
      if (cartItem.product.title === item.title) {
        cartItem.quantity += 1;
        this.quanity += 1;
        this.total += item.price;
        console.log(this.cartItems)
        return;
      }
    }

    const cItem: ICartProduct = {
      product: item,
      quantity: 1,
    }
    this.cartItems.push(cItem);
    this.quanity += 1;
    this.total += item.price;
    console.log(this.cartItems);

  }
  
  getCart() {
    return {
      cartItems: this.cartItems,
      quantity: this.quanity,
      total: this.total
    }
  }
}
