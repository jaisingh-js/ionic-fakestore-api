import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ICartProduct } from 'src/app/interfaces/cartproduct';
import { CartService } from 'src/app/services/cart.service';



@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss'],
})
export class CartItemComponent implements OnInit {
  @Input() item?: ICartProduct;
  @Output() refreshPage = new EventEmitter();

  constructor(private cartService: CartService, private alertController: AlertController) { }

  ngOnInit() {}


  async removeFromCart(item: ICartProduct | undefined) {
    if (item) {
      this.cartService.removeFromCart(item);
      this.refreshPage.emit();
      const alert = await this.alertController.create({
        header: 'Success',
        subHeader: 'Item removed',
        message: item.product.title + ' removed from cart',
        buttons: ['ok']
      });
  
      await alert.present();
    }
    
  }
}
