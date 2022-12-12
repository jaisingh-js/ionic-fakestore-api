import { Component } from '@angular/core';
import { IProduct } from '../interfaces/product';
import apiData from '/home/cybertron/Projects/ionic/ionic-fakestore-api/src/data'

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  products?: IProduct[];

  constructor() { }
  
  ngOnInit() {
    this.products = apiData;
  }

}
