const router = require('express').Router();
let User = require('../models/user.model');

//route to get users from database
router.route('/').get((req,res) => {
    User.find()
        .then(user => res.json(user))
        .catch(err => res.status(400).json('Error: ' + err));
});

//route to add new users to database
router.route('/add').post((req, res) => {
    const username = req.body.username;
    
    const newUser = new User({username});

    newUser.save()
        .then(() => res.json('User added!'))
        .catch( err => res.status(400).json('Error: ' + err));
});

//export route
module.exports = router;