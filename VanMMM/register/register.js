vanMMM.controller('RegisterCtrl', ['$scope', '$http', '$location', function($scope, $http, $location) {
    $scope.onViewLoad = function(){
      console.log('view changed');  
    };
    myEl.removeClass('active');
    myEl = angular.element( document.querySelector( '#register' ) );
    myEl.addClass('active');
    $scope.submit = function() {
  	  $scope.name = $scope.signup.username;
		  $scope.email = $scope.signup.email;

		  username = $scope.signup.username;
		  setCookie("name", username, 1);
		  //$location.path('/home');
	  var req = {
			  method: 'POST',
			  url: 'api/register/',
			  headers: {
			    'Content-Type': 'application/json'
			  },
			  data: {
	              "name": $scope.name,
	              "email":  $scope.email
	          },
			 }

	  $http(req).then(function(response){$scope.message = response.data;}, function(){});
		  
  	};
}]);