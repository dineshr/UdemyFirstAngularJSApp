var app = angular.module('MyApp', []);

app.controller('MyController', function ($scope) {
    $scope.MyVal = true;

    $scope.MyFun = function () {
        alert("Welcome to the Angular World!");
    };
});