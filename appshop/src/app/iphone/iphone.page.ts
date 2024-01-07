import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { CartService } from '../services/cart.service';
import { NavController } from '@ionic/angular';



@Component({
  selector: 'app-iphone',
  templateUrl: './iphone.page.html',
  styleUrls: ['./iphone.page.scss'],
})
export class IphonePage implements OnInit {
  configPopular: SwiperOptions = {
    slidesPerView: 1.8,
    spaceBetween: 10
    
  };
  voirTout() {
    console.log('Méthode voirTout appelée !');
    // Ajoutez ici la logique de navigation ou toute autre action souhaitée
  }
  constructor(private navCtrl: NavController, private cartService: CartService) { }
  goToCommande() {
    this.navCtrl.navigateForward("/commande");
  }

  addToCart() {
    // Ajoutez ici la logique pour ajouter le produit au panier
    // ...

    // Appelez la méthode addToCart du service
    this.cartService.addToCart();
  }

  ngOnInit() {
  }

  }
