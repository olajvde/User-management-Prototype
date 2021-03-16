var express = require('express');
var router = express.Router();
let User = require('../models/user.model')

/* GET users listing. */
router.get('/', function(req, res, next) {
  User.find()
    .then(users => res.json(users))
    .catch(err => res.status(400).json('Error ' + err))
});

router.post('/add', async (req, res) =>{
    const user = new User({
      username: req.body.username
    })

    try{
      const newUser = await user.save()
      res.json('user added')
    }
    catch(e){
      res.status(400).json('Error: '+ e);
      console.log(e)
    }
})

module.exports = router;
