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
            templateUrl : 'login/login.html'
        })
        .when('/logout', {
            controller : 'LogoutCtrl',
            templateUrl : 'views/home.html'
        })
        .when('/register', {
            controller : 'RegisterCtrl',
            templateUrl : 'register/register.html'
        })
        .when('/aipubPublicRepositories', {
            controller : 'AipubPublicRepositoriesCtrl',
            templateUrl : 'aipubPublicRepositories/aipubPublicRepositories.html'
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



vanMMM.controller('LogoutCtrl', ['$scope', '$location', function($scope, $location){
    $scope.title = "logout";
    myEl.removeClass('active');
    myEl = angular.element( document.querySelector( '#logout' ) );
    setCookie("name", "admin", 1);
    username = "admin";
    $location.path('/home');
    
    
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



