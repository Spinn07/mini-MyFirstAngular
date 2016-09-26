angular.module('friendsList')
.controller('mainCtrl', function($scope){
  $scope.friends = ['Jordyn', 'Ryan', 'Chelsey'];
  $scope.friendAdder = function(x){
    $scope.friends.push(x);
    $scope.adder="";
  }
})
