const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  credits: {
    type: Number,
    min: 0,
    required: true
  }
})

const User = mongoose.model('User', userSchema);

const usertemp1 = new User({
  name: 'Tyson',
  email: 'tyson1234@gmail.com',
  credits: 2000,
});
//usertemp1.save();

const usertemp2 = new User({
  name: 'RoyBurns',
  email: 'Roy25@gmail.com',
  credits: 2000,
});
//usertemp2.save();

const usertemp3 = new User({
  name: 'Mike',
  email: 'Mike2000@gmail.com',
  credits: 3000,
});
//usertemp3.save();

const usertemp4 = new User({
  name: 'Lucy',
  email: 'lucy0912@gmail.com',
  credits: 4000,
});
//usertemp4.save();

const usertemp5 = new User({
  name: 'Jonny',
  email: 'jonny2350@gmail.com',
  credits: 5000,
});
//usertemp5.save();

const usertemp6 = new User({
  name: 'Robert',
  email: 'robert1@gmail.com',
  credits: 6000,
});
//usertemp6.save();

const usertemp7 = new User({
  name: 'James',
  email: 'james007@gmail.com',
  credits: 7000,
});
//usertemp7.save();

const usertemp8 = new User({
  name: 'Paul',
  email: 'Paul09@gmail.com',
  credits: 7000,
});
//usertemp8.save();

module.exports = User;
