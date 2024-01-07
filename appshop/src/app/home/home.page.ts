import { Component } from '@angular/core';
import { IonicSlides } from '@ionic/angular';
import { SwiperOptions } from 'swiper/types';

import { NavController } from '@ionic/angular';
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  cartItems: number = 0; // Initialisez la variable


  config: SwiperOptions = {
    slidesPerView: 2.3,
    spaceBetween: 20,
  };
  configPopular: SwiperOptions = {
    slidesPerView: 1.8,
    spaceBetween: 10,
  };

  // Injectez le service de panier dans le constructeur
  constructor(private navCtrl: NavController, private cartService: CartService) {}

  // Méthode pour naviguer vers la page iphone
  goToIphone() {
    this.navCtrl.navigateForward("/iphone");
  }
  goToSamsung() {
    this.navCtrl.navigateForward("/samsung");
  }
  goToTecno() {
    this.navCtrl.navigateForward("/tecno");
  }
  goToCommande() {
    this.navCtrl.navigateForward("/commande");
  }

  // Méthode pour ajouter un produit au panier
  addToCart() {
    // Ajoutez ici la logique pour ajouter le produit au panier
    // ...

    // Appelez la méthode addToCart du service
    this.cartService.addToCart();
  }

  // Méthode pour obtenir la quantité d'articles dans le panier
  getCartItemCount(): number {
    return this.cartService.getCartItemCount();
  }
  goToCartPage() {
    this.navCtrl.navigateForward("/services");
  }
  
}
