loginApp.controller('UsersController', function ($scope, UserFactory, $routeParams){
	$scope.user = [];
	
	$scope.addUser = function(){
		// console.log($scope.currentUser);
		UserFactory.addUser($scope.newUser, function (data){
			console.log(data);
		})
	}
})