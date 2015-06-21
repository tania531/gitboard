// Code goes here

var app = angular.module("gh-app", []);

app.controller("GHCtrl", function($scope, $http) {
  // $scope.users = false;
  $scope.keys = [];
  $scope.results = [];
  $scope.values = [];
  $scope.username = '';
  // var url = "http://points.agilelabs.com/tania531.json";
  $scope.users = [];

  $scope.searchUser = function(username){
    var url = "http://points.agilelabs.com/" + username + ".json";

    console.log('click');
    $http.get(url).
    success(function(data) {
      console.log(data);

      // $scope.u = data;
      // 
      $scope.users.push(data);

      console.log($scope.users);
    }).
    error(function(data) {
      console.log('error with fetch request');
    });

  };
});
