import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
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

  constructor(private route: ActivatedRoute, private cartService: CartService, private alertController: AlertController) { }

  ngOnInit() {
    this.route.params.subscribe((params) => {
      this.product = data[params['id']];
      // console.log(this.product)
    });
  }

  async addItemToCart(product: IProduct) {
    const alert = await this.alertController.create({
      header: 'Success',
      subHeader: 'Item added',
      message: product.title + ' added to cart',
      buttons: ['ok']
    });

    await alert.present();
    
    this.cartService.addItemToCart(product);
  }

}
