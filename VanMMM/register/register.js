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
		  $location.path('/home');
//  	  $http({
//	        method  : 'post',
//	        url     : '/signup',
//	        data    : $httpParamSerializerJQLike({
//              name: $scope.name,
//              email:  $scope.email
//          }),
//	        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
//	      })
//	        .success(function(data) {
//	            console.log(data);
//	 
//	            if (!data.success) {
//	                // if not successful, bind errors to error variables
//	                $scope.errorName = data.errors.name;
//	                $scope.errorSuperhero = data.errors.superheroAlias;
//	            } else {
//	                // if successful, bind success message to message
//	                $scope.message = data.message;
//	            }
//	      });
  	};
}]);