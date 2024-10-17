const express = require('express');
const userRoute = express.Router();
const userController = require('../controllers/user/AuthController.js')

// const { // import  all controllers here as object}

userRoute.get('/' , userController);

userRoute.post('/signup' , userController)
 
module.exports =  userRoute; 