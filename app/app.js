var app = angular.module('hoodie-angular-poc', []);

app.controller('AppController', ['$scope', function($scope) {
    $scope.who = 'world';
}]);
