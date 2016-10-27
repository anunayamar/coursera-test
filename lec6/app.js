(function() {
'use strict';

angular.module('sampleModule', [])
.controller('SampleController', SampleController);

SampleController.$inject = ['$scope'];

function SampleController($scope){
  $scope.name = "Yaakov";
  $scope.stateOfBeing = "hungry";

  $scope.sayHello = function(){
    return "Welcome back!!";
  };

  $scope.feed = function(){
    $scope.stateOfBeing =  "fed";
  };
}

})();
