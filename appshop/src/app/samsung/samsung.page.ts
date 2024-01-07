import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-samsung',
  templateUrl: './samsung.page.html',
  styleUrls: ['./samsung.page.scss'],
})
export class SamsungPage implements OnInit {
  configPopular: SwiperOptions = {
    slidesPerView: 1.8,
    spaceBetween: 10
    
  };

  voirTout() {
    console.log('Méthode voirTout appelée !');
    // Ajoutez ici la logique de navigation ou toute autre action souhaitée
  }
  

  constructor(private navCtrl: NavController) { }
  goToCommande() {
    this.navCtrl.navigateForward("/commande");
  }

  
  ngOnInit() {
  }

  }

