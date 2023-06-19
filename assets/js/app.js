const express = require('express');
const swaggerUi = require('swagger-ui-express');
const specs = require('./swagger');

const app = express();
const PORT = 3000;


app.get('/api/joke', (req, res) => {
 
  res.json({ joke });
});

app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(specs));

app.listen(PORT, () => {
  console.log(`Serveur démarré sur le port ${PORT}`);
});