import { Injectable } from '@angular/core';
import { ICart } from '../interfaces/cart';
import { ICartProduct } from '../interfaces/cartproduct';
import { IProduct } from '../interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cartItems!: ICartProduct[];

  constructor() { }

  
}
