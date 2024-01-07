// cart.service.ts

import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  private cartItemsSubject = new BehaviorSubject<number>(0);
  cartItems$ = this.cartItemsSubject.asObservable();

  addToCart() {
    const currentItems = this.cartItemsSubject.value;
    this.cartItemsSubject.next(currentItems + 1);

    // Mettez à jour la valeur dans le service lorsque l'utilisateur ajoute un article au panier
    this.getCartItemCount();
  }

  getCartItemCount(): number {
    return this.cartItemsSubject.value;
  }
}
