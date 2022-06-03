const express = require('express');
const router = express.Router();

router.post('/test-post', function (req, res) {
    let arr = [12, "functionup"]
    let ele = req.body.element
    arr.push(ele)

    console.log(req.body);
    res.send( { msg : arr } )
});

module.exports = router;
// adding this comment for no reason