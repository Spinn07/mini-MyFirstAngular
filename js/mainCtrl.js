angular.module('friendsList')
.controller('mainCtrl', function($scope){
  $scope.friends = ['John', 'James','Bill'];
  $scope.addFriend = function(name){
    $scope.friends.push(name);
    $scope.name = "";
  };

});
