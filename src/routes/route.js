const express = require('express');
const router = express.Router();

router.get('/test-me', function (req, res) {
    res.send('My third api!')
});

module.exports = router;
// adding this comment for no reason