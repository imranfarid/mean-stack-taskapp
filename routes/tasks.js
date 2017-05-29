var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var url = 'mongodb://imran:hungrynaki@ds061777.mlab.com:61777/taskapp_imran';
var db = mongojs(url, ['tasks']);

router.get('/tasks', function(req, res, next){
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

module.exports = router;