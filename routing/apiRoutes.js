var cityData = require ('../data/city-data.js');

module.exports = function (app) {

	app.get('/api/cityInfo', function (req, res) {
		res.json(cityData);
	});

}