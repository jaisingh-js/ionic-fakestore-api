import { Component } from '@angular/core';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  value: string = 'products';

  constructor(private navController: NavController) { }

  ngOnInit() {
    if (this.value === 'products') {
      this.navController.navigateForward('/');
    }
    else {
      this.navController.navigateForward('/cart');

    }
  }
  
  changeTab(ev: any) {
    if (ev.detail.value === 'products') {
    this.navController.navigateForward('/');
      this.value = 'products';
    }
    else {
      this.navController.navigateForward('/' + ev.detail.value);
      this.value = 'cart'
    }
  }
}
