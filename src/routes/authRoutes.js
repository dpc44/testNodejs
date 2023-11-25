// authentication
// authoriztion

import express from 'express';
import { login, signUp,loginFacebook } from '../controllers/authController.js';

const authRoute = express.Router();

//login
authRoute.post("/login", login);
//signup
authRoute.post("/signup", signUp);

// login facebook
authRoute.post("/login-facebook",loginFacebook)

export default authRoute;