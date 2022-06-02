const express = require('express');
const underscore = require('underscore')

const router = express.Router();

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

module.exports = router;
// adding this comment for no reason