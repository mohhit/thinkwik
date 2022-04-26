const express = require('express');
const router = express.Router();

const movies_controller = require('../controllers/backend/MovieController');
router.get('/find_by_title', movies_controller.FindByTitle);
router.post('/Update', movies_controller.Update);


module.exports = router;