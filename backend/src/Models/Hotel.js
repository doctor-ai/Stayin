const mongoose = require('mongoose');
const { SchemaOptions } = require('Models');

const Schema = mongoose.Schema;

const hotelSchema = new Schema(
  {
    hotelname: {
      type: mongoose.Schema.Types.String,
      require: true
    },
    address: {
      type: mongoose.Schema.Types.String,
      require: true
    },
    city: {
      type: mongoose.Schema.Types.String,
      require: true,
      unique: true
    },
    pincode: {
      type: mongoose.Schema.Types.Number,
      require: true
    },

    state: {
      type: mongoose.Schema.Types.String,
      require: true
    },
    star: {
      type: mongoose.Schema.Types.Number,
      require: true
    },
    email: {
      type: mongoose.Schema.Types.String,
      require: true,
      unique: true
    },
    password: {
      type: mongoose.Schema.Types.String,
      require: true
    },
    mobile: {
      type: mongoose.Schema.Types.Number,
      require: true
    },
    pancard: {
      type: mongoose.Schema.Types.String,
      require: true,
      unique: true
    },
    description: {
      type: mongoose.Schema.Types.String,
      require: true
    },

    image: {
      type: mongoose.Schema.Types.String,
      require: true
    }
  },
  SchemaOptions
);

hotelSchema.index({ email: 1, sparse: true }, { background: true });

module.exports = mongoose.model('Hotel', hotelSchema);
