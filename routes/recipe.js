var express = require('express')
var router = express.Router()

router.get('/', function(req, res) {
    res.render('index', {title: 'recipe'});
});

router.param('recipeid', /^\d+$/); // Recipes have an integer ID.
router.get('/:recipeid', function(req, res) {
    // TODO: Handle echoing a recipe back to the user here.
});

router.get('/add', function(req, res) {
    // TODO: Serve the recipe-add page here.
});

router.post('/add', function(req, res) {
    // TODO: Handle the addition of a recipe here.
});

module.exports = router;
