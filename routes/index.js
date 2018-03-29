const express = require('express');
const router = express.Router();



const request = require("request");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/uber', function(req, res, next){



    const options = { method: 'GET',
        url: 'https://api.uber.com/v1.2/products',
        qs:
            { latitude: '37.7759792',
                longitude: '-122.41823',
                access_token: 'KA.eyJ2ZXJzaW9uIjoyLCJpZCI6ImZkeHN5RlVrVHpDUHUyeGlFTmZ0aVE9PSIsImV4cGlyZXNfYXQiOjE1MjQ3OTA1MDIsInBpcGVsaW5lX2tleV9pZCI6Ik1RPT0iLCJwaXBlbGluZV9pZCI6MX0.AoxdlE-O_arIRiwU-YT7Iu1SX8Th5ClaMf3niBq8TeU' },
        headers:
            { 'Postman-Token': 'aebe2005-cb00-4c0c-8490-bf68e617c531',
                'Cache-Control': 'no-cache' } };



    request(options, function (error, response, body){
        if (error) throw new Error(error);

        console.log(body);


        res.render('index', {title: 'Express', uberprice: JSON.parse(body)})
    });


});


router.get('/uber1', function(req, res, next){




    const options = { method: 'GET',
        url: 'https://maps.googleapis.com/maps/api/directions/json',
        qs:
            { origin: '75+9th+Ave+New+York,+NY',
                destination: 'MetLife+Stadium+1+MetLife+Stadium+Dr+East+Rutherford,+NJ+07073',
                key: 'AIzaSyBP8B_RmjbgwVFU6HSWT18ikWQG19QQikk' },
        headers:
            { 'Postman-Token': 'ab1ba7ae-2aef-4b3e-b6b4-9cc811371fe4',
                'Cache-Control': 'no-cache' } };

    request(options, function (error, response, body) {
        if (error) throw new Error(error);

        console.log(body);
        res.render('index', {title: 'Express', google: JSON.parse(body)})
    });




});

module.exports = router;
