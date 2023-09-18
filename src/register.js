const express = require('express');
const bodyParser = require('body-parser');
const mysql = require('mysql');

const app = express();
const port = process.env.PORT || 4000; // Choose a port for your server

app.use(bodyParser.json());

const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '123456',
  database: 'shareimmo',
});

db.connect((err) => {
  if (err) {
    console.error('Database connection error:', err);
    return;
  }
  console.log('Connected to the database');
});

app.post('/register', (req, res) => {
  const { nom, prenom, telephone, email, password } = req.body;

  // Perform validation and insert user data into the database here
  if (!nom || !prenom || !telephone || !email || !password) {
    return res.status(400).json({ message: 'All fields are required' });
  }

  const insertUserQuery = 'INSERT INTO User (unser_id, nom, prenom, email, mot_de_passe, telephone, carte_identite, role, date_dernier_login) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)';
  const values = [1,nom, prenom, email, password, telephone, null, 'test', null];

  db.query(insertUserQuery, values, (err, result) => {
    if (err) {
        console.error('Database error:', err);
        return res.status(500).json({ message: 'Registration failed' });
    } else {
        console.log('User registered successfully');
        return res.status(200).json({ message: 'Registration successful' });
    }
  });
  // Send a response back to the client
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
