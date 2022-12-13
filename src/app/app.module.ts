import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { ServiceWorkerModule } from '@angular/service-worker';
import { CartService } from './services/cart.service';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, 
  // Register the ServiceWorker as soon as the application is stable
  // or after 30 seconds (whichever comes first).
  
],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, CartService],
  bootstrap: [AppComponent],
})
export class AppModule {}
