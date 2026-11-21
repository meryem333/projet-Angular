import { Component, input, output } from '@angular/core';
import { CurrencyPipe, UpperCasePipe } from '@angular/common';
import { Product } from '../product.model';

@Component({
  selector: 'app-product-card',
  imports: [CurrencyPipe, UpperCasePipe],
  templateUrl: './product-card.html',
  styleUrl: './product-card.scss'
})
export class ProductCard {
  product = input.required<Product>();
  addToCart = output<number>();

  add() {
    this.addToCart.emit(this.product().id);
  }
}