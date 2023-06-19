const express = require('express');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');

const app = express();
const PORT = 3000;

// Routes
app.get('/api/joke', (req, res) => {
  // Votre logique de récupération d'une blague
 
  res.json({ joke });
});

// Middleware Swagger
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});