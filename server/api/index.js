const router = require('express').Router();

router.use('/users', require('./users'));
router.use('/puppies', require('./puppies'));
router.use('/kittens', require('./kittens'));

//Sloths?!?! Get outta town!
router.use((req, res, next) => {
  const err = new Error('Not Found.');
  err.status = 404;
  next(err);
});

module.exports = router;
