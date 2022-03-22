import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { TopbarComponent } from './topbar/topbar.component';
import { RouterModule } from '@angular/router';
import { ProuductListComponent } from './prouduct-list/prouduct-list.component';
import { ProductAlertsComponent } from './product-alerts/product-alerts.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { CartComponent } from './cart/cart.component';
import { ShippingComponent } from './shipping/shipping.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { YourGuardGuard } from './your-guard.guard';

@NgModule({
  declarations: [
    AppComponent,
    TopbarComponent,
    ProuductListComponent,
    ProductAlertsComponent,
    ProductDetailsComponent,
    CartComponent,
    ShippingComponent,
    LoginComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: '',
        component: ProuductListComponent,
        canActivate: [YourGuardGuard],
      },
      {
        path: 'products/:productId',
        component: ProductDetailsComponent,
        canActivate: [YourGuardGuard],
      },
      { path: 'cart', component: CartComponent, canActivate: [YourGuardGuard] },
      {
        path: 'shipping',
        component: ShippingComponent,
        canActivate: [YourGuardGuard],
      },
      { path: 'login', component: LoginComponent },
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
