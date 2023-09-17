const { DataTypes, Model } = require('sequelize');

module.exports = (sequelize) => {
  class User extends Model {}

  User.init({
    user_id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    prenom: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
    },
    mot_de_passe: {
      type: DataTypes.STRING,
      allowNull: false
    },
    telephone: {
      type: DataTypes.INTEGER,
    },
    carte_identite: {
      type: DataTypes.STRING,
    },
    role: {
      type: DataTypes.STRING,
    },
    date_dernier_login: {
      type: DataTypes.DATE,
    },
  }, {
    sequelize,
    modelName: 'User',
    // Le nom de la table dans votre base de données
    tableName: 'User', 
    // Mettre ce paramètre à `true` parce que dans votre DB les colonnes sont définies en snake_case
    underscored: true,
    // Désactiver le comportement par défaut de Sequelize qui tente de créer des noms de colonnes camelCase
    freezeTableName: true ,
	timestamps: false
  });
  return User;
};

