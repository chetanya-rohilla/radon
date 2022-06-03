const express = require('express');
const router = express.Router();

let players = [
    {
        "name" : "manish",
        "dob" : "1/1/1995",
        "gender" : "male",
        "city" : "jalandhar",
        "sports" : [
            "swimming"
        ]
    },
    {
        "name" : "gopal",
        "dob" : "1/09/1995",
        "gender" : "male",
        "city" : "delhi",
        "sports" : [
            "soccer"
        ]
    },
    {
        "name" : "lokesh",
        "dob" : "1/1/1990",
        "gender" : "male",
        "city" : "mumbai",
        "sports" : [
            "cricket"
        ]
    }
]

router.post("/players", function(req, res) {
    let flag = false
    players.forEach(ele => {
        if(req.body.name == ele.name)   flag = true
    })

    if(flag)    res.send("Player exists")
    else    players.push(req.body)

    res.send(  players )
})

module.exports = router;