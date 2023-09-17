const User = require('../config/database').User;

getUserById = async (req, res) => {
    const user = await User.findByPk(req.params.userId);
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }
    res.json(user.dataValues);
};

updateUser = async (req, res) => {
	const userId = req.params.userId;
	const { email, mot_de_passe, nom, prenom, telephone } = req.body;
	try {
		const user = await User.findByPk(userId);
		if (user) {
		  await user.update({
			email,
			mot_de_passe,
			nom,
			prenom,
			telephone
		  });
		  res.status(200).json({ message: 'Mise à jour réussie', user });
		} else {
		  res.status(404).json({ message: 'Utilisateur non trouvé' });
		}
	  } catch (error) {
		console.error("Une erreur s'est produite :", error);
		res.status(500).json({ message: 'Erreur interne du serveur' });
	  }
	};

module.exports = {getUserById, updateUser};