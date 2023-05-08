const express = require('express');
const customerRouter = express.Router(); 

const {verify,userProfile1,login,userUpdate,deleteUserById,socialLogin} = require('../controller/authEmployee&Owner');

//const {authentication,authorisationbyBId} = require('../middelware/middleware')

// //============================================================

// // USER
customerRouter.post('/userProfile1', userProfile1);
customerRouter.post('/verify', verify)
customerRouter.post('/login', login);
// customerRouter.put('/userUpdate', authentication,userUpdate)
// customerRouter.delete('/deleteUserById/:id', deleteUserById)
// customerRouter.post('/socialLogin', socialLogin)


 module.exports = customerRouter;