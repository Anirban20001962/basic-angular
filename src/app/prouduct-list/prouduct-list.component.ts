import { Component, OnInit } from '@angular/core';
import { Product, products as productData } from '../product';

@Component({
  selector: 'app-prouduct-list',
  templateUrl: './prouduct-list.component.html',
})
export class ProuductListComponent implements OnInit {
  products: Product[];

  ngOnInit(): void {
    this.products = productData;
  }

  share(): void {
    alert('The product has been shared');
  }

  onNotify(): void {
    alert('You will be notified when the product goes on sale');
  }
}
