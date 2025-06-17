// routes ka logic controllers mein liknngge

// data ko save karne se phele validate karenge fir user create karenge ye sab pass hone ke baad
// controllers/user.controllers.js
const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { validationResult } = require('express-validator');
const blackListTokenModel = require('../models/blacklistToken.model.js');   // ✅ Use consistent name
const bcrypt = require('bcrypt');  // ✅ Required for hashing here

//! register routes
module.exports.registerUser = async (req, res, next) => {

    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
    }

    const { fullname, email, password } = req.body;

  const isUserAlreadyExist = await userModel.findOne({email})
  if(isUserAlreadyExist){
    res.status(400).json({ message: 'User already exists' });
    
  }

    const hashedPassword = await userModel.hashPassword(password);

    const user = await userService.createUser({
        firstname: fullname.firstname,
        lastname: fullname.lastname,
        email,
        password: hashedPassword
    });

    const token = user.generateAuthToken();

    res.status(201).json({ token, user });


}


//! login routes
module.exports.loginUser = async (req, res, next) => {
    const errors = validationResult(req);
    if(!errors.isEmpty()){
        return res.status(400).json({ errors: errors.array() });
    }

    const {email , password} = req.body;
    const user = await userModel.findOne({email}).select('+password');

    if(!user){
        return res.status(401).json({ message: 'Invalid email or password' });
    }
 const isMatch = await user.comparePassword(password);

 if(!isMatch){
    return res.status(401).json({ message: 'Invalid email or password' });
 }

 const token = user.generateAuthToken();
res.cookie('token', token )
 res.status(200).json({ token, user });

}

//! get user profile
module.exports.getUserProfile = async (req, res, next) => {
    // ye jo profile routes isse koi unauthenticated user access nahi kar sakta islye phele middlware banenge
     // jo req.user middlware mein set kiya tha wahi as a response chala gaye ga apki profile mein
   
     res.status(200).json(req.user);
}

//! logout routes
module.exports.logoutUser = async (req, res, next) => {
      res.clearCookie('token'); // ye cookie ko clear kar dega
      const token = req.cookies.token || req.headers.authorization.split(' ')[1];
      await blackListTokenModel.create({ token }); // ye token ko blacklist kar dega
      res.status(200).json({ message: 'Logout successful' });
}