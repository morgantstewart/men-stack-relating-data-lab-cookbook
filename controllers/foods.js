
const express = require('express');
const router = express.Router();

const User = require('../models/user.js');



// controllers/foods.js

router.get('/', async (req, res) => {
  try {
    // Look up the user from req.session
    const currentUser = await User.findById(req.session.user._id);
    res.render('foods/index.ejs', {
      applications: currentUser.applications,
    });
  } catch (error) {
    console.log(error);
    res.redirect('/');
  }
});




//POST for '/foods
router.post('/', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);

        currentUser.applications.push(req.body);

        await currentUser.save();

        res.redirect(`/users/${currentUser.id}/foods`);
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});



router.delete('/:foods', async (req, res) => {
    try {
        const currentUser = await User.findById(req.session.user._id);
        currentUser.applications.id(req.params.foodId).deleteOne();
        await currentUser.save();
        res.redirect(`/users/${currentUser._id}/foods`);
    } catch (error) {
        console.log(error);
        res.redirect('/');
    }
});





router.get('/new', async (req, res) => {
  res.render('foods/new.ejs');
});




  

module.exports = router;
