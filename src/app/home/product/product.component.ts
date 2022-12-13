import { Component, Input, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { IProduct } from 'src/app/interfaces/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {

  @Input() product!: IProduct;
  @Input() index!: number;

  constructor(private navController: NavController, private cartService: CartService) { }

  ngOnInit() {
    // console.log(this.product);
  }

  addToCart(product: IProduct) {
    console.log(product.title + ' added to cart'); this.cartService.addItemToCart(product);
  }

  openItemDetail(index: number) {
    this.navController.navigateForward('/product-detail/' + index);
  }

}
