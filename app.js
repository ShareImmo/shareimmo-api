const express = require('express');
const exampleRoutes = require('./src/routes/examples.js');

const app = express();

// Montage des routeurs : ajouter chaque routeur ici
app.use('/examples', exampleRoutes);

app.listen(4000, () => {
	console.log('Server running on http://localhost:4000/');
  });

