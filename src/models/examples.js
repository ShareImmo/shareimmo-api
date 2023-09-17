const { query } = require('../config/databasejs');

function getExampleById(id, callback) {
	const sql = 'SELECT * FROM examples WHERE id = ?';
	query(sql, [id], callback);
}

module.exports = {getExampleById};