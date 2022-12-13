import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IProduct } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';
import data from 'src/data';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.scss'],
})
export class ProductDetailComponent implements OnInit {
  product!: IProduct;

  constructor(private route: ActivatedRoute, private cartService: CartService) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.product = data[params['id']];
      // console.log(this.product)
    });
  }

  addItemToCart(product: IProduct) {
    this.cartService.addItemToCart(product);
  }

}
