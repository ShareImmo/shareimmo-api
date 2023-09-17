const express = require('express');
const { getUserById, updateUser } = require('../controllers/user.js');

const router = express.Router();

router.get('/:userId', getUserById);
router.put('/:userId', updateUser);

module.exports =  router;