const express = require('express');
const { getAllExamples, getExampleById, createExample, updateExample, deleteExample } = require('../controllers/examples.js');

const router = express.Router();

// Exemple de route sans argument
router.get('/', getAllExamples);
router.post('/', createExample);

// Exemple de route avec argument
router.get('/:exampleId', getExampleById);
router.patch('/:exampleId', updateExample);
router.delete('/:exampleId', deleteExample);

module.exports =  router;