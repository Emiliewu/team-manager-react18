const mongoose = require('mongoose');

const PlayerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, '{PATH} is required!'],
    minLength: [2, '{PATH} must be at least {MINLENGTH} characters in length!']
  },
  position: {
    type: String,
    default: "to be confirmed"
  },
  game: {
    type: [Number],
    default: [0, 0, 0]
  }
}, {timestamps: true});

module.exports = mongoose.model('Player', PlayerSchema);