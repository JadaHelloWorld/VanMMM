var vanMMM = angular.module('vanMMM', ['ngRoute']);
 
var myEl = angular.element( document.querySelector( '#home' ) );
var username = "admin";
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
        .when('/logout', {
            controller : 'LogoutCtrl',
            templateUrl : 'views/home.html'
        })
        .when('/register', {
            controller : 'RegisterCtrl',
            templateUrl : 'views/register.html'
        })
        .when('/aipubPublicRepositories', {
            controller : 'AipubPublicRepositoriesCtrl',
            templateUrl : 'views/aipubPublicRepositories.html'
        })
        .otherwise({redirectTo: '/home'});
    
}]);  

vanMMM.controller('MainCtrl', ['$scope', '$location', function($scope, $location){
	setCookie("name", "admin", 1);
	
	$scope.isUsername = function(){
		username = getCookie('name');
		$scope.username = username;
		return username !== "admin"? true: false;
	}
    $scope.date = new Date();
}]);

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

vanMMM.controller('LoginCtrl', ['$scope', '$location', function($scope, $location){
    $scope.title = "login";
    myEl.removeClass('active');
    myEl = angular.element( document.querySelector( '#login' ) );
    myEl.addClass('active');
    $scope.submit = function() {
  		  username = $scope.login.username;
  		  setCookie("name", username, 1);
  		  $location.path('/home');
    }
}]);

vanMMM.controller('LogoutCtrl', ['$scope', '$location', function($scope, $location){
    $scope.title = "logout";
    myEl.removeClass('active');
    myEl = angular.element( document.querySelector( '#logout' ) );
    setCookie("name", "admin", 1);
    username = "admin";
    $location.path('/home');
    
    
}]);

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

//设置cookie
function setCookie(name,value,iDay){	//三个参数分别为：cookie名称、值、多少天后过期
	var oDate=new Date();

	//这里的设置时间并不是修改系统时间，而是oDate这个日期对象内部的时间。使用这个方法可以算出该日期的几天后的日期时间
	oDate.setDate(oDate.getDate()+iDay);
	document.cookie=name+'='+value+';expires='+oDate;
};


//读取cookie
function getCookie(name){
	var arr=document.cookie.split('; ');
	for(var i=0;i<arr.length;i++){
		var arr2=arr[i].split('=');

		//拆分后，arr2[0]就代表cookie的name名称，arr[1]就代表cookie的value值
		if(arr2[0]==name){
			return arr2[1];
		}
	}
	return '';		//当用户是第一次进入网站，根本就还没有cookie的时候，返回一个空的字符串
	
};



