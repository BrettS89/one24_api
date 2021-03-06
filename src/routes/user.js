const router = require('express').Router();
const Controllers = require('../controllers/user');

router.post('/register', Controllers.register);
router.post('/login', Controllers.login);
router.get('/isloggedin', Controllers.isLoggedIn);
router.post('/follow', Controllers.follow);
router.delete('/unfollow', Controllers.unfollow);
router.patch('/addprofilephoto', Controllers.addProfilePhoto);
router.get('/getuserdata', Controllers.getUserData);
router.patch('/addusername', Controllers.addUsername);

module.exports = router;
