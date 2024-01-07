import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { AuthService } from '../auth.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-inscription',
  templateUrl: './inscription.page.html',
  styleUrls: ['./inscription.page.scss'],
})
export class InscriptionPage implements OnInit {
  // Utilisez un formulaire réactif pour gérer les champs
  registerForm: FormGroup;

  constructor(private navCtrl: NavController, private authService: AuthService, private formBuilder: FormBuilder) {
    // Initialisez le formulaire réactif avec des validateurs si nécessaire
    this.registerForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', [Validators.required, Validators.minLength(6)]],
    });
  }

  goToLogin() {
    this.navCtrl.navigateForward('/login');
  }

  register() {
    // Assurez-vous que le formulaire est valide
    if (this.registerForm.valid) {
      const { username, password } = this.registerForm.value;

      // Appel au service d'authentification
      this.authService.register(username, password)
        .subscribe(response => {
          console.log(response); // Gérez la réponse du serveur ici
          // Redirigez vers la page de connexion si l'inscription réussit
          this.navCtrl.navigateForward('/login');
        }, error => {
          console.error(error); // Gérez les erreurs ici
          // Affichez un message d'erreur à l'utilisateur ou effectuez d'autres actions nécessaires
        });
    }
  }

  ngOnInit() {
  }
}
