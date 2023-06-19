const express = require('express');
const app = express();
const specs = require('./swagger');

const Blagues = require('./data.js');

app.get('/', (req, res) => {
  res.send('Bienvenue sur l\'API Carambar !');
});

// Route pour afficher toutes les blagues
app.get('/Blagues', (req, res) => {
  res.json(Blagues);
});

// Route pour afficher une blague par ID
app.get('/Blagues/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const blague = Blagues.find(b => b.id === id);

  if (blague) {
    res.json(blague);
  } else {
    res.status(404).json({ message: 'Blague non trouvée' });
  }
});

// Route pour afficher une blague aléatoire
app.get('/Blagues/random', (req, res) => {
  const randomIndex = Math.floor(Math.random() * Blagues.length);
  const randomJoke = Blagues[randomIndex];
  res.json(randomJoke);
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));
app.listen(3000, () => {
  console.log('Serveur en cours d\'écoute sur le port 3000');
});