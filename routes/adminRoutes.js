const express = require('express');
const router = express.Router();
const auth = require('../middlewares/authMiddleware');
const role = require('../middlewares/roleMiddleware');
const { getAllUpdates, editUpdate, deleteUpdate } = require('../controllers/adminController');

router.get('/updates', auth, role(['admin']), getAllUpdates);
router.put('/updates/:id', auth, role(['admin']), editUpdate);
router.delete('/updates/:id', auth, role(['admin']), deleteUpdate);

module.exports = router;
