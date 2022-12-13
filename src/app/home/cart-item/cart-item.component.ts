import { Component, Input, OnInit } from '@angular/core';
import { ICartProduct } from 'src/app/interfaces/cartproduct';


@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() item?: ICartProduct;

  constructor() { }

  ngOnInit() {}

}
