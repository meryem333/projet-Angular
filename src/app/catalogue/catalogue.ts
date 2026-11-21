import { Component, computed, signal } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { ProductCard } from '../product-card/product-card';
import { Product } from '../product.model';

@Component({
  selector: 'app-catalogue',
  imports: [ProductCard, CurrencyPipe],
  templateUrl: './catalogue.html',
  styleUrl: './catalogue.scss'
})
export class Catalogue {
  products = signal<Product[]>([
    { id: 1, name: 'Clavier', price: 49.9, inStock: true },
    { id: 2, name: 'Souris', price: 19.99, inStock: true },
    { id: 3, name: 'Écran', price: 129, inStock: false }
  ]);

  cart = signal<Product[]>([]);
  cartCount = computed(() => this.cart().length);
  total = computed(() => this.cart().reduce((sum, p) => sum + p.price, 0));

  onAddToCart(id: number) {
    const product = this.products().find(p => p.id === id);
    if (product) {
      this.cart.update(items => [...items, product]);
    }
  }

  clearCart() {
    this.cart.set([]);
  }
}