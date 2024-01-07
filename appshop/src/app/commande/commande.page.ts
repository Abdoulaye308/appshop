import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service'; // Assurez-vous de spécifier le bon chemin
import { NavController } from '@ionic/angular';
import { ToastController } from '@ionic/angular';

@Component({
  selector: 'app-commande',
  templateUrl: './commande.page.html',
  styleUrls: ['./commande.page.scss'],
})
export class CommandePage implements OnInit {
  // Ajoutez d'autres propriétés si nécessaire
  prenom: string = ''; // Ajout de l'initialisation ici
  nom: string = ''; // Ajout de l'initialisation ici
  produits: string = ''; // Ajout de l'initialisation ici
  number: string = ''; // Ajout de l'initialisation ici
  adresse: string = ''; // Ajout de l'initialisation ici

  constructor(private navCtrl: NavController, private authService: AuthService, private toastController: ToastController) { }

  commande() {
    if (!this.prenom || !this.nom || !this.produits || !this.number || !this.adresse) {
      console.log('Veuillez remplir tous les champs');
      return;
    }

    this.authService.commande(this.prenom, this.nom, this.number, this.adresse, this.produits)
      .subscribe(
        (response) => {
          console.log('Commande réussie', response);
          // Vous pouvez effectuer d'autres actions ici, comme la navigation vers une autre page
           // Redirigez vers la page de connexion après l'enregistrement
        this.navCtrl.navigateForward('/home');
        },
        (error) => {
          console.error('Erreur lors de la commande', error);
          // Vous pouvez traiter l'erreur ici, par exemple afficher un message à l'utilisateur
        }
      );
  }
   
  
  
  

  ngOnInit() {
  }

}