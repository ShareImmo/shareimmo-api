// Exemple d'utilisation d'un middleware qui doit être appelé depuis un controller
function example(req, res, next) {
	// Logique d'authentification
	req.user = {
	  id: 1,
	  name: 'John Doe'
	};
	next();
  }
  
  // Penser à exporter la fonction
  module.exports =  example;