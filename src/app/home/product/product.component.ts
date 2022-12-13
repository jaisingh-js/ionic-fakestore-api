import { Component, Input, OnInit } from '@angular/core';
import { AlertController, NavController } from '@ionic/angular';
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

  constructor(private navController: NavController, private cartService: CartService, private alertController: AlertController) { }

  ngOnInit() {
    // console.log(this.product);
  }

  async addToCart(product: IProduct) {
    const alert = await this.alertController.create({
      header: 'Success',
      subHeader: 'Item added',
      message: product.title + ' added to cart',
      buttons: ['ok']
    })

    await alert.present();
    this.cartService.addItemToCart(product);
  }

  openItemDetail(index: number) {
    this.navController.navigateForward('/product-detail/' + index);
  }

}
