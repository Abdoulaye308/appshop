require('dotenv').config();



 const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv');

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE
});

db.connect((err) => {
  if (err) {
    console.error('Erreur de connexion à la base de données :', err);
  } else {
    console.log('Connecté à la base de données MySQL');
  }
});

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Routes
app.post('/register', async (req, res) => {
  try {
    const { username, password } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const query = 'INSERT INTO users (username, password) VALUES (?, ?)';
    db.query(query, [username, hashedPassword], (err, results) => {
      if (err) {
        console.error('Erreur lors de l\'inscription :', err);
        return res.status(500).json({ message: 'Erreur serveur' });
      }
      return res.json({ message: 'Inscription réussie' });
    });
  } catch (error) {
    console.error('Erreur lors de l\'inscription :', error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
});

app.post('/commande', (req, res) => {
  try {
    const { prenom, nom, number, adresse, produits } = req.body;
    const query = 'INSERT INTO commande (prenom, nom, number, adresse, produits) VALUES (?, ?, ?, ?, ?)';

    db.query(query, [prenom, nom, number, adresse, produits], (err, results) => {
      if (err) {
        console.error('Erreur lors de l\'ajout de la commande :', err);
        return res.status(500).json({ message: 'Erreur serveur' });
      }
      return res.json({ message: 'Commande ajoutée avec succès' });
    });
  } catch (error) {
    console.error('Erreur lors de l\'ajout de la commande :', error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
});

app.post('/login', async (req, res) => {
  try {
    const { username, password } = req.body;
    const query = 'SELECT * FROM users WHERE username = ?';
    const results = await queryDatabase(query, [username]);
    console.log('Requête de connexion reçue :', req.body);

    if (results.length > 0) {
      const user = results[0];
      const isPasswordValid = await bcrypt.compare(password, user.password);

      if (isPasswordValid) {
        return res.json({ message: 'Authentification réussie' });
      } else {
        return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
      }
    } else {
      return res.status(401).json({ message: 'Nom d\'utilisateur ou mot de passe incorrect' });
    }
  } catch (error) {
    console.error('Erreur lors de la requête SQL :', error);
    return res.status(500).json({ message: 'Erreur serveur' });
  }
});

app.listen(port, () => {
  console.log(`Serveur en écoute sur le port ${port}`);
});




async function queryDatabase(query, values) {
  return new Promise((resolve, reject) => {
    db.query(query, values, (err, results) => {
      if (err) {
        reject(err);
      } else {
        resolve(results);
      }
    });
  });
}
