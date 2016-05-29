var vanMMM = angular.module('vanMMM', ['ngRoute']);
 
var myEl = angular.element( document.querySelector( '#home' ) );;
// create the controller and inject Angular's $scope
vanMMM.config(['$routeProvider', function($routeProvider){
    $routeProvider
        .when('/', {
            controller : 'HomeCtrl',
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
        .otherwise({
            redirectTo : '/'
        });
}]);  

vanMMM.controller('MainCtrl', ['$scope', function($scope){
    $scope.date = new Date();
}]);

vanMMM.controller('HomeCtrl', ['$scope', function($scope){
    $scope.title = "Home Page";
    myEl.removeClass('active');
    myEl = angular.element( document.querySelector( '#home' ) );
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
