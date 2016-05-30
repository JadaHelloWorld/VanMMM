var vanMMM = angular.module('vanMMM', ['ngRoute']);
 
var myEl = angular.element( document.querySelector( '#home' ) );;
// create the controller and inject Angular's $scope
vanMMM.config(['$routeProvider', function($routeProvider){
    $routeProvider
	    .when('/home', {
	        controller : 'HomeCtrl',
	        templateUrl : 'views/home.html'
	    })
	    .when('/contactUs', {
	        controller : 'ContactUsCtrl',
	        templateUrl : 'views/contactUs.html'
	    })
        .when('/location/:location', {
            controller : 'LocationCtrl',
            templateUrl : 'views/home.html'
        })
        .when('/login', {
            controller : 'LoginCtrl',
            templateUrl : 'views/login.html'
        })
        .when('/register', {
            controller : 'RegisterCtrl',
            templateUrl : 'views/register.html'
        })
        .otherwise({redirectTo: '/'});
    
}]);  

vanMMM.controller('MainCtrl', ['$scope', function($scope){
	
    $scope.date = new Date();
}]);

vanMMM.controller('HomeCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.title = "Home Page";
    myEl.removeClass('active');
    myEl = angular.element( document.querySelector( '#home' ) );
    myEl.addClass('active');
}]);

vanMMM.controller('LocationCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.title = "Home Page";
    var local = $routeParams.location;
    $scope.location = $routeParams.location;
    myEl.removeClass('active');
    myEl = angular.element( document.querySelector( '#'+local ) );
    myEl.addClass('active');
}]);

vanMMM.controller('ContactUsCtrl', ['$scope', function($scope){
    $scope.title = "Contact Us";
    myEl.removeClass('active');
    myEl = angular.element( document.querySelector( '#contactUs' ) );
    myEl.addClass('active');
}]);

vanMMM.controller('LoginCtrl', ['$scope', function($scope){
    $scope.title = "login";
    myEl.removeClass('active');
    myEl = angular.element( document.querySelector( '#login' ) );
    myEl.addClass('active');
}]);

vanMMM.controller('RegisterCtrl', ['$scope', function($scope){
    $scope.onViewLoad = function(){
      console.log('view changed');  
    };
    myEl.removeClass('active');
    myEl = angular.element( document.querySelector( '#register' ) );
    myEl.addClass('active');
}]);

vanMMM.controller('register', ['$scope', '$http', 'httpParamSerializerJQLike', function($scope, $http, httpParamSerializerJQLike) {
      $scope.submit = function() {
    	  $scope.name = $scope.signup.username;
		  $scope.email = $scope.signup.email;
    	  $http({
	        method  : 'post',
	        url     : '/signup',
	        data    : $httpParamSerializerJQLike({
                name: $scope.name,
                email:  $scope.email
            }),
	        headers : { 'Content-Type': 'application/x-www-form-urlencoded' }  // set the headers so angular passing info as form data (not request payload)
	      })
	        .success(function(data) {
	            console.log(data);
	 
	            if (!data.success) {
	                // if not successful, bind errors to error variables
	                $scope.errorName = data.errors.name;
	                $scope.errorSuperhero = data.errors.superheroAlias;
	            } else {
	                // if successful, bind success message to message
	                $scope.message = data.message;
	            }
	      });
    	};
	  
	  
	}]);