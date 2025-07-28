const mongoose = require('mongoose');



// const foodSchema = new mongoose.Schema({
//   name: {
//     type: String,
//     required: true,
//   }
// })



const foodSchema = new mongoose.Schema({
  Name: {
    type: String,
    required: true,
  }, 

  Instructions: {
    type: String,
    required: true,
  },

  Ingredients: {
    type: String,
  },
  
});


const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  pantry: [foodSchema],
  }
);


const User = mongoose.model('User', userSchema);
module.exports = User;



