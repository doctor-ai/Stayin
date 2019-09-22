const { Hotel } = require('Models');
const config = require('config');
const hotelragistation = async (req, res, next) => {
  const {
    hotelname,
    address,
    city,
    pincode,
    state,
    mobile,
    star,
    email,
    password,
    pancard,
    description,
    image
  } = req.body;
  const message = [];
  if (!hotelname) {
    message.push('hotelname is required');
  }
  if (!address) {
    message.push('address is required');
  }
  if (!city) {
    message.push('city is required');
  }
  if (!pincode) {
    message.push('pincode is required');
  }
  if (!mobile) {
    message.push('mobile is required');
  }
  if (!state) {
    message.push('state is required');
  }
  if (!star) {
    message.push('star is required');
  }
  if (!email) {
    message.push('email is required');
  }
  if (!password) {
    message.push('Password is required');
  }
  if (!pancard) {
    message.push('pancard is required');
  }
  if (!description) {
    message.push('description is required');
  }
  if (!image) {
    message.push('upload your hotel images');
  }

  if (
    !email ||
    !password ||
    !hotelname ||
    !address ||
    !city ||
    !pincode ||
    !mobile ||
    !state ||
    !star ||
    !email ||
    !password ||
    !pancard ||
    !description ||
    !image
  ) {
    res.json({
      code: 401,
      data: {
        message
      },
      success: false
    });
    return;
  }
  const hotel = await Hotel.findOne({ email, password, pancard, mobile });
  if (hotel) {
    res.json({
      code: 401,
      data: {
        message: ['hotel is already exists']
      },
      success: false
    });
    return;
  }
  const hotel = await new Hotel({
    hotelname,
    address,
    city,
    pincode,
    mobile,
    state,
    star,
    email,
    password,
    pancard,
    description,
    image
  }).save();
  res.status(200);
  res.json({
    code: 200,
    data: {
      hotel
    },
    success: true
  });
  return;
};

module.exports = {
  hotelragistation
};
