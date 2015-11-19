loginApp.factory('UserFactory', function ($http){
	var factory = {};
	factory.addUser = function (info, callback){
		$http.post('/addUser', info).success(function (output){
			callback(output);
		})
	}
	
	return factory;
})