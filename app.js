const express = require('express');
const sequelize = require('./src/config/database'); 
const exampleRoutes = require('./src/routes/examples');
const userRoutes = require('./src/routes/user'); 

const app = express();

app.use(express.json());  // Pour analyser le corps des requêtes JSON

const cors = require('cors');
app.use(cors());

// Montage des routeurs : ajouter chaque routeur ici
app.use('/examples', exampleRoutes);
app.use('/users', userRoutes); 

// Connect to DB and start the server
    app.listen(4000, () => {
        console.log('Server running on http://localhost:4000/');
    });
