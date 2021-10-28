const mongoose = require("mongoose");
const openingTimeSchema = new mongoose.Schema({
  days: {
    type: String,
    required: true,
  },
  opening: String,
  closing: String,
  closed: {
    type: Boolean,
    required: true,
  },
});
const reviewSchema = new mongoose.Schema({
  author: String,
  rating: {
    type: Number,
    required: true,
    min: 0,
    max: 5,
  },
  reviewText: String,
  createdOn: {
    type: Date,
    default: Date.now,
  },
});
const loginSchema = new mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    trim: true,
    lowercase: true,
    unique: true,
    validate: {
      validator: function (v) {
        return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(v);
      },
      message: "Please enter a valid email",
    },
    required: [true, "Email required"],
  },
  password: {
    type: String,
    required: true,
  },
});

const locationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  address: String,
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5,
  },
  facilities: [String],
  cost: String,
  openingTimes: [openingTimeSchema],
  reviews: [reviewSchema],
});

mongoose.model("Location", locationSchema);
