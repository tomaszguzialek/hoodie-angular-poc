var app = angular.module('hoodie-angular-poc', []);

app.controller('AppController', ['$scope', 'userService', function($scope, userService) {
    $scope.who = 'world';
    
    $scope.isLoggedIn = function() {
        return userService.isLoggedIn();
    };
    
    $scope.login = function(username, password) {
        userService.login(username, password, function() {
                console.log('Login attempt successful!');
                if (!$scope.$$phase) $scope.$apply();
            }, function() {
                console.log('Login attempt unsuccessful!');
                if (!$scope.$$phase) $scope.$apply();
            }
        );
    };
    
    $scope.logout = function() {
        userService.logout(function() {
            console.log('Logged out successfully!');
            if (!$scope.$$phase) $scope.$apply();
        }, function() {
            console.log('Logout failed!');
            if (!$scope.$$phase) $scope.$apply();
        });
        if (!$scope.$$phase) $scope.$apply();
    };
    
}]);

app.service('userService', function() {
    this.hoodie = new Hoodie();
    
    this.login = function(username, password, successCallback, failCallback) {
        this.hoodie.account.signIn(username, password)
            .done(function (accountProperties) {
                successCallback();
            }).fail(function (error) {
                failCallback();
            });
    };
    
    this.logout = function(successCallback, failCallback) {
        this.hoodie.account.signOut()
        .done(function(accountProperties) {
            successCallback();
        })
        .fail(function(error) {
            failCallback();
        });
    };
    
    this.isLoggedIn = function() {
        if (this.hoodie.account.username) {
            return true;
        } else {
            return false;
        }
    };
});
