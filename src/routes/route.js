const express = require('express');
const externalModule = require('./logger')
const logger = require('../logger/logger')
const validator = require('../validator/formatter')
const util = require('../util/helper.js')

const router = express.Router();


router.get('/test-me', function (req, res) {
    //console.log('The constant in logger route has a value '+externalModule.endpoint)
    //console.log('The current batch is '+externalModule.batch)
    //externalModule.log()

    //Module 1
    logger.welcome()

    //Module2
    util.printDate()
    util.printMonth()
    util.getBatchInfo()

    //Module3
    validator.trim("     FunctionUp ")
    validator.changeToUpperCase("     FunctionUp ")
    validator.changeToLowerCase("     FunctionUp ")


    res.send('My first ever api!')
});

router.get('/test-me1', function (req, res) {
    res.send('My second ever api!')
});

router.get('/test-me2', function (req, res) {
    res.send('My third api!')
});

router.get('/test-me3', function (req, res) {
    res.send('My 4th api!')
});

router.get('/test-me4', function (req, res) {
    res.send('My last api!')
});

module.exports = router;
// adding this comment for no reason