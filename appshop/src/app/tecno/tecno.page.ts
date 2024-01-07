import { Component, OnInit } from '@angular/core';
import { SwiperOptions } from 'swiper/types';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-tecno',
  templateUrl: './tecno.page.html',
  styleUrls: ['./tecno.page.scss'],
})
export class TecnoPage implements OnInit {
  configPopular: SwiperOptions = {
    slidesPerView: 1.8,
    spaceBetween: 10
    
  };

  constructor(private navCtrl: NavController) { }
  goToCommande() {
    this.navCtrl.navigateForward("/commande");
  }

  ngOnInit() {
  }

}
