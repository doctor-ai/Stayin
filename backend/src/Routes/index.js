const router = require('express').Router();

const { AuthController, HotelController } = require('Controllers');

// Auth Routes
router.post('/login', AuthController.login);
router.post('/signup', AuthController.signup);
router.post('/hotelragistration', HotelController.hotelragistation);

module.exports = router;
