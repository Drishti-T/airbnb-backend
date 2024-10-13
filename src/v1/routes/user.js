const express = require('express');
const userRoute = express.Router();

// const { // import  all controllers here as object}

userRoute.get('/' , userController);
userRoute.get('/:id' , userGetByIdController);
userRoute.post('/' , addUserController);
userRoute.put('/:id' , updateUserController);
userRoute.delete('/:id' , deleteUserController); 

module.exports =  userRoute;