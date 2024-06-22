const express = require('express');
const userController = require('../controllers/user');
const loginController  = require('../controllers/login')
const singUpController  = require('../controllers/singup')

const router = express.Router();

router.get('/loginUser', userController.loginUser); // login routes

router.post('/login', loginController);


router.get('/singupUser', userController.singupUser); // register routes

router.post('/singup', singUpController);


router.get('/appointment', userController.appointment); // logout route

module.exports = router