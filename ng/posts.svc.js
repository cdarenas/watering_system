angular.module('app')
.service('PostsSvc', function($http){

	console.log('Loading measurements from db...')
	
	this.fetch = function(){
		return $http.get('/api/posts')
	}
	this.create = function(post){
		return $http.post('/api/posts', post)
	}
})