import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { Product } from '../product';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
})
export class ProductAlertsComponent implements OnInit {
  @Input() product!: Product | undefined;
  @Output() notify = new EventEmitter();

  ngOnInit(): void {}
}
