import express from 'express';
import cors from 'cors';
import path from 'path';
import fs from 'fs';

const app = express();

// Autoriser les requêtes CORS depuis le frontend
app.use(cors({ origin: 'http://localhost:3000' }));

// Configurer le serveur pour répondre à la requête des propriétés
app.get('/api/properties', (req, res) => {
  const filePath = path.join(__dirname, 'data', 'properties.json'); // Vérifie que le fichier existe à cet endroit

  // Lire le fichier JSON des propriétés
  fs.readFile(filePath, 'utf8', (err, data) => {
    if (err) {
      console.error("Erreur lors de la lecture du fichier:", err);
      return res.status(500).json({ error: 'Erreur lors de la lecture du fichier' });
    }

    try {
      const properties = JSON.parse(data); // Tente de parser le JSON
      res.json(properties); // Répondre avec les données du fichier JSON
    } catch (parseError) {
      console.error("Erreur de parsing JSON:", parseError);
      return res.status(500).json({ error: 'Erreur de parsing du fichier JSON' });
    }
  });
});

// Démarrer le serveur sur le port 5000
const PORT = 5000;
app.listen(PORT, () => {
  console.log(`Backend en cours d'exécution sur http://localhost:${PORT}`);
});
