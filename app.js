const express = require('express');
const cors = require("cors");
const mysql = require("mysql");

const exampleRoutes = require('./src/routes/examples.js');

const app = express();
app.use(express.json());
app.use(cors());

const db = mysql.createConnection({
  host: "mysqldb",
  user: "root",
  password: "123456",
  database: "shareimmo",
  port: "3306"
});

app.post('/register', (req, res) => {
  const sql = "INSERT INTO User (nom, prenom, email, mot_de_passe, telephone, carte_identite, role, date_dernier_login) VALUES (?,?,?,?,?,null,'Investisseur',?)";
  db.query(sql, [req.body.nom, req.body.prenom, req.body.email, req.body.password, req.body.telephone, req.body.date], (err,data) => {
    if(err){
      return res.json("Error : "+err);
    } 
    return res.json(data);
  })
})

app.post('/login', (req, res) => {
  const sql = "SELECT * FROM User WHERE email = ? AND mot_de_passe = ?";

  db.query(sql, [req.body.email, req.body.password], (err,data) => {
    if(err) return res.json(err);
    if(data.length > 0){
      return res.json("OK");
    } else {
      return res.json("NOK");
    }
  })
})

// Montage des routeurs : ajouter chaque routeur ici
app.use('/examples', exampleRoutes);

app.listen(4005, () => {
	console.log('Server running on http://localhost:4000/');
  });

