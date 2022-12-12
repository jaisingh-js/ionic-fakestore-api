import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from 'src/app/interfaces/product';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input() product!: IProduct;
  @Input() index!: number;

  constructor() { }

  ngOnInit() {
    // console.log(this.product);
  }

  addToCart(product: IProduct) {
    console.log(product.title + ' added to cart');
  }

}
