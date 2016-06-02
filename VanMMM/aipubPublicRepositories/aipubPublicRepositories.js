vanMMM.controller('AipubPublicRepositoriesCtrl', ['$scope', '$http', function($scope, $http){
	$http({
        method : "GET",
        url : "https://api.github.com/users/aipub/repos"
    }).then(function mySucces(response) {
    	response.data.sort(function(a,b) {
    	    return b.forks_count - a.forks_count;
    	});
        $scope.repos = response.data;
    }, function myError(response) {
        $scope.repos = [];
    });
}]);

