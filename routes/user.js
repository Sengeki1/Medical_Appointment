const express = require('express');
const userController = require('../controllers/user');
const loginController = require('../controllers/login')
const singUpController = require('../controllers/singup')
const appointmmentController = require('../controllers/appointment')

const cors = require("cors")
const auth = require('../middleware/auth');
const clinicAuth = require('../middleware/clinicAuth');

const router = express.Router();

router.get('/loginUser', userController.loginUser); // login routes
router.post('/login', loginController);


router.get('/singupUser', userController.singupUser); // register routes
router.post('/singup', singUpController);

router.get('/appointment', cors(), auth, userController.appointment);
router.post('/appointment', cors(), auth, appointmmentController);

router.get('/success', cors(), auth, clinicAuth, userController.success);

module.exports = router