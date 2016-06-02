vanMMM.controller('HomeCtrl', ['$scope', '$routeParams', function($scope, $routeParams){
    $scope.title = "Home Page";
    myEl.removeClass('active');
    myEl = angular.element( document.querySelector( '#home' ) );
    myEl.addClass('active');
}]);