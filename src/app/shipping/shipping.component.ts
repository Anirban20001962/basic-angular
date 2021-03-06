import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-shipping',
  templateUrl: './shipping.component.html',
})
export class ShippingComponent implements OnInit {
  shippingCosts: any;

  constructor(private cartService: CartService) {}

  ngOnInit(): void {
    this.shippingCosts = this.cartService.getShippingPrices();
  }
}
