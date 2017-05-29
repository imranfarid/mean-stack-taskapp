var express = require('express');
var router = express.Router();
var mongojs = require('mongojs');
var db = mongojs('mongodb://imranfarid:mypassword123!@ds061777.mlab.com:61777/taskapp_imran', ['tasks']);

router.get('/tasks', function(req, res, next){
    db.tasks.find(function(err, tasks){
        if(err){
            res.send(err);
        }
        res.json(tasks);
    });
});

module.exports = router;