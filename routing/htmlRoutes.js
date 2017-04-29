var path = require('path');

module.exports = function (app) {

	app.get('/', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/dashboard.html'));
	});

	app.get('/dashboard', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/dashboard.html'));
	});

	app.get('/charts', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/charts.html'));
	});

	app.get('/login', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/login.html'));
	});

	app.get('/reports', function (req, res) {
		res.sendFile(path.join(__dirname + '/../public/reports.html'));
	});

}