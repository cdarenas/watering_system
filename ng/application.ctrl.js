angular.module('app').run(function($rootScope, $location){
	$rootScope.loggedUser = null;

	$rootScope.$on('$routeChangeStart', function(event, next, current){
	
		if ($rootScope.loggedUser == null)
		{
			$location.path('/login');
		}
	})
})
.controller('ApplicationCtrl', function($scope, $rootScope){
	$scope.$on('login', function(_, user){
		$scope.currentUser = user;
		$rootScope.loggedUser = user;
	})
})	