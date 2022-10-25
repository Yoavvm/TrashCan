const router = require('express').Router();

const exerciseController = require('../exercises/controller')
const userController = require('../users/controller');

router.get('/exercises', exerciseController.getAll);
// router.put('/exercises', exerciseController.createExercise);


router.post('/users', userController.login);


module.exports = router;
