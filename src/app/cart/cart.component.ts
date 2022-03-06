import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';
import { Product } from '../product';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
})
export class CartComponent implements OnInit {
  items: Product[];

  checkoutForm: any;

  constructor(
    private cartService: CartService,
    private formBuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.items = this.cartService.getItems();
    this.checkoutForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.maxLength(10)]],
      email: ['', [Validators.required, Validators.email]],
    });
  }

  onSubmit(): void {
    this.items = this.cartService.clearCart();
    console.warn('You order has been submitted', this.checkoutForm.value);
    this.checkoutForm.reset();
  }
}
