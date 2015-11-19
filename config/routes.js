var users = require('./../server/controllers/users.js');

module.exports = function (app) {
	app.post('/addUser', function (req, res){
		// console.log(req.body);
		users.addUser(req, res);
	})
}