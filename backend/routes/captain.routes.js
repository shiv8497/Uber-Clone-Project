const express = require('express');
const router = express.Router();
const {body} = require('express-validator');
const captainControllers = require('../controllers/captain.controller.js');
const authmiddleware = require('../middlewares/auth.middleware.js');
router.post('/register' , [
    body('fullname.firstname').isLength({min: 3}).withMessage('First name must be at least 3 characters long'),
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long'),
    body('vehicle.color').isLength({min: 3}).withMessage('Color must be at least 3 characters long'),
    body('vehicle.plate').isLength({min: 3}).withMessage('Plate must be at least 3 characters long'),   
    body('vehicle.capacity').isNumeric().withMessage('Capacity must be a number 1'),
    body('vehicle.vehicleType').isIn(['car', 'motorcycle', 'auto']).withMessage('Vehicle type must be car, motorcycle, or auto')
    
    
],
              captainControllers.registerCaptain
)

//! caption login route

router.post('/login' , [
    body('email').isEmail().withMessage('Invalid email'),
    body('password').isLength({min: 6}).withMessage('Password must be at least 6 characters long')
],
              captainControllers.loginCaptain
)


router.get('/profile', authmiddleware.authCaptain, captainControllers.getCaptainProfile);

router.get('/logout', authmiddleware.authCaptain , captainControllers.logoutCaptain);

module.exports = router;