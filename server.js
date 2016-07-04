/**
 * Created by SteveT on 28/06/2016.
 */

// Babel ES6/JSX Compiler
require('babel-register');

var swig  = require('swig');
var React = require('react');
var ReactDOM = require('react-dom/server');
var Router = require('react-router');
var routes = require('./app/routes');

var express = require('express');
var path = require('path');
var logger = require('morgan');
var bodyParser = require('body-parser');

var async = require('async');
var request = require('request');

var config = require('./config');
var mongoose = require('mongoose');
var BusinessPartner = require('./models/businessPartner');

mongoose.connect(config.database);
mongoose.connection.on('error', function() {
    console.info('Error: Could not connect to MongoDB. Did you forget to run `mongod`?');
});

var app = express();

app.set('port', process.env.PORT || 3000);
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

/**
 * POST /api/characters
 * Adds new character to the database.
 */
app.post('/api/business-partners', function(req, res, next) {
    var title = req.body.title;
    var firstName = req.body.firstName;
    var lastName = req.body.lastName;
    var email = req.body.email;

    async.waterfall([
        function(callback) {

                        BusinessPartner.findOne({ email: email }, function(err, businessPartner) {
                            if (err) return next(err);

                            if (businessPartner) {
                                return res.status(409).send({ message: businessPartner.email + ' is already in the database.' });
                            }

                            var businessPartner = new BusinessPartner({
                                title: title,
                                firstName: firstName,
                                lastName: lastName,
                                email: email
                            });

                            businessPartner.save(function(err) {
                                if (err) return next(err);
                                res.send({ message: email + ' has been added successfully!' });
                            });

                            callback(err, email);
                        });
         }
    ]);
});

app.use(function(req, res) {
    Router.match({ routes: routes.default, location: req.url }, function(err, redirectLocation, renderProps) {
        if (err) {
            res.status(500).send(err.message)
        } else if (redirectLocation) {
            res.status(302).redirect(redirectLocation.pathname + redirectLocation.search)
        } else if (renderProps) {
            var html = ReactDOM.renderToString(React.createElement(Router.RoutingContext, renderProps));
            var page = swig.renderFile('views/index.html', { html: html });
            res.status(200).send(page);
        } else {
            res.status(404).send('Page Not Found')
        }
    });
});

/**
 * Socket.io stuff.
 */
var server = require('http').createServer(app);
var io = require('socket.io')(server);
var onlineUsers = 0;

io.sockets.on('connection', function(socket) {
    onlineUsers++;

    io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });

    socket.on('disconnect', function() {
        onlineUsers--;
        io.sockets.emit('onlineUsers', { onlineUsers: onlineUsers });
    });
});

server.listen(app.get('port'), function() {
    console.log('Craft - Express server listening on port ' + app.get('port'));
});