'use strict';

// server-side dependencies
var express        = require('express'),
	// mongodb orm
	mongoose       = require('mongoose'),
	// parse response content
	bodyParser     = require('body-parser'),
	// parse cookie content
	cookieParser   = require('cookie-parser'),
	// maintain session state
	expressSession = require('express-session'),
	// environment
	port           = process.env.PORT || 7000,
	router         = express.Router(),
	// auth
	passport       = require('passport'),
	passportLocal  = require('passport-local'),
	// init app
	app            = express();

// http://enable-cors.org/server_expressjs.html
app.all('*', function(req, res, next) {
	res.header('Access-Control-Allow-Origin', '*');
	res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
	res.header('Access-Control-Allow-Headers', 'content-Type,X-Requested-With');
	next();
});

// parse request & response bodies with middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// app.use(cookieParser());
// app.use(expressSession());

// authenticate with passport middleware
app.use(passport.initialize());
app.use(passport.session());



// name of REST API resource == items
mongoose.connect('mongodb://localhost/items');

// items schema definition
var itemSchema = mongoose.Schema({
	createdOn: String,
	name: String,
	type: String
});

// new model for Item
var Item = mongoose.model('Item', itemSchema);

// API endpoint routes
router.route('/api/v1/items')
	// returns all items
	.get(function(req, res) {
		Item.find(function(err, items) {
			if(err) {
				res.send(err);
			} else {
				res.send(items);
			}
		});
	})

	// create new item
	.post(function(req, res) {
		var item = new Item();
		item.createdOn = req.body.createdOn;
		item.name      = req.body.name;
		item.type      = req.body.type;

		item.save(function(err) {
			if(err) {
				res.send(err);
			} else {
				res.send({ message : "item successfully created" });
			}
		});
	});

router.route('/api/v1/items/:id')
	.get(function(req, res) {
		Item.findOne({ _id : req.params.id }, function(err, item) {
			if(err) {
				res.send(err);
			} else {
				res.send(item);
			}
		});
	})

	// update an existing item based on its ID
	.put(function(req, res) {
		Item.findOne({ _id : req.params.id }, function(err, item) {
			item.createdOn = req.body.createdOn;
			item.name      = req.body.name;
			item.type      = req.body.type;

			item.save(function(err) {
				if(err) {
					res.send(err);
				} else {
					res.send({ message: "item successfully updated" });
				}
			});
		})
	})

	// delete an existing item based on its ID
	.delete(function(req, res) {
		Item.remove({ _id : req.params.id }, function(err, item) {
			if(err) {
				res.send(err);
			} else {
				res.send({ message : "item successfully deleted" });
			}
		});
	});

app.use(router);
app.listen(port, function() {
	console.log('Successfully started back-end server running @ http://localhost:' + port + '/api/v1/items');
});
