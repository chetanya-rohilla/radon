const express = require('express');
const underscore = require('underscore')
const lodash = require('lodash')

const router = express.Router();

router.get('/hello', function (req, res) {
    let months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
    console.log(lodash.chunk(months, 4))

    let odd = [1, 3, 5, 7, 9, 11, 13, 15, 17, 19]
    console.log(lodash.tail(odd))

    let arr1 = [1,5,8]
    let arr2 = [4,2,7, 13]
    let arr3 = [9,14,11]
    let arr4 = [6,3,10]
    let arr5 = [12,15,8,2]
    console.log(lodash.union(arr1,arr2,arr3,arr4,arr5));

    let mov = [['horror','The Shining'],
    ['drama','Titanic'],
    ['thriller','Shutter Island'],
    ['fantasy','Pans Labyrinth']]
    console.log(lodash.fromPairs(mov));
    
    res.send("Success")
});

router.get('/movies', function (req, res) {
    let mov = ["Your Name", "A Silent Voice", "Weathering with You", "Spirited Away", "Princess Mononoke", "Wolf Children"]
    res.send(mov)
});

router.get('/movies/:indexNumber', function (req, res) {
    let mov = ["Your Name", "A Silent Voice", "Weathering with You", "Spirited Away", "Princess Mononoke", "Wolf Children"]
    res.send(mov[req.params.indexNumber] || "Invalid Index")
});

router.get('/films', function (req, res) {
    let mov = [
        {
            "id": 1,
            "name": "Your Name"
        }, {
            "id": 2,
            "name": "A Silent Voice"
        }, {
            "id": 3,
            "name":  "Weathering with You"
        }, {
            "id": 4,
            "name": "Spirited Away"
        }, {
            "id": 5,
            "name": "Princess Mononoke"
        }, {
            "id": 6,
            "name":  "Wolf Children"
        }]
       
    res.send(mov)
});

router.get('/films/:filmid', function (req, res) {
    let mov = [
        {
            "id": 1,
            "name": "Your Name"
        }, {
            "id": 2,
            "name": "A Silent Voice"
        }, {
            "id": 3,
            "name":  "Weathering with You"
        }, {
            "id": 4,
            "name": "Spirited Away"
        }, {
            "id": 5,
            "name": "Princess Mononoke"
        }, {
            "id": 6,
            "name":  "Wolf Children"
        }]
       
    
    res.send(mov.find(ele => ele.id == req.params.filmid) || "No movie for this id")
});



// Pritesh Sir

router.get("/sol1", function (req, res) {
    //logic : sum of numbers is n(n+1)/2..so get sum of all numbers in array. now take sum of numbers till last digit in the array
    let arr= [1,2,3,5,6,7]
    let sum = 0
    arr.forEach(ele => sum = sum + ele)
    let missingNumber = 7*(7 + 1)/2 - sum

    ///LOGIC WILL GO HERE 
    res.send(  { data: missingNumber  }  );
});

router.get("/sol2", function (req, res) {
    //logic : sum of n consecutive numbers is [ n * (first + last) / 2  ]..so get sum of all numbers in array. now take sum of n consecutive numbers.. n would be length+1 as 1 number is missing
    let arr= [33, 34, 35, 37, 38]
    let sum = 0
    arr.forEach(ele => sum = sum + ele)
    let missingNumber = 6*(33 + 38)/2 -sum

    ///LOGIC WILL GO HERE 

    res.send(  { data: missingNumber  }  );
});

module.exports = router;
// adding this comment for no reason