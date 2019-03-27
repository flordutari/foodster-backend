const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ObjectId = Schema.Types.ObjectId;

const userSchema = new Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  imageUrl: {
    type: String
  },
  status: {
    type: Number
  },
  saldo: {
    type: Number
  },
  following: [{
    type: ObjectId,
    ref: 'User'
  }],
  favorites: [{
    type: ObjectId,
    ref: 'Tupper'
  }],
  tuppersHistory: [{
    type: ObjectId,
    ref: 'Tupper'
  }],
  location: {
    type: {
      type: String,
      default: 'Point'
    },
    coordinates: [Number]
  }
}, {
  timestamps: {
    createdAt: 'created_at',
    updatedAt: 'updated_at'
  },
});

const User = mongoose.model('User', userSchema);

module.exports = User;
