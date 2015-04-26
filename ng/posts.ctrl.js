angular.module('app')
.controller('PostsCtrl', function($scope, $rootScope, $location, PostsSvc){

	PostsSvc.fetch().success(function(posts){
		$scope.posts = posts
	})

	$scope.postBody = null;

	$scope.addPost = function(){
		if ($scope.postBody){
			PostsSvc.create({
				username: 'Cristian',
				humidity: $scope.postBody}).success(function(post){
					$scope.posts.unshift(post)
					$scope.postBody = null
				})	
			}
		}
	})