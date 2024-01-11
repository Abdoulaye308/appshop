const express = require('express');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 3000;

// Configuration de la base de données
const db = mysql.createConnection({
  host: 'localhost',
  user: 'laye',
  password: 'passer',
  database: 'appshop'
});

// Connexion à la base de données
db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
  } else {
    console.log('Connecté à la base de données MySQL');
  }
});

// Middleware
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Route d'inscription
app.post('/register', async (req, res) => {
  const { username, password } = req.body;

  // Hash du mot de passe
  const hashedPassword = await bcrypt.hash(password, 10);

  const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
 
  db.query(query, [username, hashedPassword], (err, results) => {
    if (err) {
      console.error('Erreur lors de l\'inscription :', err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }
    return res.json({ message: 'Inscription réussie' });
  });
});

// Route de commande
app.post('/commande', (req, res) => {
  const { prenom, nom, number, adresse, produits } = req.body;
  const query = 'INSERT INTO commande (prenom, nom, number, adresse, produits) VALUES (?, ?, ?, ?, ?)';

  db.query(query, [prenom, nom, number, adresse, produits], (err, results) => {
    if (err) {
      console.error('Erreur lors de l\'ajout de la commande :', err);
      return res.status(500).json({ message: 'Erreur serveur' });
    }
    return res.json({ message: 'Commande ajoutée avec succès' });
  });
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});
