const express = require('express');
const router = express.Router();

//importing router
const userRoute = require('./routes/user');
// const adminRoute = require('./routes/admin');


router.use('/user', userRoute);
// router.use('/admin' , adminRoute);

module.exports = router;