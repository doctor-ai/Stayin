const router = require('express').Router();

const { AuthController, HotelController } = require('Controllers');

// Auth Routes
router.post('/login', AuthController.login);
router.post('/signup', AuthController.signup);

// Hotel Controllers
router.post('/addhotel', HotelController.addHotel);
router.get('/hotels', HotelController.getHotels);
router.get('/hotels/:_id', HotelController.getHotelsById);

module.exports = router;
