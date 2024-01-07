// login.page.ts

import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service'; 
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  // Déclarez votre formulaire réactif
  loginForm!: FormGroup;

  constructor(
    private navCtrl: NavController,
    private authService: AuthService,
    private formBuilder: FormBuilder  // Injectez le FormBuilder
  ) { }

  ngOnInit() {
    // Initialisez votre formulaire réactif avec des validations
    this.loginForm = this.formBuilder.group({
      username: ['', [Validators.required]],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  goToInscription() {
    this.navCtrl.navigateForward("/inscription");
  }

  login() {
    // Assurez-vous que le formulaire est valide avant de procéder à l'authentification
    if (this.loginForm.valid) {
      const { username, password } = this.loginForm.value;

      // Appel au service d'authentification
      this.authService.login(username, password)
        .subscribe(response => {
          console.log(response); // Gérez la réponse du serveur ici
          // Redirigez vers la page home si l'authentification réussit
          this.navCtrl.navigateForward('/home');
        }, error => {
          console.error(error); // Gérez les erreurs ici
          // Affichez un message d'erreur à l'utilisateur ou effectuez d'autres actions nécessaires
        });
    } else {
      console.log('Veuillez remplir correctement tous les champs du formulaire.');
    }
  }

  register() {
    // Ajoutez ici le code pour gérer l'inscription
    console.log('Méthode register appelée');
  }
}
