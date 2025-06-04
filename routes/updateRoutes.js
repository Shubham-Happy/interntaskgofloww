const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const { createUpdate, getMyUpdates } = require('../controllers/updateController');

router.post('/', auth, createUpdate);
router.get('/', auth, getMyUpdates);

module.exports = router;
