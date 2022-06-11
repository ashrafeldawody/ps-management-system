const mongoose = require('mongoose');

const UserModel = mongoose.model('User',
  mongoose.Schema(
    {
      name: {type: String, required: true},
      email: {type: String, required: true, unique: true},
      phone: {type: String, required: true, unique: true},
      password: {type: String, required: true},
      isAdmin: {type: Boolean, default: false},
    },
    {timestamps: true}
  )
);

module.exports = UserModel;
