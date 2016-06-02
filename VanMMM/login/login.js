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