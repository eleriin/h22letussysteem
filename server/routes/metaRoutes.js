const express = require('express');
const router = express.Router();
const {
  getStatus,
  getQuestion,
  setQuestion,
  setStatus
} = require('../controllers/metaController');

router.get('/status', getStatus);
router.get('/question', getQuestion);
router.post('/question', setQuestion);
router.post('/status', setStatus);

module.exports = router;