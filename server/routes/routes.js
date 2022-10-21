const router = require('express').Router();

const exerciseController = require('../exercises/controller')

router.get('/exercises', exerciseController.getAll);
// router.put('/exercises', exerciseController.createExercise);

module.exports = router;
