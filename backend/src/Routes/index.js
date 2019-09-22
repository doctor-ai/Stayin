const router = require('express').Router();

const { AuthController, HotelController } = require('Controllers');

// Auth Routes
router.post('/login', AuthController.login);
router.post('/signup', AuthController.signup);

// Hotel Controllers
router.post('/addhotel', HotelController.hotelragistation);

module.exports = router;
