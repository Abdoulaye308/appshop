// auth.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://localhost:3000'; // Remplacez par l'URL de votre backend

  constructor(private http: HttpClient) {}

  register(username: string, password: string) {
    const url = `${this.baseUrl}/register`;
    return this.http.post(url, { username, password });
  }

  login(username: string, password: string) {
    const url = `${this.baseUrl}/login`;
    return this.http.post(url, { username, password });
  }
  commande(prenom: string, nom: string, numero: string, adresse: string, produits: string) {
    const url = `${this.baseUrl}/commande`;
    return this.http.post(url, { prenom, nom, number: numero, adresse, produits });
  }

 EffectuerCommande(prenom: string, nom: string, numero: string, adresse: string, produits: string) {
    const url = 'URL_DE_VOTRE_API/commande'; // Remplacez par l'URL réelle de votre API
    const body = { prenom, nom, number: numero, adresse, produits };
    return this.http.post(url, body);
  }

}

