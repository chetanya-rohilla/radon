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


// Pritesh Sir

router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    let sum = 0
    let n = arr[arr.length-1]
    arr.forEach(ele => sum = sum + ele)
    let missingNumber = n*(n + 1)/2 - sum

    ///LOGIC WILL GO HERE 
    res.send(  { Number: missingNumber  }  );
});

router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
    let sum = 0
    let n1 = arr[0]
    let n2 = arr[arr.length-1]
    arr.forEach(ele => sum = sum + ele)
    let missingNumber = (arr.length+1)*(n1 + n2)/2 -sum

    ///LOGIC WILL GO HERE 

    res.send(  { Number: missingNumber  }  );
});

module.exports = router;