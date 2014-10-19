'use strict';

// server-side dependencies
var express    = require('express'),
	mongoose   = require('mongoose'),
	bodyParser = require('body-parser'),
	port       = process.env.PORT || 7000,
	router     = express.Router(),
	app        = express();

// http://enable-cors.org/server_expressjs.html
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header('Access-Control-Allow-Methods', 'GET,POST,PUT,HEAD,DELETE,OPTIONS');
  res.header("Access-Control-Allow-Headers", "content-Type,X-Requested-With");
  next();
});

// parse request & response bodies with middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
	extended: true
}));

// name of REST API resource == corals
mongoose.connect('mongodb://localhost/corals');

// corals schema definition
var coralSchema = mongoose.Schema({
	name: String,
	type: String
});

// new model for Coral
var Coral = mongoose.model('Coral', coralSchema);

// API endpoint routes
router.route('/api/v1/corals')
	// returns all corals
	.get(function(req, res) {
		Coral.find(function(err, corals) {
			if(err) {
				res.send(err);
			} else {
				res.send(corals);
			}
		});
	})

	// create new coral
	.post(function(req, res) {
		var coral = new Coral();
		coral.name = req.body.name;
		coral.type = req.body.type;

		coral.save(function(err) {
			if(err) {
				res.send(err);
			} else {
				res.send({ message : "coral successfully created" });
			}
		});
	});

router.route('/api/v1/corals/:id')
	.get(function(req, res) {
		Coral.findOne({ _id : req.params.id }, function(err, coral) {
			if(err) {
				res.send(err);
			} else {
				res.send(coral);
			}
		});
	})

	// update an existing coral based on its ID
	.put(function(req, res) {
		Coral.findOne({ _id : req.params.id }, function(err, coral) {
			coral.name = req.body.name;
			coral.type = req.body.type;

			coral.save(function(err) {
				if(err) {
					res.send(err);
				} else {
					res.send({ message: "coral successfully updated" });
				}
			});
		})
	})

	// delete an existing coral based on its ID
	.delete(function(req, res) {
		Coral.remove({ _id : req.params.id }, function(err, coral) {
			if(err) {
				res.send(err);
			} else {
				res.send({ message : "coral successfully deleted" });
			}
		});
	});

app.use(router);
app.listen(port);
console.log('Successfully started back-end server running @ http://localhost:' + port + '/api/v1/corals');