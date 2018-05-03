var path = require('path');


module.exports = function (app) {

    app.get('/', function (req, res) { //catch all route
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    app.get('/home', function (req, res) { //home route
        res.sendFile(path.join(__dirname, '../public/home.html'));
    });

    app.get('/survey', function (req, res) { //survey route
        res.sendFile(path.join(__dirname, '../public/survey.html'));
    });




};